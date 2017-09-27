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

    alert("SA");
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
function password(){

    if(elPass1.value != elPass2.value){

        elKomunikat.textContent = "Podane hasla sa rozne sa rozne";

        elPass1.focus();

    }


}
function blokuj(){
    elMail2.disabled = false;
    this.disabled = true;
}

function odblokuj(){
    var zablokowane = document.querySelectorAll("input[disabled]");

    if(zablokowane.length > 0){
        console.log(zablokowane);

            for(var i = 0; i < zablokowane.length; i++){
                zablokowane[i].disabled = false;
            }
        }
}


function wyslij(){

    var puste = false;
    var input = document.querySelectorAll("input");

    for(var i = 0; i < input.length; i++){

        if(input[i].value == ""){
            puste = true;
            break;

        }
    }

    if(puste){
        elKomunikat.textContent = "MASZ PUSTE POLA";

    }else{


        document.write("<div>");
        document.write("Imie: " + elImie.value+ "<br>");
        document.write("Nazwisko: " + elNazwisko.value + "<br>");
        document.write("Login: " + elLogin.value + "<br>");
        document.write("E-mail: " + elMail1.value + "<br>");
        document.write("Data: " + elDate.value + "<br>");


        document.write("</div>");
    }

}

elImie.addEventListener("blur", sprawdz);
elNazwisko.addEventListener("blur", sprawdz);
elLogin.addEventListener("blur", sprawdz);

elMail2.addEventListener("blur",mail);
elMail1.addEventListener("blur",blokuj);

pPopraw.onclick = odblokuj;
pWyslij.onclick = wyslij;
