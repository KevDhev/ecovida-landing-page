//Navigation bar toggle functionality
const navbar = document.querySelector("#nav")
const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");

openBtn.addEventListener('click', () => {
    navbar.classList.add("visible");
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove("visible");
});

//Simulate form submission
const form = document.querySelector("#contact-form");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    alert("Thank you for your message! We will get back to you soon.");
    
    form.reset();
});