// This is an optional file for adding interactivity using JavaScript

// Example: Add smooth scrolling to anchor links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
