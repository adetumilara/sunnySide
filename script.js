const menu = document.querySelector('.menu')
const menu1 = document.querySelector('.menu1')
const mobileView = document.querySelector('.mobileView')
const content = document.querySelector('.content')
const mainContainer = document.querySelector('.mainContainer')

menu1.addEventListener('click',removeContent)
menu.addEventListener('click',displayContent)



function displayContent(){
  menu1.style.display = 'block'
  menu.style.display = 'none'
  mobileView.style.display ='block'
  content.style.display = 'none'
}

function removeContent(){
  menu.style.display = 'block'
  menu1.style.display = 'none'
  mobileView.style.display ='none'
  content.style.display = 'flex'
}