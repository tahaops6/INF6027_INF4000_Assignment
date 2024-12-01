// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})

// Toggle menu for mobile view
function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('active')
}
