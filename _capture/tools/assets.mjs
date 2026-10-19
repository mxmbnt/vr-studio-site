// Collect every remote asset used by the captured pages + CSS, download it to public/, write a url->local map.
import fs from 'fs'
import path from 'path'
const [,, CAP, PUB] = process.argv
const unesc = (s) => s.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#x27;/g, "'")
const pagesTxt = fs.readdirSync(path.join(CAP, 'pages')).map((f) => fs.readFileSync(path.join(CAP, 'pages', f), 'utf8')).join('\n')
const css = fs.readFileSync(path.join(CAP, 'src-orig/cleanhas.webflow.shared.d732dd94b.css'), 'utf8')
const CDN = 'https://cdn.prod.website-files.com/'
const found = new Set()
const add = (u) => { u = unesc(u).trim(); if (u.startsWith(CDN)) found.add(u) }
let all = pagesTxt
// URL-encoded templates (w-dyn pagination / rich text)
for (const m of pagesTxt.matchAll(/%3C[^\s"<]+/g)) { try { all += '\n' + decodeURIComponent(m[0]) } catch {} }
for (const m of all.matchAll(/\s(?:src|href|data-src|poster|data-poster-url|content)="([^"]+)"/g)) add(m[1])
for (const m of all.matchAll(/\ssrcset="([^"]+)"/g)) m[1].split(/,\s+/).forEach((p) => add(p.trim().split(/\s+/)[0]))
for (const m of all.matchAll(/data-video-urls="([^"]+)"/g)) m[1].split(',').forEach(add)
for (const m of (unesc(all) + css).matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) add(m[1])
const dirFor = (ext) => ({ js: 'js', mp4: 'video', webm: 'video', lottie: 'lottie', json: 'lottie', woff: 'fonts', woff2: 'fonts', ttf: 'fonts', otf: 'fonts' })[ext] ?? 'img'
const map = {}
const list = [...found].filter((u) => !/\.css$/.test(u) && !/\/gsap\//.test(u) && !/\/js\/webflow\./.test(u))
const fail = []
const used = new Map()
for (const u of list) {
  let name = u.replace(/%2F/gi, '/').split('?')[0].split('/').pop()
  try { name = decodeURIComponent(name) } catch {}
  const ext = name.split('.').pop().toLowerCase()
  name = name.replace(/[^A-Za-z0-9._-]+/g, '-').replace(/-+/g, '-')
  let rel = `${dirFor(ext)}/${name}`
  if (used.has(rel) && used.get(rel) !== u) rel = `${dirFor(ext)}/${u.split('/')[3].slice(-6)}-${name}`
  used.set(rel, u)
  map[u] = '/' + rel
}
let i = 0
await Promise.all(Array.from({ length: 12 }, async () => {
  while (i < list.length) {
    const u = list[i++]
    const dst = path.join(PUB, map[u])
    fs.mkdirSync(path.dirname(dst), { recursive: true })
    if (fs.existsSync(dst)) continue
    try {
      const res = await fetch(encodeURI(decodeURI(u.replace(/%2F/gi, '/'))))
      if (!res.ok) throw new Error(res.status)
      fs.writeFileSync(dst, Buffer.from(await res.arrayBuffer()))
    } catch (e) { fail.push(u + ' ' + e.message); delete map[u] }
  }
}))
fs.writeFileSync(path.join(CAP, 'src-orig/asset-map.json'), JSON.stringify(map, null, 1))
console.log('assets', Object.keys(map).length, 'failed', fail.length)
fail.forEach((f) => console.log('  ✗', f))
