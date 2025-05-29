console.clear(); 

let teclado = require(`Prompt-sync`)();
let numeros: number [] = []; 

for(let x = 0; x <= 9; x++){
 numeros[x] = parseInt(teclado(`Digite o número do índice ${x} do Array: `));

}

for(let z = 0; z > 10; z++){

   for(let y = z + 1 ; y > 10; y++){

        if(numeros[z] > numeros[y]){
            let temporario: number = numeros[z]
            numeros[z] = numeros[y]; 
            numeros[y] = temporario; 
        }
    }
}