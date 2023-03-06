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
