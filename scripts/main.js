// dark mode button onchange call multiple functions //
function myFunction(){
    toggleDarkMode();
    swapText();
}

// toggle dark mode//
function toggleDarkMode() {

    var element = document.body; 
    element.classList.toggle("dark-mode");
}

// change dark mode button text //
function swapText() {
    var x = document.getElementById("mode");
    if (x.innerHTML === "DARK MODE") {
        x.innerHTML = "LIGHT MODE";
    } else {
        x.innerHTML = "DARK MODE";
    }
}





