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
function wypiszWynik(wynik, obiekt, informacja){
    var s = "";

    var lokalizacja = document.getElementById("wynik");
    lokalizacja.textContent = "Obliczenia na obiekcie " + obiekt;

    for(var i = 0; i < wynik.length; i++){

        s += "Wynik " + i + ": " + wynik[i].toPrecision(4) + " | "+ informacja.split(" ")[i] + "<br>";

    }
    console.log(s);
    lokalizacja.innerHTML += "<br><br>" +s;
}


function calc(){
    var figura = form.elements["figure"].value;

    promien = parseInt(document.getElementById("r").value,10);
    wStozka = parseInt(document.getElementById("h").value,10);
    twStozka = parseInt(document.getElementById("l").value,10);

    switch(figura){
        case "stozek":{
            console.log("Liczymy stozek");
            var tekst = "pole objętość";

            result = new Array();

            result.push(liczPoleStozka(promien, twStozka), liczObjetoscStozka(promien, wStozka));

            wypiszWynik(result, figura, tekst);

            console.log(result);
            break;
        }
        case "kolo":{
            console.log("Liczymy kolo");
            var tekst = "pole obwód";
            result = new Array();

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
