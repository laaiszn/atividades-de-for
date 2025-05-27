// atividade 5 – entrada de 10 números e ordenar em ordem crescente usando for
// nome: Laís Zanqueta
let teclado = require(`prompt-sync`)();
let numeros: number[] =[]

for (let i = 0; i < 10; i++) {
  let numero = parseFloat(teclado("digite o número " + (i + 1) + ":"))
  numeros[i] = numero
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 9 - i; j++) {
    if (numeros[j] > numeros[j + 1]) {
      let temp = numeros[j]
      numeros[j] = numeros[j + 1]
      numeros[j + 1] = temp
    }
  }
}

console.log("números ordenados:", numeros)
