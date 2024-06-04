let buttonMob = document.querySelector('.buttons-block')
let buttonShow = document.querySelector('.show-menu')
let buttonMenu = document.querySelector('.header-menu')
let buttonSeacrh = document.querySelector('.search-block')
let buttonSeacrhShow = document.querySelector('.show-search')

buttonShow.addEventListener('click', () =>{
    buttonShow.classList.toggle('active')
    buttonMenu.classList.toggle('open')
})
buttonSeacrhShow.addEventListener('click', () =>{
    buttonSeacrh.classList.toggle('show')
    buttonSeacrhShow.classList.toggle('close')
})