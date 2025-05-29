console.clear();
var teclado = require("Prompt-sync")();
var numeros = [];
for (var x = 0; x <= 9; x++) {
    numeros[x] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, " do Array: ")));
}
for (var z = 0; z > 10; z++) {
    for (var y = z + 1; y > 10; y++) {
        if (numeros[z] > numeros[y]) {
            var temporario = numeros[z];
            numeros[z] = numeros[y];
            numeros[y] = temporario;
        }
    }
}
