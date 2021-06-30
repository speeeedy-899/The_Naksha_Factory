
const navLinks = document.querySelector(".menu-links");
const links = document.querySelectorAll(".menu-links li");
const body = document.querySelector("body");
const html = document.querySelector("html");
const menuNav = document.querySelector("#menu");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

function closeMenu(){
  menuNav.style.top = "-100vh";
  openIcon.style.display = "inline-block";
  body.style.overflowY = "scroll";
}
function openMenu(){
  menuNav.style.top = "0";
  openIcon.style.display = "none";
  body.style.overflow = "hidden";
}
menu.addEventListener("click", function() {
  navLinks.classList.toggle("menu-active");
  body.classList.toggle(".menu-open");
  html.classList.toggle(".menu-open");
  links.forEach(link=>{
    link.classList.toggle("fade");
  });
});
