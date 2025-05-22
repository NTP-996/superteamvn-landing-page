document.addEventListener("DOMContentLoaded", () => {
  // Function to create and observe IntersectionObservers
  function createObserver(selector, observerOptions, toggleClass) {
    const items = document.querySelectorAll(selector)
    if (items.length === 0) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(toggleClass)
        }
      })
    }, observerOptions)

    items.forEach((item) => {
      observer.observe(item)
    })
  }

  // Create observers for different sections
  createObserver(
    ".events-content, .events-calendar, .social-card, .initiative-card, .join-option, .resource-link",
    { root: null, threshold: 0.1 },
    "fadeInUp",
  )
})

// Navigation ----------------------------------------
const nav = document.getElementById("nav")
const menuIcon = document.querySelector(".menu-icon")
const listItems = document.querySelectorAll("nav ul li a")

function toggleMenu() {
  nav.classList.toggle("active")
  menuIcon.classList.toggle("active")
  listItems.forEach((listItem) => {
    listItem.classList.toggle("active")
  })
}

function hideMenu() {
  nav.classList.remove("active")
  menuIcon.classList.remove("active")
  listItems.forEach((listItem) => {
    listItem.classList.remove("active")
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  })
})

