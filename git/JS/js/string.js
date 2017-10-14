console.log("TEST");

var tekst = "ZSK - Zespół Szkół Komunikacji";


console.log(tekst.charAt(0));
console.log(tekst.length);


var zmienna = tekst.toUpperCase();

console.log(zmienna);
var male = tekst.toLowerCase();

console.log(male);

//camelCase - zapis zmiennej
var duzaMala = tekst.charAt(0).toUpperCase() + tekst.slice(1).toLowerCase();

console.log(duzaMala);

var imie = prompt("IMIE: ");

document.getElementById("h").textContent = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();

console.log(imie.substr(1, imie.length - 2));
