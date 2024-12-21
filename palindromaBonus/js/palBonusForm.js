calcButton.addEventListener('click', function(event){
    // la parola inserita nella input text della forma si selezionerà doppo il click sul bottone Controllo
    let submitButton = document.getElementById("calcButton");
    let txt = document.getElementById('form4Example1').value;
    
    event.preventDefault();
    calcButton.disable = true;


    let originalTxt=txt;
    txt=txt.toUpperCase(); 
    txt=txt.replace(/\s+/g, '');
    let txtLength=txt.length;
    let j=txtLength-1;
    let reply="";  
    
   if(txtLength==0){
         return document.getElementById("form4Example2").innerHTML ="Inserite una parola o un numero per controllarlo se è palindroma";
    } else{
        let check=palindroma(txt);

        if (check) {
            return document.getElementById("form4Example2").innerHTML =`La parola inserita ${originalTxt} è una palindroma`;
        } else {
            return document.getElementById("form4Example2").innerHTML =`La parola inserita ${originalTxt} non è una palindroma`;
        }
    }
       
}
)

function palindroma(txt) {
    txt=txt.toUpperCase(); // transformiamo la parola inserita in maiuscolo cosi AnnA e Anna e aNNa saranno tutte palindrome
    txt=txt.replace(/\s+/g, '');// togliamo gli spazzi dalla parola inserita input text
    let txtLength=txt.length;
    let j=txtLength-1;
    
  for (let i = 0; i < txtLength/2; i++) { 
      if( txt[i]!=txt[j]) {
       return false;
      }
      j--;
    }
      return true;
       
}

    

    
 
       
    