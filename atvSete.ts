// atividade 7 – calcular fatorial de n, onde n é fornecido pelo usuário
// nome: Laís Zanqueta
let teclado = require(`prompt-sync`)();
let n = parseInt(teclado("digite o valor de n:"))
let fatorial = 1

for (let i = 1; i <= n; i++) {
  fatorial = fatorial * i
}

console.log(n + "! =", fatorial)
