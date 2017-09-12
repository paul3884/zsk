var result;
var pi = Math.PI;
var form = document.getElementById("_form");


function liczPoleKola(r){
    var v = Math.pow(r,2) * pi;
    return v;
}
function liczObwodKola(r){
    return (2 * pi * r);
}
function liczObjetoscStozka(r, h){
    return (Math.pow(r, 2) * pi * h)/3;
}
function liczPoleStozka(r, l){
    var polePodstawy =  pi * Math.pow(r, 2);
    var polePowBocznej = pi * r *l;

    return polePodstawy + polePowBocznej;
}
//Parametrami funkcji jest tabela przechowująca
//obliczenia na danych obiekcie,
//wybrany przez użytkownika obiekt do wypisania na stronie,
//oraz łańcuch mówiący czym jest wynik wyświetlany na stronie
function wypiszWynik(wynik, obiekt, informacja){
    var s = "";

    var lokalizacja = document.getElementById("wynik");
    lokalizacja.textContent = "Obliczenia na obiekcie " + obiekt;

    for(var i = 0; i < wynik.length; i++){

        //Pętla wykona sie tyle razy ile jest elementów w tablicy [2]
        //do zmiennej "s" dopisywana jest tekst z wynikiem liczbowym zaokrąglonym
        //do 4 miejsc po przecinku
        //rozbijany jest również pobrany łańchuch na tabele łańcuchów
        //informacja.split(" ")[i] - wybrany zostanie element i z powstałej tabeli
        s += "Wynik " + i + ": " + wynik[i].toPrecision(4) + " | "+ informacja.split(" ")[i] + "<br>";

    }
    console.log(s);
    lokalizacja.innerHTML += "<br><br>" +s;
}


function calc(){
    //Wartość wybrana z formularza z elementów o wspólnej nazwie [figure]
    var figura = form.elements["figure"].value;

    //Pobranie wpisanych przez użytkownika elementów
    //Konwersja na postać liczbową o podstawie dziesiętnej
    var promien = parseInt(document.getElementById("r").value,10);
    var wStozka = parseInt(document.getElementById("h").value,10);
    var twStozka = parseInt(document.getElementById("l").value,10);

    //Zależnie od wybranego przez użytkownika elementu Koło lub Stożek
    //Wykona się odpowiednia część kodu
    switch(figura){
        case "stozek":{
            console.log("Liczymy stozek");

            //Zmienna pomocnicza do wyświetlenia końcowego wyniku
            var tekst = "pole objętość";

            //Stworzenie nowej tabeli
            result = new Array();
            //Wprowadzenie 2 nowych elementów tablicy za pomocą funkcji zwracających
            //liczby
            result.push(liczPoleStozka(promien, twStozka), liczObjetoscStozka(promien, wStozka));


            wypiszWynik(result, figura, tekst);

            console.log(result);
            break;
        }
        case "kolo":{
            console.log("Liczymy kolo");
            //Zmienna pomocnicza do wyświetlenia końcowego wyniku
            var tekst = "pole obwód";

            //Stworzenie nowej tabeli
            result = new Array();
            //Wprowadzenie 2 nowych elementów tablicy za pomocą funkcji zwracających
            //liczby
            result.push(liczPoleKola(promien), liczObwodKola(promien));


            wypiszWynik(result, figura, tekst);

            console.log(result);
            break;
        }
        default:{
            break;
        }
    }
}
