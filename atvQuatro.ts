let teclado = require(`prompt-sync`)(); 

let meuArray: number [] = []; 
let arrayInvertido: number = [] = []; 
let z: number = 9; 


for (let cont = 0; cont <= 9 ; cont++) {
  meuArray[cont]=parseInt(teclado(`Digite o ${cont +1}º:`));

   }
for(let x = 0; x < 10; x++){
    arrayInvertido[z] = meuArray[x]; 
    z--; 
}

console.log(arrayInvertido)