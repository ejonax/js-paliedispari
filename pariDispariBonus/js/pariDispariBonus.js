calcButton.addEventListener('click', function(event){
    // la parola inserita nella input text della forma si selezionerà doppo il click sul bottone Controllo
    let submitButton = document.getElementById("calcButton");
    let number= document.getElementById("sel1").value;
    let choice=document.getElementById("sel2").value;
    
    event.preventDefault();
    calcButton.disable = true;

    // genera un numero random tra 1 e 5
    let randomNo=Math.floor(Math.random() * 5)+1;
    let sum=randomNo+Number(number);
   
   
     if (choice==='Pari' && pariDispari(sum)) {
            return document.getElementById("exampleFormControlTextarea1").innerHTML =`Hai vinto!!! La somma tra il numero ${number} che hai scelto dal primo drop down ed il numero random generato ${randomNo} è uguale alla somma ${sum} ed è un numero pari come la tua scelta di ${choice} che hai selezionato al secondo drop down`;
     } else if (choice==='Dispari' && !pariDispari(sum)){
            return document.getElementById("exampleFormControlTextarea1").innerHTML =`Hai vinto!!! La somma tra il numero ${number} che hai scelto dal primo drop down ed il numero random generato ${randomNo} è uguale alla somma ${sum} ed è un numero dispari come la tua scelta di ${choice} che hai selezionato al secondo drop down`;
    } else if (choice==='Pari' && !pariDispari(sum)){
            return document.getElementById("exampleFormControlTextarea1").innerHTML =`Hai perso!!! La somma tra il numero ${number}  che hai scelto dal primo drop down ed il numero random generato ${randomNo} è uguale alla somma ${sum} ed è un numero dispari ma hai scelto l'opzione ${choice} dal secondo drop down`;
    }else {
            return document.getElementById("exampleFormControlTextarea1").innerHTML =`Hai perso!!! La somma tra il numero ${number}  che hai scelto dal primo drop down ed il numero random generato ${randomNo} è uguale alla somma ${sum} ed è un numero pari ma ma hai scelto l'opzione ${choice} dal secondo drop down`;
    }
 }
)
 
 // la funzione ritorna un risultato boolean, true se il numero è pari e false se il numero è dispari
function pariDispari(no){
    if (no % 2===0){
        return true;
     } else {
        return false;
     } 
}

 