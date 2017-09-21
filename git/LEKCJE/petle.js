// FOR

//for (var i = 0; i<10; i++){

 //   document.write(i);
 //   if (i==5) break;
//}

//losuj 100 liczb z przedzialu 50,200
//for ( var i = 1; i<=100 ;i++)
  //  {
    //    document.write(Math.floor(Math.random()*151 + 50) +'<br>')

//    }


//wyswietl od 1 do 10, 1-9 przecinek, 10 kropka

//for ( var i = 1; i<=10 ;i++){

  //  if(i<=9)
    //    document.write(i + ',');
    //if(i==10)
    //    document.write(i + '.');

//}


//while chwile

//var i = 0;
//while(i++ < 5){
  //  document.write(i + '<br>');
//}

//uzytkownik podaje dwie wartosc z klawiatury, petla bedzie sie wykownywac tak dlugo az x >= y XDDDDDDDDDDD


//var x=0, y = 0;
//while(x >= y){
    //x = Number(prompt('Podaj x'));
  //  y = Number(prompt('Podaj y'));

//}document.write('x =' + x + "y=" + y);

// DO WHILE

/*var wiek;
do {
wiek = prompt('Podaj wiek');
    if (wiek==19)
        {
            document.write("Mozesz pukac matke kumpla");
        }
}
while(wiek != 19)*/

//wykorzystaj petle for i do while, podaj 5 liczb podzielncyh przez 2 z klawiatury, zapisz je do tablicy i wyswietl w konsloli tablice.

/*
    var liczby = [];
var x;
for (var i = 0; i<=4; i++){
    do{
        x = prompt ('podaj liczbe');
        x - parseInt(x);
    }while(x % 2 !=0)
    liczby [i] = x;
} console.log(liczby);
*/

//uzytkownik podaje z klawiatury licznbe, zabezpiecz przed podanie litery, znaku specjalnego

/*document.write('<input type="text" id = "liczba"');
document.write('<button id="przycisk">Dawai</button>');

var elPrzycisk = document.getElementById('przycisk');
var elLiczba = document.getElementById('liczba');

elPrzycisk.onclick = function(){
 if (isNaN(elLiczba.value)){
     console.log(elLiczba.value);
 }

}*/

// FOR EACH FOR EACH EO A HRIA

/*var tab = ['Anna', 'Jacek', 'Janusz', 'Adrian'];

for (var i=0; i<tab.length; i++){
    document.write(tab[i] + ' ' );

}

function p(a,b){
    document.write(a+b + '<br>');

}
tab.forEach(p)

function pkaz (wartosc, indeks)
{
    document.write(indeks + 1 +"element tablicyt wynosi");
    document.write(wartosc + '<br>')
}
tab.forEach(pkaz)*/

var elPI = document.getElementById('pi');
var elNic = document.getElementById('nic');
var elPrzycisk = document.getElementById('przycisk');
var elWynik = document.getElementById('wynik');

elPrzycisk.onclick = function (){
    if (elPI.checked){
        elWynik.innerHTML = Math.PI;
    }
    else if(elNic.checked)
        elNic.innerHTML = 'nic';
    else elWynik.innerHTML = 'nic nie wyrales';
}
