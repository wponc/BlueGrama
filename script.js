const sections = document.querySelectorAll('.section')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
  }, {
  threshold: .25,
  }
)

sections.forEach(section => {
    observer.observe(section)
  })

document.addEventListener("DOMContentLoaded", function(event) { 
var scrollpos = localStorage.getItem('scrollpos');
if (scrollpos) window.scrollTo(0, scrollpos);
});
window.onbeforeunload = function(e) {
localStorage.setItem('scrollpos', window.scrollY);
};