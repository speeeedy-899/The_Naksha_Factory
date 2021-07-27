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
  html.style.overflowY = "scroll";
  setTimeout(function() {openIcon.style.display = "inline-block";}, 500);
}
function openMenu(){
  menuNav.style.top = "0";
  openIcon.style.display = "none";
  html.style.overflow = "hidden";
  openIcon.classList.add("open-active");
}

let date = new Date();
let copyrightYear = date.getFullYear();
document.getElementById("cpr-year").innerHTML = copyrightYear;





// Particles JSON part
/* Otherwise just put the config content (json): */

window.addEventListener("load", function(){
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

const deviceWidth = window.innerWidth;
if(deviceWidth > 768){
  particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#8c8c8c"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#8c8c8c"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#8c8c8c",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 7,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 180,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

  );
}
else if (deviceWidth <= 768) {
  particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#8c8c8c"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#8c8c8c"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#8c8c8c",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 180,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

  );
}
