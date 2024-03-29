// This is where it all goes :)

document.addEventListener('DOMContentLoaded', function() {
var typed = new Typed('#typed',{
  strings : ['Web Developer.', 'Digital Marketer.', 'UI/UX Designer.'],
  typeSpeed : 180,
  delaySpeed : 100,
  loop : true
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'// Change 'smooth' to 'auto' for slower scroll speed
    });
  });
});
