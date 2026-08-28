const fakta = [
"Honning blir aldri dårlig.",
"Blekkspruter har tre hjerter.",
"Verdens høyeste fjell er Mount Everest.",
"Bananer er bær, men jordbær er ikke det.",
"En dag på Venus er lengre enn et år på Venus.",
"Det finnes flere stjerner i universet enn sandkorn på jorda.",
"Kenguruer kan ikke gå bakover.",
"Lyn er varmere enn overflaten på sola.",
"Haier har eksistert lenger enn dinosaurene.",
"Menneskekroppen består av omtrent 60 % vann."
];

function visFakta() {

    let tilfeldigIndex = Math.floor(Math.random() * fakta.length);

document.getElementById("fakta").innerText = fakta[tilfeldigIndex];

}