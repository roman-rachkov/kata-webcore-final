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

      if (target.classList.contains('post--expanded')) {
        const textHeight = document.querySelector('.post__text').offsetHeight

        let wrapper = document.querySelector('.post--expanded .post__wrapper')
        wrapper.style.maxHeight = `${textHeight + 10}px`

        let margin = 0
        if (window.matchMedia('(max-width: 520px)').matches) {
          const imgHeight = document.querySelector('.post__image').offsetHeight
          margin = imgHeight + 50
        }

        target.style.minHeight = `${textHeight + margin + 10}px`
        console.log(wrapper, wrapper.style)
      } else {
        document.querySelector('.post__wrapper').style.maxHeight = ''
        target.style.minHeight = ''
      }

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
      document.querySelector('.menu--active').classList.remove('menu--active')
      document.querySelector(element.dataset.modal).showModal()
    })
  })

  document.querySelectorAll('.modal').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.stopPropagation()
      console.log(event.target.tagName)
      if (event.target.tagName.toLowerCase() === 'dialog') {
        event.target.close()
      }
    })
  })

  document.querySelector('.menu__close').addEventListener('click', (event) => {
    event.preventDefault()
    event.target.closest('.menu').classList.remove('menu--active')
  })

  document.querySelector('.menu__show').addEventListener('click', (event) => {
    event.preventDefault()
    event.target.closest('.menu').classList.add('menu--active')

    document.querySelector('.menu--active').addEventListener('click', (e) => {
      e.stopPropagation()
      if (e.target.classList.contains('menu--active')) {
        e.target.classList.remove('menu--active')
      }
    })
  })

  /*------------------------------*/
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
    // textHeight = document.querySelector('.post__text').offsetHeight
    // console.log(textHeight)

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
