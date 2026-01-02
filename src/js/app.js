import Zooming from 'zooming'
import Swiper, { Navigation } from 'swiper'
Swiper.use([Navigation])

document.addEventListener('DOMContentLoaded', () => {
  const zooming = new Zooming({
    scaleBase: 0.5
  })

  zooming.listen('.img-zoomable')

  // eslint-disable-next-line
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.related-next',
      prevEl: '.related-prev'
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  })

  // Table of Contents mobile toggle
  const tocContainer = document.getElementById('tableOfContentContainer')
  const tocHeader = tocContainer?.querySelector('h3')

  if (tocHeader && window.matchMedia('(max-width: 1023px)').matches) {
    const tocList = tocContainer.querySelector('ul')

    // Start collapsed
    tocList.style.display = 'none'

    tocHeader.addEventListener('click', () => {
      const isHidden = tocList.style.display === 'none'
      tocList.style.display = isHidden ? 'block' : 'none'
      tocHeader.classList.toggle('expanded', isHidden)
    })

    // Add expanded state styling
    tocHeader.style.userSelect = 'none'
  }
})
