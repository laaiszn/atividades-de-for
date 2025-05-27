// atividade 4 – entrada de 10 números, armazenar em vetor, inverter em outro vetor
// nome: lala [teu nome completo aqui]
var teclado = require("prompt-sync")();
var numeros = [];
var invertido = [];
for (var i = 0; i < 10; i++) {
    var numero = parseFloat(teclado("digite o número " + (i + 1) + ":"));
    numeros[i] = numero;
}

for (var i = 0; i < 10; i++) {
    invertido[i] = numeros[9 - i];
}
console.log("vetor original:", numeros);
console.log("vetor invertido:", invertido);
