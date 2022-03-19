const navbar = document.querySelector(".nav_bar");

function navbarshadow() {
    if (this.scrollY>80){
        navbar.classList.add("nav_bar_shadow");
    }
    else{
        navbar.classList.remove("nav_bar_shadow");
    }
}

window.addEventListener("scroll",navbarshadow);