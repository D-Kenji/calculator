const display = document.querySelector(".displayTekst");
const button = document.querySelector(".buttons");
const logs = document.querySelector("#logs");
const historyButton = document.querySelector(".historyButton");
let getallen = {};
let resultaat;
let soort;
let inputbyComputer = false;
let lastOperation;
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
    if(e.target.className === "clear"){
        getallen = {};
        display.textContent = "";
        inputbyComputer = false;
    }
    }
);
const bewerking = {
    plus: (a,b) => {lastOperation = `${a} + ${b}`; return a+b},
    min: (a,b) => {lastOperation = `${a} - ${b}`; return a-b},
    maal: (a,b) => {lastOperation = `${a} x ${b}`; return a*b},
    delen: (a,b) => {lastOperation = `${a} ÷ ${b}`; return a/b},

}

function berekening(){
    resultaat = bewerking[soort](getallen[0],getallen[1]);
    resultaat = parseFloat(resultaat.toFixed(10));
    resetGetallen();

}

function resetGetallen(){
    getallen ={};
    getallen[0] = resultaat
    display.textContent = resultaat;
    inputbyComputer = true;
    addLog();
}

function addLog(){
    console.log("logs added")
    const newLog = document.createElement("p");
    newLog.textContent = `${lastOperation} = ${resultaat}`;
    logs.appendChild(newLog);
}

historyButton.addEventListener("click",() => {
    logs.classList.toggle('hidden');
})