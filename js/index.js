document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.querySelectorAll('a');
    const sections = document.querySelectorAll('.section');
  
    window.addEventListener('scroll', function() {
      let current = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').slice(1) === current) {
          a.classList.add('active');
        }
      });
    });
  });