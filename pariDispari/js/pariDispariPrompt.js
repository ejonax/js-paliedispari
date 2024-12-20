function pariDispari(no,choice){
   let reply='';
   let randomNo=Math.floor(Math.random() * 5)+1;
   let odd="";

   let sum=randomNo+Number(no);
   if (sum % 2===0){
      odd="pari";
   } else {
      odd="dispari";
   }

    if (odd===choice){
        return reply=`Hai vinto!!! La somma tra il numero <u>${no} </u> che hai inserito nel primo prompt ed il numero random generato <u> ${randomNo} </u> è uguale alla somma <u> ${sum} </u> ed è un numero <u>${odd} </u> come la tua scelta di <u>${choice} </u> che hai inserito nel secondo prompt`;
    } else{
        return reply=`Hai perso!!! La somma tra il numero <u>${no} </u> che hai inserito nel primo prompt ed il numero random generato <u> ${randomNo} </u> è uguale alla somma <u> ${sum} </u> ed è un numero <u>${odd} </u> ma la tua scelta del secondo prompt era <u>${choice} </u>`;
    }

}


function myFunction() {
    let number=prompt("Inserisci un numero tra 1 e 5!");
    let choice=prompt("Scriverte o Pari o Dispari");

    choice=choice.toLowerCase();//la transformiamo in minuscola tutta la parola per fare i controlli solo con pari e dispari, pari sarà uguale a Pari,pAri, PARI ect
    let noLength=number.length;
    let choiceLength=choice.length;

    //se l'utente non scrive nei due prompt
    if ((noLength===0 || choiceLength===0)){
        document.getElementById("reply").innerHTML="Per favore inserite un valore nei due prompt ( numero 1-5 e pari/dispari) !";
        return;
    }
    
    // se l'utente non scrive un numero al primo prompt
    if (isNaN(number)){
        document.getElementById("reply").innerHTML='Inserite un numero tra 1 e 5 per il primo prompt!';
        return;
    }

    // se l'utente non scrive un numero tra 1 e 5 al primo prompt
    if (number<=0 || number>5) {
        document.getElementById("reply").innerHTML='Inserite un numero tra 1 e 5!';
        return;
    }

    //se l'utente non scrive pari o dispari ma altre parole nel secondo prompt
    if(choice != 'pari' && choice!='dispari'){
        document.getElementById("reply").innerHTML='Inserite la parola Pari o Dispari nel secondo prompt';
        return;
    }

    // dopo i controlli degli input messi da''utente nei due prompt; chiamaiamo la nostra funzione pariDispari
    // la funzione a sua volta ci ritorna il messaggio di Hai vinto oppure Hai perso
    document.getElementById("reply").innerHTML = pariDispari(number,choice);
}
