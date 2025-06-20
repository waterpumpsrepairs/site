// script.js
// Basic JavaScript for Vicnic Water Pumps website

// Example: Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});

// Example: Simple alert for contact (replace with real form functionality as needed)
document.addEventListener("DOMContentLoaded", function () {
  const contactLink = document.querySelector('a[href="#Contact"]');
  if (contactLink) {
    contactLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Contact form coming soon! Please email us for now.");
    });
  }
});
