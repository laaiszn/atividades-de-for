// atividade 7 – calcular fatorial de n, onde n é fornecido pelo usuário
// nome: lala [teu nome completo aqui]
var teclado = require("prompt-sync")();
var n = parseInt(teclado("digite o valor de n:"));
var fatorial = 1;
for (var i = 1; i <= n; i++) {
    fatorial = fatorial * i;
}
console.log(n + "! =", fatorial);
