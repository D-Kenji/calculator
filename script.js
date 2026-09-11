const display = document.querySelector(".displayTekst");
const button = document.querySelector(".buttons");

let getallen = {};
let resultaat;
let soort;
let inputbyComputer = false;
button.addEventListener("click", (e) => {
    let indexGetallen = Object.values(getallen).length;
     if(e.target.parentNode.className === "nummer"){
        inputbyComputer = false;
        if(display.textContent === resultaat){
            display.textContent = "";
        }
        let showInDisplay = true;
         if(e.target.className === "komma" && display.textContent.includes(".")){
            showInDisplay = false;
        }
        if(showInDisplay){
            display.textContent += e.target.textContent;
        }
    }

    if(e.target.parentNode.className === "berekening"){
        if(inputbyComputer){
        display.textContent = "";
        }
        if(display.textContent !== "" && inputbyComputer == false){
            getallen[indexGetallen] = parseFloat(display.textContent);
            display.textContent = "";
            indexGetallen = Object.values(getallen).length;
        }

            switch (e.target.className){
                case 'maal': soort = 'maal'; break;
                case 'plus': soort = 'plus'; break;
                case 'min': soort = 'min'; break;
                case 'delen': soort = 'delen'; break;
                case 'gelijk':
                    if(indexGetallen !== 2){
                        console.log(indexGetallen);
                        alert("Er is geen tweede getal");
                        display.textContent = getallen[0];
                    }
                    break;
            }
            if(soort && indexGetallen === 2){
                berekening();
            }
        }
    }
);
const bewerking = {
    plus: (a,b) => a+b,
    min: (a,b) => a-b,
    maal: (a,b) => a*b,
    delen: (a,b) => a/b,

}

function berekening(){
    resultaat = bewerking[soort](getallen[0],getallen[1]);
    resetGetallen();

}

function resetGetallen(){
    getallen ={};
    getallen[0] = resultaat
    display.textContent = resultaat;
    inputbyComputer = true;
}