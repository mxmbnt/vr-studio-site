// Custom code from the template's Webflow embeds, run once the runtime and GSAP are loaded.
const gsap = () => window.gsap

// Counters (.counter): count up from 0 when they enter the viewport. Offset via data-offset (default 80%).
function counters() {
  document.querySelectorAll('.counter').forEach((counter) => {
    const finalText = counter.textContent.trim()
    const endValue = parseFloat(finalText.replace(/[^0-9.-]/g, ''))
    if (Number.isNaN(endValue)) return
    const suffix = finalText.replace(/[0-9.-]/g, '')
    const decimals = finalText.includes('.') ? 1 : 0
    const offset = counter.getAttribute('data-offset') || '80%'
    counter.textContent = '0' + suffix
    const obj = { value: 0 }
    gsap().to(obj, {
      value: endValue,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: counter, start: `top ${offset}`, once: true },
      onUpdate() {
        counter.textContent = obj.value.toFixed(decimals) + suffix
      },
    })
  })
}

// Industries: cards cycle automatically (6s progress bar), image cross-fade, info box opens, Lottie icon replays.
function industries() {
  const cards = document.querySelectorAll('.industry-card-item')
  const images = document.querySelectorAll('.industry-image-wrap')
  if (!cards.length) return
  const g = gsap()
  const DURATION = 6
  let current = 0
  let masterTL

  g.set(images, { opacity: 0 })
  g.set(images[0], { opacity: 1 })
  g.set('.industry-info-box', { height: 0 })
  g.set('.line-industry', { width: '0%' })
  g.set('.industry-card-icon', { opacity: 0 })
  g.set(cards[0].querySelector('.industry-card-icon'), { opacity: 1 })
  cards[0].classList.add('active')

  const resetLottie = () =>
    document.querySelectorAll('.industry-icon').forEach((icon) => icon.lottie && icon.lottie.stop())
  const playLottie = (index) => {
    const icon = cards[index].querySelector('.industry-icon')
    if (icon && icon.lottie) {
      icon.lottie.stop()
      icon.lottie.play()
    }
  }

  function goTo(index) {
    if (masterTL) masterTL.kill()
    const previous = current
    const infoBox = cards[index].querySelector('.industry-info-box')
    const progressBar = cards[index].querySelector('.line-industry')
    const activeIcon = cards[index].querySelector('.industry-card-icon')

    cards.forEach((card) => card.classList.remove('active'))
    cards[index].classList.add('active')
    resetLottie()

    masterTL = g.timeline({
      onComplete: () => {
        current = (index + 1) % cards.length
        goTo(current)
      },
    })
    if (images[previous]) masterTL.to(images[previous], { opacity: 0, duration: 0.5 })
    g.set('.industry-info-box', { height: 0 })
    g.set('.line-industry', { width: '0%' })
    masterTL.to('.industry-card-icon', { opacity: 0, duration: 0.3 }, '<')
    masterTL.to(images[index], { opacity: 1, duration: 0.5 }, '<')
    masterTL.to(activeIcon, { opacity: 1, duration: 0.4 }, '<')
    masterTL.to(infoBox, { height: 'auto', duration: 0.5, ease: 'power2.out' }, '<')
    masterTL.add(() => playLottie(index), '<')
    masterTL.to(progressBar, { width: '100%', duration: DURATION, ease: 'linear' })
    current = index
  }

  cards.forEach((card, index) => card.addEventListener('click', () => goTo(index)))
  goTo(0)
}

// Home Two CTA: text scrolling along an SVG curve
function curvedText() {
  window.Webflow.push(() => {
    const src = document.querySelector('[data-curve-text-source="cta-text"]')
    const textPath = document.querySelector('#curved-text')
    if (!src || !textPath) return
    const base = src.textContent.trim()
    if (!base) return
    textPath.textContent = (base + '   ').repeat(4)
    gsap().fromTo(
      textPath,
      { attr: { startOffset: '50%' } },
      { attr: { startOffset: '-80%' }, duration: 38, repeat: -1, ease: 'none' }
    )
  })
}

// Password page (401): show the error message when redirected with ?e=1
function passwordPage() {
  if (!/[?&]e=1(&|$)/.test(location.search)) return
  const fail = document.querySelector('.w-password-page.w-form-fail')
  if (fail) fail.style.display = 'block'
}

// Forms: the Webflow export posts to Webflow's servers. Locally they only show the success message;
// plug your own endpoint here (fetch to Formspree, an API route...).
function forms() {
  document.addEventListener(
    'submit',
    (e) => {
      const form = e.target.closest('.w-form form, form.w-password-page')
      if (!form || form.classList.contains('w-password-page')) return
      e.preventDefault()
      e.stopImmediatePropagation()
      const wrap = form.closest('.w-form')
      form.style.display = 'none'
      const done = wrap && wrap.querySelector('.w-form-done')
      if (done) done.style.display = 'block'
    },
    true
  )
}

export function initCustom() {
  counters()
  industries()
  curvedText()
  passwordPage()
  forms()
}
