// script.js

// Smooth scroll back to top
document.querySelector('.back-to-top').addEventListener('click', (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
