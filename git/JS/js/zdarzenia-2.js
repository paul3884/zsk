var select = document.getElementById("auta");
var wynik = document.getElementById("ulubione_auto");



select.onchange = function(){
    var ss = select.value;
    wynik.textContent = "Twoje ulubione auto: " + ss;

}
