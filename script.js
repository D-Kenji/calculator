const display = document.querySelector(".displayTekst");
const button = document.querySelector(".buttons");

let creerGetal = {
}
let getallen= {

}
console.log(Object.values(creerGetal).length);

button.addEventListener("click", (e) => {
    if(e.target.parentNode.classList.contains("nummer")){
        console.log(e.target);
        display.textContent += e.target.textContent
        let index = Object.values(creerGetal).length;
        creerGetal[index] = e.target.textContent;
    }
});
