<<<<<<< HEAD
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Modal controls
const modal = document.getElementById("formModal");
const closeBtn = document.querySelector(".close");
if (closeBtn) {
  closeBtn.onclick = () => { modal.style.display = "none"; };
}
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

// Scroll-reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.problem-card, .stat-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
=======
// Smooth scroll example
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});

});
});

// Modal controls

const modal = document.getElementById("formModal");
const btn = document.getElementById("openForm");
const close = document.querySelector(".close");

// btn.onclick = function(){
// modal.style.display = "block";
// }

// close.onclick = function(){
// modal.style.display = "none";
// }

// window.onclick = function(event){
// if(event.target == modal){
// modal.style.display = "none";
// }
// }
>>>>>>> 74b5c8795f8dba2433b4a5460c27755f8c6b964f
