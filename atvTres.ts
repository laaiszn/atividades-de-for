// atividade 3 – entrada de 10 números, armazenar num vetor e mostrar o maior número
// nome: Laís Zanqueta
let teclado = require(`prompt-sync`)();
let numeros = []
for (let i = 0; i < 10; i++) {
  let numero = parseFloat(teclado("digite o número " + (i + 1) + ":"))
  numeros[i] = numero
}

let maior = numeros[0]

for (let i = 1; i < 10; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i]
  }
}

console.log("maior número:", maior)
