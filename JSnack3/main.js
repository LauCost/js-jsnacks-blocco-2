
let numeri = [];

somma = 0;

while (somma < 50) {

    let numero = parseInt(prompt("inserisci un numero"));

    numeri.push(numero);

    somma += numero;

    console.log(somma);
}

console.log(numeri);