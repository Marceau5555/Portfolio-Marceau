// Petite animation : les sections apparaissent au scroll
window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section');
  sections.forEach(function(section) {
    var position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.style.opacity = '1';
    }
  });
});

// On cache les sections au départ
document.querySelectorAll('section').forEach(function(section) {
  section.style.opacity = '0';
  section.style.transition = 'opacity 0.5s';
});
