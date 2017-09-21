console.log("Tablice");

//Tworzenie tablicy za pomocą literału
var kolory = ["biały", "zielony" , "niebieski"];
var elKolor = document.getElementById("pojemnik");

elKolor.textContent = kolory[0];

//Tworzenie tablicy za pomocą konstruktora
var samochody = new Array("BMW", "Audi", "Ferrari");


console.log(samochody[0]);
console.log(samochody[samochody.length-1]);
console.log(samochody.length);

/*var nowy = prompt("Samochód: ");

samochody[0] = nowy;

elKolor.textContent = samochody;*/

var tab = new Array(
    new Array("Jan", "Kowal", "Poznan"),
    new Array("Wojtek", "Zima", "Poznan"),
    new Array("Marta", "Olska", "Warszawka")

)

console.log(tab);

var imiona = ["Pablo", "Wojtek", "Krzychu", "Rafał"];

console.log(imiona);

var posortowaneImiona = imiona.sort();

console.log(posortowaneImiona);

var odwrocImiona = posortowaneImiona.reverse();

odwrocImiona.pop()
odwrocImiona.unshift("Tomek");

console.log(odwrocImiona);
console.log(odwrocImiona.indexOf("Tomek"));

var cyfry = new Array(1, 2, 20, 190, -1, 1000000);

console.log(cyfry);

var posortowaneCyfry = cyfry.sort();
var sortujCyfry = cyfry.sort(function(a,b)
{
    return a-b;
});

console.log(sortujCyfry);

/*
zd
formularz z loginem i hasłem
zapisz dane w tablicy


*/





















