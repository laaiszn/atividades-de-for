// atividade 4 – entrada de 10 números, armazenar em vetor, inverter em outro vetor
// nome: Laís Zanqueta
let teclado = require(`prompt-sync`)();
let numeros: number[] = []
let invertido: number[] = []

for (let i = 0; i < 10; i++){
  let numero = parseFloat(teclado("digite o número " + (i + 1) + " "));
  numeros[i] = numero;
}


for (let i = 0; i < 10; i++) {
  invertido[i] = numeros[9 - i]
}

console.log("vetor original:", numeros);
console.log("vetor invertido:", invertido);
