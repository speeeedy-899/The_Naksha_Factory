const body = document.querySelector("body");
const html = document.querySelector("html");
const menuNav = document.querySelector("#menu");
const openIcon = document.querySelector(".open-icon");

var style1 = {
  useEasing: true,
  useGrouping: true,
  suffix: "+"
}
var style2 = {
  useEasing: true,
  useGrouping: true
}
var year = new CountUp ("years", 0, 20, 0, 5, style1);
year.start();
var client = new CountUp ("clients", 0, 500, 0, 3, style1);
client.start();
var project = new CountUp ("projects", 0, 800, 0, 3, style1);
project.start();
var day = new CountUp ("days", 0, 300, 0, 3, style2);
day.start();

function closeMenu(){
  menuNav.style.top = "-100vh";
  openIcon.style.display = "inline-block";
  body.style.overflowY = "scroll";
}
function openMenu(){
  menuNav.style.top = "0";
  openIcon.style.display = "none";
  body.style.overflow = "hidden";
  openIcon.classList.add("open-active");
}

let date = new Date();
let copyrightYear = date.getFullYear();
document.getElementById("cpr-year").innerHTML = copyrightYear;
