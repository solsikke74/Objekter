
const bil={
  merke: "Ford",
  modell: "Kuga Titanium X",
  Årsmodell: "2018"
}

bil.farge = "Svart";

document.getElementById("bilen").innerHTML = "Merke: " + bil.merke + "<br>" + "Modell: " + bil.modell + "<br>" + "Årsmodell: " + bil.Årsmodell + "<br>" + "Farge: " + bil.farge;

const elev ={
  navn: "Anna",
  alder: 17,
  klasse: "2ITKA"
}

elev.alder = 18;

document.getElementById("eleven").innerHTML = "Navn: " + elev.navn + "<br>" + "Alder: " + elev.alder + "<br>" + "Klasse: " + elev.klasse;

const elevEndret ={
  navn: "Anna",
  alder: 17,
  klasse: "2ITKA"
}

delete elev.alder;

document.getElementById("elevenUtenAlder").innerHTML = "Navn: " + elev.navn + "<br>" + "Klasse: " + elev.klasse;

