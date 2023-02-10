console.log("BOOM!");

const LATOGRIGLIA = 10

const LIMITEBOMBE = 16

let numeroCelle = LATOGRIGLIA * LATOGRIGLIA

let casellaBomba

const start = document.getElementById("play");
start.addEventListener ("click", 

function() {
    var element = document.getElementById("play");
    element.classList.add("hide");
    console.log(numeroCelle)

    const griglia = document.querySelector(".griglia");

    for (let i = 1; i < numeroCelle + 1 ; i++){

        
    
        let creoCella = document.createElement("div")
        griglia.append(creoCella)
        creoCella.classList.add("cella")

        creoCella.addEventListener ("click", 
        function(){

        if (bombe.includes.this){
            console.log(casellaBomba)
            creoCella.classList.add("red");
        }   else creoCella.classList.add("dark")
        })


        creoCella.append(i)
    }

})

// Generiamo le bombe
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe, facendo attenzione che:
// nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// Quando l’utente clicca su una cella: se il numero della cella è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.



const bombe = []


while (bombe.length < LIMITEBOMBE ){
    casellaBomba = Math.floor(Math.random(+1)* numeroCelle)
    console.log(casellaBomba, "numero della bomba")

    if (bombe.includes(casellaBomba)){
        continue;
    }   else bombe.push(casellaBomba)
}

console.log(bombe, "numeri delle bombe")

