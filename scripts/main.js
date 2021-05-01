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





