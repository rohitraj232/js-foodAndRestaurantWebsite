let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function() {
    navbar.classList.toggle("active");
})

window.onscroll = () => {
    navbar.classList.remove("active");
}

