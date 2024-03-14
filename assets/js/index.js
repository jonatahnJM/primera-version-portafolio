


const btnOpen = document.querySelector('.btn--open')
const btnClose = document.querySelector('.btn--close')
const navMenu = document.querySelector('.nav__menu')
console.log(btnOpen)

btnOpen.onclick = function () {
  
  navMenu.classList.toggle('show--menu')
}
var typed = new Typed('#typing', {
  strings: ['Frontend', 'Backend', 'FullStack'],
  typeSpeed: 65,
  loop: true,
  cursorChar: '__'
})


