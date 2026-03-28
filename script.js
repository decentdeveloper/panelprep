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