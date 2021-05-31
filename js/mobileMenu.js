const menuOpen = document.querySelector('#btnMenuOpen')
const menuClose = document.querySelector('#btnMenuClose')
const menuLinks = document.querySelector('#internLinks')
const headerLinks = document.querySelectorAll('.headerLinks')

const showLinks = () => {
  menuOpen.classList.toggle('hideMenu')
  menuClose.classList.toggle('hideMenu')
  menuLinks.classList.toggle('hideMenu')
}

menuOpen.addEventListener('click', () => {
  showLinks()
})

menuClose.addEventListener('click', () => {
  showLinks()
})


headerLinks.forEach((element) => {
  element.addEventListener('click', () => {
    showLinks()
  })
})