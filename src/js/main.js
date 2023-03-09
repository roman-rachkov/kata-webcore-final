import '@/scss/style.scss'

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
