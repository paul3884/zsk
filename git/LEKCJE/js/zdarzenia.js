console.log("start");

var elImie = document.getElementById("imie");
var elNazwisko = document.getElementById("nazwisko");
var elLogin = document.getElementById("login");
var elMail1 = document.getElementById("mail1");
var elMail2 = document.getElementById("mail2");
var elPass1 = document.getElementById("pass1");
var elPass2 = document.getElementById("pass2");
var elDate = document.getElementById("date");
var elRegulamin = document.getElementById("regulamin");
var pWyslij = document.getElementById("przycisk");
var pPopraw = document.getElementById("popraw");
var elKomunikat = document.getElementById("komunikat");

elKomunikat.style.color = "red";

window.onload = function(){

    alert("SPIERDALAJ JAK NAJSZYBCEJ");
}


function sprawdz(){

    if(this.value.length > 2 && this.value.length < 10){
        elKomunikat.textContent = ""
    }
    else{
        elKomunikat.textContent = "Błędne dane";

        this.focus();
    }
}

function mail(){

    if(elMail1.value != elMail2.value){

        elKomunikat.textContent = "Podane maile sa rozne";

        elMail1.focus();

    }


}
function blokuj(){
    elMail2.disabled = false;
    this.disabled = true;
}
elImie.addEventListener("blur", sprawdz);
elNazwisko.addEventListener("blur", sprawdz);
elLogin.addEventListener("blur", sprawdz);

elMail2.addEventListener("blur",mail);
elMail1.addEventListener("blur",blokuj);
