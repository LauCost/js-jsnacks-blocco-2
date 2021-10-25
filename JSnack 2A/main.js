const squadre = [

    {

        nome: "Inter",

        puntiFatti: 0,

        falliSubiti: 0
    },

    {
        nome: "Roma",

        puntiFatti: 0,

        falliSubiti: 0
    },

    {
        nome: "Napoli",

        puntiFatti: 0,

        falliSubiti: 0
    },

    {
        nome: "Verona",

        puntiFatti: 0,

        falliSubiti: 0
    },

    {
        nome: "Torino",

        puntiFatti: 0,

        falliSubiti: 0
    },

    {
        nome: "Lazio",

        puntiFatti: 0,

        falliSubiti: 0
    },

]


for (let i = 0; i < squadre.length; i++) {
    const club = squadre[i];
    club.puntiFatti = Math.floor(Math.random() * 10);
    club.falliSubiti = Math.floor(Math.random() * 10);


}

for (const key in squadre) {

    const element = squadre[key];

    console.log(squadre[key]);
}