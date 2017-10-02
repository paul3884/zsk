/*miasto kodpocztowy wzorzec
sprawdz czy dobrze
wypusz KOD: MIASTO: */

var output = document.getElementById("wynik");
var inputs = document.getElementsByTagName("input");
var conf = document.getElementById("1");


var regex = /^[0-9]{2}-[0-9]{3}$/;

console.log(inputs);

function sprawdz(){

    console.log("tse");
    if(regex.test(inputs[0].value)){
        console.log("GOOD");
        inputs[0].className = "good";
    }
    else{
        console.log("BOOOO");
        inputs[0].className = "error";
    }

    sprawdzMiasto();

}
function sprawdzMiasto(){

    if(inputs[1].value.match("^[A-Z]{1}[a-z]")){
        console.log("GOOD");
        inputs[1].className = "good";
    }
    else{
        console.log("BOOOO");
        inputs[1].className = "error";
    }

}

conf.onclick = sprawdz;
