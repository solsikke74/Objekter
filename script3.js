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

let tekst = "";

for (let bok of Bok) {
    tekst += `
    <h3>${bok.tittel}</h3>
    <p>Forfatter: ${bok.forfatter}</p>
    <p>År: ${bok.år}</p>
    <hr>
    `;
}

document.getElementById("Bokliste").innerHTML = tekst;