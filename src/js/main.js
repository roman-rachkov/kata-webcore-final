import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/scss/style.scss'

import Swiper, { Pagination, FreeMode } from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.read-more').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault()

      const target = document.querySelector(event.target.dataset.target)

      target.classList.toggle(event.target.dataset.class)
      event.target.classList.toggle('read-more--active')

      const text = event.target.dataset.text ?? 'Свернуть'
      event.target.dataset.text = event.target.innerText
      event.target.innerText = text
    })
  })

  document.querySelectorAll('.modal__close').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault()
      element.closest('.modal').close()
    })
  })

  document.querySelectorAll('[data-modal]').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector(element.dataset.modal).showModal()
    })
  })
  document.querySelector('.menu__close').addEventListener('click', (event) => {
    event.preventDefault()
    event.target.closest('.menu').classList.remove('menu--active')
  })

  document.querySelector('.menu__show').addEventListener('click', (event) => {
    event.preventDefault()
    event.target.closest('.menu').classList.add('menu--active')
  })

  let swiper
  let mobileSwiper

  const mediumMedia = window.matchMedia('(max-width: 1024px)')
  const mobileMedia = window.matchMedia('(max-width: 520px)')
  console.log(mobileMedia)
  if (mediumMedia.matches) {
    initSwiper()
  }

  if (mobileMedia.matches) {
    initMobileSwiper()
  }

  window.addEventListener('resize', () => {
    if (mediumMedia.matches) {
      initSwiper()
    } else {
      destroySwiper()
    }
    if (mobileMedia.matches) {
      initMobileSwiper()
    } else {
      destroyMobileSwiper()
    }
  })

  function destroySwiper() {
    document
      .querySelectorAll('.slider__wrapper')
      .forEach((element) => element.classList.remove('swiper-wrapper'))
    document
      .querySelectorAll('.slider__item')
      .forEach((element) => element.classList.remove('swiper-slide'))
    document
      .querySelectorAll('.slider')
      .forEach((element) => element.classList.remove('swiper'))
    document
      .querySelectorAll('.slider__pagination')
      .forEach((element) => element.classList.remove('swiper-pagination'))
    if (swiper) {
      swiper.forEach((swp) => swp.destroy())
      swiper = null
    }
  }

  function initSwiper() {
    document
      .querySelectorAll('.slider__pagination')
      .forEach((element) => element.classList.add('swiper-pagination'))
    document
      .querySelectorAll('.slider__wrapper')
      .forEach((element) => element.classList.add('swiper-wrapper'))
    document
      .querySelectorAll('.slider__item')
      .forEach((element) => element.classList.add('swiper-slide'))
    document
      .querySelectorAll('.slider')
      .forEach((element) => element.classList.add('swiper'))
    if (!swiper) {
      swiper = new Swiper('.slider', {
        modules: [Pagination, FreeMode],
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  }

  function destroyMobileSwiper() {
    document
      .querySelectorAll('.mobile-slider__wrapper')
      .forEach((element) => element.classList.remove('swiper-wrapper'))
    document
      .querySelectorAll('.mobile-slider__item')
      .forEach((element) => element.classList.remove('swiper-slide'))
    document
      .querySelectorAll('.mobile-slider')
      .forEach((element) => element.classList.remove('swiper'))
    document
      .querySelectorAll('.mobile-slider__pagination')
      .forEach((element) => element.classList.remove('swiper-pagination'))
    if (mobileSwiper) {
      mobileSwiper.destroy()
      mobileSwiper = null
    }
  }

  function initMobileSwiper() {
    console.log(1)
    document
      .querySelectorAll('.mobile-slider__pagination')
      .forEach((element) => element.classList.add('swiper-pagination'))
    document
      .querySelectorAll('.mobile-slider__wrapper')
      .forEach((element) => element.classList.add('swiper-wrapper'))
    document
      .querySelectorAll('.mobile-slider__item')
      .forEach((element) => element.classList.add('swiper-slide'))
    document
      .querySelectorAll('.mobile-slider')
      .forEach((element) => element.classList.add('swiper'))
    if (!mobileSwiper) {
      mobileSwiper = new Swiper('.mobile-slider', {
        modules: [Pagination, FreeMode],
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          init: () => console.log('started'),
          destroy: () => console.log('destroy')
        }
      })
    }
  }
})
