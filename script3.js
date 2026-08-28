const Bok = [
    {
        tittel: "Harry Potter og De Vises Stein",
        forfatter: "J.K. Rowling"
    },
    {
        tittel: "Ringenes Herre",
        forfatter: "J.R.R. Tolkien"
    },
    {
        tittel: "Hobbiten",
        forfatter: "J.R.R. Tolkien"
    }
];

let tekst = ""; /*Vi lager en variabel som heter tekst, som en tekststreng, der vi samler all HTML-kode */


for (let x in Bok) {
  tekst += "<b>Tittel:</b> " + Bok[x].tittel + "<br>" + "<b>Forfatter:</b> " + Bok[x].forfatter + "<br><br>";
};


document.getElementById("Bokliste").innerHTML = tekst;

const Elever = [
    {
        navn: "Liv",
        alder: 17
    },
    {
        navn: "Ola",
        alder: 15
    },
    {
        navn: "Kari",
        alder: 18
    }
];


let eleverTekst = "";
for (let x in Elever) {
    if (Elever[x].alder > 16) {
        eleverTekst += "<p>" + Elever[x].navn + " er " + Elever[x].alder + " år.</p>";
    }
}
document.getElementById("Eleverliste").innerHTML = eleverTekst;
