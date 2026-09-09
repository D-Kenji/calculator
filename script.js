const display = document.querySelector(".displayTekst");
const button = document.querySelector(".buttons");

button.addEventListener("click", (e) => {
    if(e.target.classList.contains("nummer"))
    console.log(e.target);
    display.textContent = e.target.textContent;
})