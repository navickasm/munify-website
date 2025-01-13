let hero = document.querySelector('.hero-image') != null || document.querySelector('.hero-mini') != null;
const navbar = document.getElementById("navbar");

if (hero) {
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) { // Adjust scroll threshold as needed
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
} else {
  navbar.classList.add("scrolled");
}



function scrollToTarget(event, offset = 70) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href'); // Get the href value
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const targetPosition = targetElement.offsetTop - offset; // Adjust scroll position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
}

// Attach to multiple elements (e.g., navbar and other links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    scrollToTarget(e); // Pass your desired offset
  });
});
