const testo = document.querySelector("h1");

const bike = [

    {

        nome: "Mountain bike",

        peso: 10
    },

    {
        nome: "Bici da corsa",

        peso: 8
    },

    {
        nome: "Bici da cicloturismo",

        peso: 9
    }

]

console.log(bike);

for (const key in bike) {

    const element = bike[key];

    console.log(bike[key]);
}

