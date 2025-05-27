// atividade 5 – entrada de 10 números e ordenar em ordem crescente usando for
// nome: Laís Zanqueta
var teclado = require("prompt-sync")();
var numeros = [];
for (var i = 0; i < 10; i++) {
    var numero = parseFloat(teclado("digite o número " + (i + 1) + ":"));
    numeros[i] = numero;
}
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 9 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
            var temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}
console.log("números ordenados:", numeros);
