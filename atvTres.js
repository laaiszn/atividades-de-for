// atividade 3 – entrada de 10 números, armazenar num vetor e mostrar o maior número
// nome: Laís Zanqueta
var teclado = require("prompt-sync")();
var numeros = [];
for (var i = 0; i < 10; i++) {
    var numero = parseFloat(teclado("digite o número " + (i + 1) + ":"));
    numeros[i] = numero;
}
var maior = numeros[0];
for (var i = 1; i < 10; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}
console.log("maior número:", maior);
