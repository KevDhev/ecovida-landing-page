const navbar = document.querySelector("#nav")
const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");

openBtn.addEventListener('click', () => {
    navbar.classList.add("visible");
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove("visible");
});