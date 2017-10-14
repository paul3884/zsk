/*var f = "Fizz";
var b = "Buzz"

for(var i = 1; i <= 100; i++){


    if(i % 3 == 0){
        document.write(f + "<br>");

    }
    if(i % 5 == 0){
        document.write(b + "<br>");

    }
    if(i % 3 == 0  && i % 5 == 0){
        document.write(f+b + "<br>");

    }
    if(i % 3 != 0  && i % 5 != 0){
        document.write(i + "<br>");

    }

}*/


//previousElementSibling
//nextElementSibling

/*
var poczatek = document.getElementById("s2");
var poprzedni = poczatek.previousElementSibling;
var nastepny = poczatek.nextElementSibling;

poprzedni.className = "niebieski";
poczatek.className = "niebieski";
nastepny.className = "niebieski";
*/

//firstChild
//LastChild

var lista = document.getElementsByTagName("ul")[0];
console.log(lista);

var pierwszy = lista.firstElementChild;
var ostatni = lista.lastElementChild;

pierwszy.setAttribute("class",'grey');
ostatni.setAttribute("class",'grey');


//zmien pierwszy element input na button i przypisz wartosc wyslij


var b = document.getElementById("nB");

b.setAttribute("type", "button");
b.value = "WYŚLIJ";

var a = document.getElementsByTagName("a")[0];

a.setAttribute("href",'http://www.zsk.poznan.pl');
