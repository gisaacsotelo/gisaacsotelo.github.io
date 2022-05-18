// ^------------------------------------------
// ^ ------------- Mobile navigation
const navigation = document.querySelectorAll('.js-navigation')
// const primaryNav = document.getElementById('js-main-navbar')
// const secondaryNav = document.querySelector('#js-secondary-navbar')

console.log(navigation)
// console.log(primaryNav)
// console.log(secondaryNav)

// ? --- ALLOCATIONS & VARIABLES

const primaryNav = navigation[0]
const secondaryNav = navigation[1]
const menuButton = navigation[2]

// ? -- variables

const navigationState = 'scrolldown' // other states: primary & secondary

// ? --- defaults
primaryNav.style.display = 'none'
secondaryNav.style.display = 'none'

//^ ----- Event listener

menuButton.addEventListener('click', scrollUpMenu)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~ Functions

function scrollUpMenu() {
  primaryNav.style.display = 'block'
  menuButton.style.display = 'none'
  navigationState = 'primary'
}
