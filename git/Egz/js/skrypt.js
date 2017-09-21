var lPierwsza = document.getElementById("1");
var lDruga = document.getElementById("2");

var pDodawanie, pOdejmowanie, pMnozenie, pDzielenie, pPotegowanie;
var rezultat;

pDodawanie = document.getElementById("dodawanie");
pOdejmowanie = document.getElementById("odejmowanie");
pMnozenie = document.getElementById("mnozenie");
pDzielenie = document.getElementById("dzielenie");
pPotegowanie = document.getElementById("potegowanie");

rezultat = document.getElementById("wynik");
function sprawdz(){
    if(lPierwsza.value == "" || lDruga.value == "" ){
        rezultat.textContent = "Proszę uzupełnić obie liczby."
        return false;
    }
    return true;
}

pDodawanie.onclick = function(){

    if(sprawdz())
        rezultat.textContent = parseFloat(lPierwsza.value) + parseFloat(lDruga.value);

}
pOdejmowanie.onclick = function(){
    if(sprawdz())
        rezultat.textContent = parseFloat(lPierwsza.value) - parseFloat(lDruga.value);
}
pMnozenie.onclick = function(){
    if(sprawdz())
        rezultat.textContent = parseFloat(lPierwsza.value) * parseFloat(lDruga.value);

}
pDzielenie.onclick = function(){
    if(lDruga.value == "0"){
        rezultat.textContent = "Nie wolno dzielić przez zero.";
        return
    }
    if(sprawdz())
        rezultat.textContent = parseFloat(lPierwsza.value) / parseFloat(lDruga.value)
}

pPotegowanie.onclick = function(){
    if(parseInt(lDruga.value) ==0)
        rezultat.textContent = 1;


    var wartosc = 1;
    for(var i = 0; i < parseInt(lDruga.value); i++){

        wartosc *= lPierwsza.value
    }

    rezultat.textContent = wartosc;
}
