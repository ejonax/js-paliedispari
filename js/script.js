/* la funzione si servirà di un parametro che a sua volta sarà la parola che l'utente scrive nel prompt.
   Useremo due indici, i e j
   con l'indice i leggeremo la parola da sinistra a destra fino ad arrivare a metà stringa 
   mentre con l'indice j leggeremo la parola da destra a sinistra fino ad arrivare a metà stringa.
   
   Si controlla la prima lettera della parola con ultima lettera della parola
   - se sono uguali allora:
        - la i si incrementa e la j di decrementa
        - si controlla la seconda lettera della parola con la penultima lettera della parola
   - se non sono uguali allora si risponde che la parola non è palindroma; non si prosegui il controllo delle altre lettere

*/
function palindroma(txt) {
    // la parola inserita come parametro della funzione la transformiamo tutta in maiuscola
    // cosi se l'utente scrive aNna verrà la risposta che la parola è palindroma perchè si controllerà la parola ANNA
    // anna - Anna - aNna- anNa- annA sarrano tutte palindrome siccome convertite sarrano tutte ANNA
    // con replace togliamo tutti gli spazzi vuoti e controlliamo solo i chars della stringa
    // aN na sarrà una pailindroma perché la parola se si controlla sarà ANNA senza spazi
    // la parola che l'utente scrive nel prompt la salviamo in una variabile originalTxt che poi la stampaimo alla risposta per l'utente
    let originalTxt=txt;
    txt=txt.toUpperCase(); 
    txt=txt.replace(/\s+/g, '');
    let txtLength=txt.length;
    let j=txtLength-1;
    let reply="";  
    
    // se la lunghezza della parola inserita è 0 allora non c'è stato nessun input da parte dell'utente
   if(txtLength==0){
         return reply="Inserite una parola o un numero per controllarlo se è palindroma";
    }
 
  for (let i = 0; i < txtLength/2; i++) { 
      if( txt[i]!=txt[j]) {
       // scriviamo la parola originale inserita dall'utente nel prompt senza le modifiche fatte da noi ( upperCase e remove spaces)
       // la parola originale la facciamo underline e italic usando i tagg html 
       return reply=`La parola inserita <em><u> ${originalTxt} </u></em> non è una palindroma`;
      }
      j--;
    }
      // scriviamo la parola originale inserita dall'utente nel prompt senza le modifiche fatte da noi ( upperCase e remove spaces)
      // la parola originale la facciamo underline e italic usando i tagg html 
      return reply=`La parola inserita <em><u> ${originalTxt} </u></em> è una palindroma`;
       
}

    
/* la funzione si triggera quando l'utente fa click sul button Giochiamo? della pagina
    prendiamo il valore che l'utente scrive sul prompt e la usiamo come variabile per la funzione palindroma
*/
function myFirstFunc() {
    let word=prompt("Inserisci una parola che vuoi controllare!");
    document.getElementById("reply").innerHTML = palindroma(word);
}



    
 
       
    