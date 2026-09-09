const display = document.querySelector(".displayTekst");
const button = document.querySelector(".buttons");

let creerGetal = {
}
let getallen= {

}

button.addEventListener("click", (e) => {
    if(e.target.parentNode.classList.contains("nummer")){
        display.textContent += e.target.textContent
        let index = Object.values(creerGetal).length;
        creerGetal[index] = e.target.textContent;
    }
});

button.addEventListener("click", (e) =>{
    if(e.target.parentNode.classList.contains("berekening")){
        let index = Object.values(getallen).length;
        getallen[index] = display.textContent;
        console.log(getallen);
        display.textContent = "";
    }

})