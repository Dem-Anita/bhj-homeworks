document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');

  function isElementVisible(el, offset = 100) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    return (
      rect.top < windowHeight - offset && 
      rect.bottom > offset
    );
  }
  
  function checkReveals() {
    reveals.forEach(reveal => {
      if (isElementVisible(reveal) && !reveal.classList.contains('reveal_active')) {
        reveal.classList.add('reveal_active');
      }
    });
  }

  let isScrolling;
  window.addEventListener('scroll', function() {
    window.cancelAnimationFrame(isScrolling);
    isScrolling = window.requestAnimationFrame(checkReveals);
  });

  checkReveals();
});