
var button = document.getElementById("start");
var czynnikiLiczby;


function czynniki(liczba){
    czynnikiLiczby = new Array();

    var liczbaCzynnikow = 0;
    var czynnik = 3;

    var value = 0;
    while(liczba > 1){

        if(liczba % czynnik == 0){
            liczbaCzynnikow++;
            czynnikiLiczby.push(czynnik);
        }


        while(liczba % czynnik == 0){
            liczba /= czynnik;
        }

        czynnik = czynnik + 2;

        if(czynnik > 200)
            break;
    }

    console.log("LICZBA CZYNNIKOW: " + liczbaCzynnikow);
    console.log("CZYNNIKI: " + czynnikiLiczby);
}


function odwrocLiczby(liczba){

    var nowaLiczba = 0;
    while(liczba > 0){

        nowaLiczba = 10 * nowaLiczba + liczba % 10;
        liczba = Math.floor(liczba /  10);

    }
    console.log("ODWROCONA LICZBA: " + nowaLiczba);

}

function mocLiczby(liczba){

    var nowaliczba = 1;
    var ile = 0;

    while(liczba > 9){

        while(liczba > 0){

            nowaliczba = nowaliczba * (liczba % 10)
            liczba /= 10
        }

        ile++;

        console.log(nowaliczba);
        liczba = nowaliczba;
    }

    console.log(ile);

}
function palindrom(liczba){
    var liczbaPalindromow = 0;
    var odwroconaLiczba = odwrocLiczby(liczba);
    var suma = 0;

    suma = odwroconaLiczba + liczba;

    if(odwrocLiczby(suma) == suma){
        liczbaPalindromow++;

    }
}




