var typed = new Typed(".text", {
    strings: ["FullStack Developer", "Tutor", "Social Worker"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.querySelector(".text").innerText = typed.el.innerText;