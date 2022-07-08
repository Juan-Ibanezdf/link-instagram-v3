const $body = document.querySelector('body')
const $checkbox0 = document.querySelector('#switch0')
const $checkbox1 = document.querySelector('#switch1')
const $checkbox2 = document.querySelector('#switch2')
const $checkbox3 = document.querySelector('#switch3')

$checkbox0.addEventListener('change', function () {
  $body.classList.remove('blue-dark')
  $body.classList.remove('pink')
  $body.classList.remove('pink-dark')
})

$checkbox1.addEventListener('change', function () {
  $body.classList.remove('pink')
  $body.classList.remove('pink-dark')
  $body.classList.toggle('blue-dark')
})

$checkbox2.addEventListener('change', function () {
  $body.classList.remove('blue-dark')
  $body.classList.remove('pink-dark')
  $body.classList.toggle('pink')
})

$checkbox3.addEventListener('change', function () {
  $body.classList.remove('blue-dark')
  $body.classList.remove('pink')
  $body.classList.toggle('pink-dark')
})
