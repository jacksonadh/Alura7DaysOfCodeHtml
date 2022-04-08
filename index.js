const menuMobile = document.querySelector('.menuMobile')
const menuIcon = document.querySelector('.toglle-menu img')


menuIcon.addEventListener('click', function () {
  // quando houver clique no ícone de menu
  menuMobile.classList.toggle('active')

})