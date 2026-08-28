
const filmer = ["Project Hail Mary", " Erin Brockowich", "The Martian"];
document.getElementById("demo").innerText = filmer;


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("fruit").innerHTML = text;
document.getElementById("fruit2").innerText = text;

const tall = [1, 2, 3, 4, 5];
document.getElementById("tall").innerText = tall;

const sum = tall.reduce((total, verdi) => total + verdi, 0);
document.getElementById("sum").innerHTML = sum; 



