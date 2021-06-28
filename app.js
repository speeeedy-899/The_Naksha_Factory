
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".menu-links");
const links = document.querySelectorAll(".menu-links li");

menu.addEventListener("click", function() {
  navLinks.classList.toggle("menu-active");
  links.forEach(link=>{
    link.classList.toggle("fade");
  });
});
