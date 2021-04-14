function numeroRandom(){

    return Math.ceil(Math.random()*5);

}

function vincitore(num,str){

    if(num%2 == 0 && str == "pari"){
        return "Hai vinto";
    }else if(num%2 == 1 && str == "dispari"){
        return "Hai vinto";
    }else {
        return "hai perso";
    }

}

var scelta = prompt("Pari o Dispari?");

var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

var numeroComputer = numeroRandom();

console.log("Il tuo numero è: " + numeroUtente);

console.log("Il numero del computer è: " + numeroComputer);

var somma = numeroUtente + numeroComputer;

console.log("La somma totale è: " + somma);

console.log(vincitore(somma,scelta));

