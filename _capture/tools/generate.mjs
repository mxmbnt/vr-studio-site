// Converts the captured Webflow pages into React components.
// Usage: node generate.mjs <project-dir>
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { parse, serializeOuter } from 'parse5'

const P = process.argv[2]
const CAP = path.join(P, '_capture')
const SRC = path.join(P, 'src')
const map = JSON.parse(fs.readFileSync(path.join(CAP, 'src-orig/asset-map.json'), 'utf8'))

// ---------------------------------------------------------------- URL rewriting
const variants = (u) => {
  const out = new Set([u, u.replace(/&/g, '&amp;')])
  try { out.add(encodeURI(decodeURI(u))) } catch {}
  try { out.add(decodeURI(u)) } catch {}
  out.add(u.replace(/%2F/gi, '/'))
  return [...out]
}
const pairs = Object.entries(map)
  .flatMap(([u, l]) => variants(u).map((v) => [v, l]))
  .sort((a, b) => b[0].length - a[0].length)
const rewrite = (s) => {
  for (const [u, l] of pairs) if (s.includes(u)) s = s.split(u).join(l)
  return s.replace(/https:\/\/cleanhas\.webflow\.io(?=\/)/g, '')
}

// ---------------------------------------------------------------- HTML -> JSX
const ATTR = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', srcset: 'srcSet', autoplay: 'autoPlay',
  playsinline: 'playsInline', crossorigin: 'crossOrigin', maxlength: 'maxLength', minlength: 'minLength',
  readonly: 'readOnly', colspan: 'colSpan', rowspan: 'rowSpan', frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen', enctype: 'encType', novalidate: 'noValidate', autocomplete: 'autoComplete',
  'accept-charset': 'acceptCharset', 'http-equiv': 'httpEquiv', contenteditable: 'contentEditable',
  datetime: 'dateTime', referrerpolicy: 'referrerPolicy', 'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace',
  'xmlns:xlink': 'xmlnsXlink', fetchpriority: 'fetchPriority', autofocus: 'autoFocus', spellcheck: 'spellCheck', inputmode: 'inputMode', formnovalidate: 'formNoValidate',
}
const BOOL = new Set(['autofocus', 'autoplay', 'muted', 'loop', 'playsinline', 'required', 'disabled', 'checked', 'allowfullscreen', 'novalidate', 'multiple', 'readonly', 'hidden', 'async', 'defer', 'open', 'selected'])
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'])
// SVG presentation attributes React expects in camelCase (unknown ones, like the template's
// misspelled letter-spcaeing, are kept as is)
const SVG_ATTR = /^(stroke-[a-z]+|fill-(rule|opacity)|clip-(path|rule)|stop-(color|opacity)|font-(family|size|weight|style)|text-(anchor|decoration|rendering)|letter-spacing|word-spacing|dominant-baseline|alignment-baseline|baseline-shift|color-interpolation(-filters)?|flood-(color|opacity)|lighting-color|marker-(start|mid|end)|shape-rendering|image-rendering|pointer-events|vector-effect|paint-order|mask-type|transform-origin|enable-background|glyph-orientation-[a-z]+|overline-[a-z]+|underline-[a-z]+|strikethrough-[a-z]+|unicode-bidi|writing-mode)$/
const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
const str = (s) => JSON.stringify(s)

function styleObj(css) {
  const out = []
  for (const decl of css.split(/;(?![^(]*\))/)) {
    const i = decl.indexOf(':')
    if (i < 0) continue
    let k = decl.slice(0, i).trim()
    const v = decl.slice(i + 1).trim()
    if (!k) continue
    if (k.startsWith('--')) {
      // custom property: kept as is
    } else if (k.startsWith('-ms-')) k = camel(k.slice(1))
    else if (k.startsWith('-')) k = camel(k.slice(1)).replace(/^./, (c) => c.toUpperCase())
    else k = camel(k.toLowerCase())
    out.push(`${/^[a-zA-Z]+$/.test(k) ? k : str(k)}: ${str(v)}`)
  }
  return `{{ ${out.join(', ')} }}`
}

function attrs(node, inSvg) {
  return (node.attrs || []).map(({ name, value }) => {
    const raw = name
    if (name === 'style') return value.trim() ? `style=${styleObj(value)}` : null
    if (node.tagName === 'input' && name === 'value' && !/^(submit|button|hidden|radio|checkbox)$/.test(node.attrs.find((a) => a.name === 'type')?.value || '')) name = 'defaultValue'
    else if (node.tagName === 'input' && name === 'checked') name = 'defaultChecked'
    else if (node.tagName === 'option' && name === 'selected') return null
    else if (ATTR[name]) name = ATTR[name]
    else if (inSvg && SVG_ATTR.test(name)) name = camel(name)
    else if (name.includes(':')) name = camel(name.replace(':', '-'))
    if (BOOL.has(raw) && (value === '' || value === raw || value === 'true')) return name
    return `${name}=${str(value)}`
  }).filter(Boolean)
}

const scripts = []
function jsx(node, depth, ctx) {
  const pad = '  '.repeat(depth)
  if (node.nodeName === '#comment') return []
  if (node.nodeName === '#text') {
    const t = node.value
    if (!t.trim()) return /^(table|tbody|thead|tr|select|colgroup)$/.test(ctx.parent) ? [] : [pad + '{" "}']
    return [pad + (/[{}<>"'`\\]|&|^\s|\s$|\s\s/.test(t) ? `{${str(t)}}` : t)]
  }
  const tag = node.tagName
  const inSvg = ctx.svg || tag === 'svg'
  const kids = node.tagName === 'template' ? node.content.childNodes : node.childNodes || []
  if (tag === 'script') {
    const type = node.attrs.find((a) => a.name === 'type')?.value || ''
    const code = kids.map((k) => k.value).join('')
    if (!type || /javascript|module/.test(type)) {
      scripts.push({ page: ctx.page, code: code.trim(), src: node.attrs.find((a) => a.name === 'src')?.value })
      return []
    }
    return [pad + `<script ${attrs(node, false).join(' ')} dangerouslySetInnerHTML={{ __html: ${str(code)} }} />`]
  }
  if (tag === 'style') {
    const css = kids.map((k) => k.value).join('')
    return [pad + `<style dangerouslySetInnerHTML={{ __html: ${str(css)} }} />`]
  }
  if (tag === 'textarea') {
    const v = kids.map((k) => k.value).join('')
    const a = attrs(node, false)
    if (v) a.push(`defaultValue=${str(v)}`)
    return [pad + `<textarea ${a.join(' ')} />`]
  }
  const a = attrs(node, inSvg)
  if (node.attrs?.some((x) => x.name === 'contenteditable')) a.push('suppressContentEditableWarning')
  const open = `<${tag}${a.length ? ' ' + a.join(' ') : ''}`
  if (VOID.has(tag) || !kids.length) return [pad + open + ' />']
  // Short single-text children stay on one line
  if (kids.length === 1 && kids[0].nodeName === '#text' && kids[0].value.trim() && kids[0].value.length < 90 && !kids[0].value.includes('\n')) {
    return [pad + open + '>' + jsx(kids[0], 0, { ...ctx, parent: tag, svg: inSvg })[0] + `</${tag}>`]
  }
  return [pad + open + '>', ...kids.flatMap((k) => jsx(k, depth + 1, { ...ctx, parent: tag, svg: inSvg })), pad + `</${tag}>`]
}

// ---------------------------------------------------------------- pages
const PAGES = {
  'index': { route: '/', name: 'Landing' },
  'home-pages__home': { route: '/home-pages/home', name: 'Home' },
  'home-pages__home-two': { route: '/home-pages/home-two', name: 'HomeTwo' },
  'template-pages__about-us': { route: '/template-pages/about-us', name: 'AboutUs' },
  'template-pages__services': { route: '/template-pages/services', name: 'Services' },
  'template-pages__projects': { route: '/template-pages/projects', name: 'Projects' },
  'template-pages__blog': { route: '/template-pages/blog', name: 'Blog' },
  'template-pages__contact-us': { route: '/template-pages/contact-us', name: 'ContactUs' },
  'utility-pages__style-guide': { route: '/utility-pages/style-guide', name: 'StyleGuide' },
  'utility-pages__license': { route: '/utility-pages/license', name: 'License' },
  'utility-pages__changelog': { route: '/utility-pages/changelog', name: 'Changelog' },
  'utility-pages__instructions': { route: '/utility-pages/instructions', name: 'Instructions' },
  '404': { route: null, name: 'NotFound' },
  '401': { route: '/401', name: 'Protected' },
}
const CMS = { blogs: 'BlogPost', service: 'ServiceDetail', projects: 'ProjectDetail' }

const SECTION_NAMES = {
  herro: 'Hero', indsutries: 'Industries', 'projct-bottom': 'RelatedProjects', 'blog-details-bottom': 'RelatedPosts',
  'service-details': 'ServiceDetails', 'project-details': 'ProjectDetails', 'blog-details': 'BlogDetails',
  'choose-us': 'ChooseUs', 'testimonial-two': 'Testimonials', testimonial: 'Testimonials', 'project-two': 'Projects',
  project: 'Projects', service: 'Services', 'about-us': 'About', 'footer-preview': 'FooterPreview', 'quick-page': 'QuickPages',
  'support-pages': 'SupportPages', 'blog-page': 'BlogList', 'project-page': 'ProjectList', 'service-page': 'ServiceList',
  'style-guide': 'StyleGuide', industry: 'Industries',
}
const pascal = (s) => s.split(/[-_ ]+/).map((w) => w[0].toUpperCase() + w.slice(1)).join('')
const cls = (n) => (n.attrs || []).find((a) => a.name === 'class')?.value || ''
const els = (n) => (n.childNodes || []).filter((c) => c.tagName)

function sectionName(node, i) {
  const c = cls(node).split(/\s+/).filter((x) => x && x !== 'section' && !x.startsWith('w-variant'))
  if (i === 0 && !c.length) return 'Navbar'
  if (!c.length) return 'Hero'
  const key = c[0] === 'blog' || c[0] === 'cta' ? c[0] : c[0]
  return SECTION_NAMES[key] || pascal(key)
}
// Webflow marks the current link in the HTML; the runtime re-applies it from the URL, so it is stripped for dedupe
const normalize = (html) => html.replace(/ w--current/g, '').replace(/ aria-current="page"/g, '')

const files = fs.readdirSync(path.join(CAP, 'pages')).filter((f) => f.endsWith('.html'))
const pageInfo = []
const sectionUses = new Map() // hash -> { node, html, names:Set, pages:[] }
for (const f of files) {
  const key = f.replace('.html', '')
  const raw = rewrite(fs.readFileSync(path.join(CAP, 'pages', f), 'utf8'))
  const doc = parse(raw)
  const [head, body] = els(els(doc)[0])
  const html = els(doc)[0]
  const wfPage = html.attrs.find((a) => a.name === 'data-wf-page').value
  const title = (els(head).find((n) => n.tagName === 'title')?.childNodes[0]?.value || '').replace(/ - Cleanhas - Webflow HTML Website Template$/, '')
  const headCss = els(head).filter((n) => n.tagName === 'style').map((n) => n.childNodes.map((c) => c.value).join('')).filter((c) => !c.includes('data-wf-bgvideo-fallback-img'))
  const chunks = els(body).concat(els(head)).filter((n) => n.tagName === 'script').map((n) => n.attrs.find((a) => a.name === 'src')?.value).filter((s) => s && /webflow\.[0-9a-f]{8}\./.test(s)).map((s) => s.split('/').pop())
  const usesSchunk3 = raw.includes('webflow.schunk.6af430274fe922d1.js')
  const wrapper = els(body).find((n) => /page-wrapper/.test(cls(n))) || body
  const wrapperClass = wrapper === body ? cls(body) : cls(wrapper)
  // 401: sections are direct children of <body class="page-wrapper ...">
  const sections = els(wrapper).filter((n) => n.tagName !== 'script')
  for (const n of els(body)) if (n.tagName === 'script') jsx(n, 0, { page: key })
  const list = sections.map((n, i) => {
    const h = crypto.createHash('md5').update(normalize(serializeOuter(n))).digest('hex').slice(0, 8)
    const name = sectionName(n, i)
    if (!sectionUses.has(h)) sectionUses.set(h, { node: n, names: new Set(), pages: [] })
    sectionUses.get(h).names.add(name)
    sectionUses.get(h).pages.push(key)
    return { hash: h, name }
  })
  const [col, slug] = key.split('__')
  const cms = slug && CMS[col] ? { col, slug, template: CMS[col] } : null
  pageInfo.push({ key, title, wfPage, headCss, chunks, usesSchunk3, wrapperClass, sections: list, cms, ...(PAGES[key] || {}) })
}

// ---------------------------------------------------------------- component placement
// A section used by several distinct page groups goes to src/sections/shared, otherwise next to its page.
const groupOf = (key) => (pageInfo.find((p) => p.key === key).cms?.template) || PAGES[key].name
const comp = new Map() // hash -> { dir, name, file }
const taken = new Set()
for (const [h, u] of sectionUses) {
  const groups = [...new Set(u.pages.map(groupOf))]
  const base = [...u.names][0]
  const dir = groups.length > 1 ? 'shared' : groups[0]
  let name = base
  // variants of the same shared block (navbar, footer...) get a suffix
  for (let n = 2; taken.has(dir + '/' + name); n++) name = base + n
  taken.add(dir + '/' + name)
  comp.set(h, { dir, name, groups })
}
// Name shared variants after the page that owns them (Footer2 -> FooterHome...)
for (const [h, c] of comp) {
  if (c.dir !== 'shared' || !/\d$/.test(c.name)) continue
  const owner = sectionUses.get(h).pages.map(groupOf)
  const nice = c.name.replace(/\d+$/, '') + [...new Set(owner)].join('')
  if (!taken.has('shared/' + nice) && nice.length < 40) { taken.add('shared/' + nice); c.name = nice }
}

fs.rmSync(path.join(SRC, 'sections'), { recursive: true, force: true })
fs.rmSync(path.join(SRC, 'pages'), { recursive: true, force: true })
fs.rmSync(path.join(SRC, 'components'), { recursive: true, force: true })

// CMS detail sections are written per item in src/pages/<Template>/<slug>/ via a data module, so skip them here.
const cmsUnique = new Set()
for (const p of pageInfo) if (p.cms) for (const s of p.sections) if (comp.get(s.hash).groups.length === 1 && sectionUses.get(s.hash).pages.length === 1) cmsUnique.add(s.hash)

for (const [h, c] of comp) {
  if (cmsUnique.has(h)) continue
  const u = sectionUses.get(h)
  const body = jsx(u.node, 2, { page: u.pages[0] }).join('\n')
  const dir = path.join(SRC, 'sections', c.dir)
  fs.mkdirSync(dir, { recursive: true })
  const usedBy = [...new Set(u.pages)].join(', ')
  fs.writeFileSync(path.join(dir, c.name + '.jsx'), `// Used by: ${usedBy}\nexport default function ${c.name}() {\n  return (\n${body}\n  )\n}\n`)
}

// ---------------------------------------------------------------- pages
const pagesDir = path.join(SRC, 'pages')
fs.mkdirSync(pagesDir, { recursive: true })
const routeMeta = []
const importPath = (from, c) => path.relative(from, path.join(SRC, 'sections', c.dir, c.name + '.jsx')).replace(/^(?!\.)/, './')

function pageFile(file, name, sections, headCss, propsSig) {
  const from = path.dirname(file)
  const imports = [...new Map(sections.filter((s) => !s.inline).map((s) => [s.c.name + s.c.dir, s.c])).values()]
  // Local alias when a section has the page's name or two imported sections share a name
  const alias = new Map()
  for (const c of imports) {
    const clash = c.name === name || imports.some((o) => o !== c && o.name === c.name) || sections.some((s) => s.inline && s.local === c.name)
    alias.set(c, clash ? c.name + (c.dir === 'shared' ? 'Shared' : 'Section') : c.name)
  }
  for (const s of sections) if (!s.inline) s.local = alias.get(imports.find((c) => c.name === s.c.name && c.dir === s.c.dir))
  const lines = imports.map((c) => `import ${alias.get(c)} from '${importPath(from, c)}'`)
  const css = headCss.length ? `\n// Initial states of the page interactions (from the Webflow <head>)\nconst css = ${str(headCss.join('\n'))}\n` : ''
  const usedNames = new Set(imports.map((c) => c.name))
  const inline = sections.filter((s) => s.inline)
  const out = `${lines.join('\n')}\n${css}${inline.map((s) => s.code).join('\n')}\nexport default function ${name}(${propsSig || ''}) {\n  return (\n    <>\n${css ? '      <style dangerouslySetInnerHTML={{ __html: css }} />\n' : ''}${sections.map((s) => `      <${s.local} />`).join('\n')}\n    </>\n  )\n}\n`
  fs.writeFileSync(file, out.replace(/^\n/, ''))
  return usedNames
}

for (const p of pageInfo.filter((p) => !p.cms)) {
  const secs = p.sections.map((s) => ({ c: comp.get(s.hash) }))
  pageFile(path.join(pagesDir, p.name + '.jsx'), p.name, secs, p.headCss)
  routeMeta.push({ route: p.route, name: p.name, title: p.title, wfPage: p.wfPage, chunks: p.chunks, schunk3: p.usesSchunk3, wrapper: p.wrapperClass })
}

// CMS collections: one component per item for its unique section(s), shared sections imported once
for (const [col, template] of Object.entries(CMS)) {
  const items = pageInfo.filter((p) => p.cms?.col === col)
  const dir = path.join(pagesDir, template)
  fs.mkdirSync(dir, { recursive: true })
  for (const p of items) {
    const secs = p.sections.map((s) => {
      const c = comp.get(s.hash)
      if (!cmsUnique.has(s.hash)) return { c }
      const local = s.name
      const code = `function ${local}() {\n  return (\n${jsx(sectionUses.get(s.hash).node, 2, { page: p.key }).join('\n')}\n  )\n}\n`
      return { inline: true, local, code }
    })
    const name = pascal(p.cms.slug)
    pageFile(path.join(dir, p.cms.slug + '.jsx'), name, secs, p.headCss)
    routeMeta.push({ route: `/${col}/${p.cms.slug}`, name: `${template}/${p.cms.slug}`, comp: name, title: p.title, wfPage: p.wfPage, chunks: p.chunks, schunk3: p.usesSchunk3, wrapper: p.wrapperClass })
  }
}

fs.writeFileSync(path.join(CAP, 'routes.json'), JSON.stringify(routeMeta, null, 1))
fs.writeFileSync(path.join(CAP, 'inline-scripts.json'), JSON.stringify(scripts.filter((s) => s.code), null, 1))
console.log('pages', routeMeta.length)
for (const [h, c] of comp) if (!cmsUnique.has(h)) console.log(`${c.dir}/${c.name}`.padEnd(42), [...new Set(sectionUses.get(h).pages)].length, 'pages')
const uniq = [...new Map(scripts.filter((s) => s.code).map((s) => [s.code, s])).values()]
console.log('unique inline scripts', uniq.length)
