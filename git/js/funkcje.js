console.log("Test");

function witaj(imie){

    document.write("POLAKI" +" " + imie);
}

function PoleProstokata(a,b){ 
    return a*b;
}

/*var _a = prompt("A: ");
var _b = prompt("B: ");*/


/*console.log(PoleProstokata(_a, _b));

var name = "daniel";
witaj(name);*/


function poleObjetosc(szerokosc, dlugosc, wysokosc){
    var pole = szerokosc * dlugosc;
    var objetosc = pole * wysokosc;

    var wynik = [pole,objetosc];
    return wynik;

}
var x = prompt("Podaj wartosc, 0 - pole, 1 - objetosc");

var a = prompt("Podaj a: ");
var b = prompt("Podaj b: ");
var c = prompt("Podaj c: ");

var poleProstokata = poleObjetosc(a,b,c)[x];
console.log(poleProstokata);
