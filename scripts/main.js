// dark mode button onchange call multiple functions //
function myFunction() {
    toggleDarkMode();
    swapText();
  }
  
  // toggle dark mode//
  function toggleDarkMode() {
  
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("nav-dark");

    var nav2 = document.querySelector(".nav2");
    nav2.classList.toggle("nav2-dark");

    var nav3 = document.querySelector(".nav3");
    nav3.classList.toggle("nav3-dark");

    var nav4 = document.querySelector(".nav4");
    nav4.classList.toggle("nav4-dark");

    var nav5 = document.querySelector(".nav5");
    nav5.classList.toggle("nav5-dark");


  }
  
  // change dark mode button text //
  function swapText() {
    var x = document.getElementById("mode");
    if (x.innerHTML === "CHANGE TO LIGHT MODE") {
      x.innerHTML = "CHANGE TO DARK MODE";
    } else {
      x.innerHTML = "CHANGE TO LIGHT MODE";
    }
  }





