const display = document.querySelector(".displayTekst");
const button = document.querySelector(".buttons");

let creerGetal = {};
let getallen = {};
let resultaat;
let soort;
button.addEventListener("click", (e) => {
    let indexCreer = Object.values(creerGetal).length;
    let indexGetallen = Object.values(getallen).length;
    console.log("Dit is de index van de getallen " + indexGetallen);
     if(e.target.parentNode.className == "nummer"){
        if(display.textContent == resultaat){
            display.textContent = "";
        }
        display.textContent += e.target.textContent
        creerGetal[indexCreer] = e.target.textContent;
    }

    if(e.target.parentNode.className == "berekening"){
        if(display.textContent !== "" && display.textContent !== `${resultaat}`){
            console.log("toegevoegd aan object")
            getallen[indexGetallen] = parseFloat(display.textContent);
            console.log(getallen);
            display.textContent = "";
            indexGetallen = Object.values(getallen).length;
        }

            switch (e.target.className){
                case 'maal':
                    soort = 'maal';
                    if(indexGetallen == 2){
                    berekening();
                    } 
                    break;
                case 'plus':
                    soort = 'plus';
                    if(indexGetallen == 2){
                    berekening();
                    } 
                    break;
                case 'min':
                    soort = 'min';
                    if(indexGetallen == 2){
                    berekening();
                    } 
                    break;
                case 'delen':
                    soort = 'delen';
                    if(indexGetallen == 2){
                    berekening();
                    } 
                    break;
                case 'gelijk':
                    if(indexGetallen == 2){
                    berekening();
                    } else {
                        console.log(indexGetallen);
                        alert("Er is geen tweede getal");
                    }
                    break;
            }
        }
    }
);

function berekening(){
    console.log("berekend")
    switch (soort){
                case 'maal':
                    maal(getallen[0], getallen[1])
                    break;
                case 'plus':
                    plus(getallen[0], getallen[1])
                    break;
                case 'min':
                    min(getallen[0], getallen[1])
                    break;
                case 'delen':
                    delen(getallen[0], getallen[1])
                    break;
            }

}

function plus(a, b){
    resultaat = a + b
    resetGetallen()
}
function min(a, b){
    resultaat = a - b
    resetGetallen();
}
function delen(a, b){
    resultaat = a / b
    resetGetallen();
}
function maal(a, b){
    resultaat = a * b
    resetGetallen();
}

function resetGetallen(){
    getallen ={};
    getallen[0] = resultaat
    display.textContent = resultaat;
    console.log("Het resultaat is " + resultaat);
}
