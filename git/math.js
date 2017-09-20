var pi = Math.PI;
console.log(pi);

//var x = prompt ('Podaj wartosc');
//console.log(Math.sqrt(x));

var a = 13.2;
var b = 28.5;
var c = 1;

var minimalna = Math.min(a,b,c);
console.log(minimalna);

var maksymalna = Math.max(a,b,c);
console.log(maksymalna);

var zaokraglenie = Math.round(b);
console.log(zaokraglenie);

//abs, round, floor

var x = -56;
var y = -13.1;
var z = 14.9;

document.write('<br>'+Math.abs(x)+ '<br>');
document.write('<br>'+Math.abs(y)+ '<br>');
document.write('<br>'+Math.abs(z)+ '<br>');

document.write('<br>'+Math.round(x)+ '<br>');
document.write('<br>'+Math.round(y)+ '<br>');
document.write('<br>'+Math.round(z)+ '<br>');


document.write('<br>'+Math.floor(x)+ '<br>');
document.write('<br>'+Math.floor(y)+ '<br>');
document.write('<br>'+Math.floor(z)+ '<br>');

//potegowanie

var p = Math.pow(2,10);
console.log(p);

//losowanie

var losuj = Math.random();
losuj = losuj.toFixed(4);
console.log(losuj);


var k = 3.41521321312
k = k.toFixed(3);
document.write(k);

//osuj z przedziau

 var l = Math.floor(Math.random() * 11);
console.log(l);

//losuj z przedzialu od 90 do 100

var l = Math.floor(Math.random() * 11 + 90);
console.log(l);
