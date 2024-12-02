// script.js

// Smooth scroll back to top
document.querySelector('.back-to-top').addEventListener('click', (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.nav-menu a')

window.addEventListener('scroll', () => {
  let current = ''
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove('active')
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active')
    }
  })
})
