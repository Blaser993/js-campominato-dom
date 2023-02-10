console.log("BOOM!");

const LATOGRIGLIA = 10

let numeroCelle = LATOGRIGLIA * LATOGRIGLIA

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
        creoCella.classList.add("dark")
        })


        creoCella.append(i)
    }





})



