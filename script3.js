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

for (let bok of Bok) {
    tekst += `<p>${bok.tittel} av ${bok.forfatter}</p>`;
}

document.getElementById("Bokliste").innerHTML = tekst;

