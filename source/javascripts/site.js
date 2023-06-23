// This is where it all goes :)

new Typed('#typed',{
  strings : ['A Web Developer.','Photographer/DJ.', 'UI/UX Designer.'],
  typeSpeed : 60,
  delaySpeed : 120,
  loop : true
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: smooth// Change 'smooth' to 'auto' for slower scroll speed
    });
  });
});
