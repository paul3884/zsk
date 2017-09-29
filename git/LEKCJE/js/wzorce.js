console.log("HEIL");


//Wyrażenie regularne regex


var text = "testSDADSD";

//var regEx = /Szkol/;
//var regEx = /szkol/i; nie zwraca uwagi na wielkosc liter
//var regEx = /^szkol/i; początek ciągu
//var regEx = /szkol$/i; koniec ciągu
//var regEx = /^szkol$/i;
//var regEx = /[a-z]/; patrzy czy jest litera od a do z
//var regEx = /[A-Z]/; patrzy czy jest litera od A do Z
//var regEx = /[A-z]/; patrzy czy jest litera od A do z
//var regEx = /[ąęćźżółńś]/; Dla polaczkow
//var regEx = /[ąęćźżółńś][a-z]/; zakres cały alfabet
//var regEx = /^[ąęćźżółńś][a-z]/; początek musi miec polska litere
//var regEx = /[a-z]\s/; alfabet dodatkowo musi byc spacja w ciągu znaku
//var regEx = /[a-z]+@/; plus odpowiada 1 elementowi o ty
//var regEx = /Zespol[a]?/; zastepuje jeden znak poprzedzający
//var regEx = /^mąk[a]?@/;
//var regEx = /[a]{2}$/; dwa ostatnie znaki to "a"
//var regEx = /^[a]{2,}/;
//var regEx = /\//; "\"/ oznacza że musi być slash. znaki spacjalne poprzedzamy \
//var regEx = /./; nie wiem co to
//var regEx = /\.pl$/;
//var regEx = /\w/; dowlony znak
//var regEx = /\W/; negacja
//var regEx = /\d/; musi byc cyfra
//var regEx = /\D/; wszystko oprocz cyfr
//var regex = /test/;
//var regex = /(test){1}/; musi wystąpic 1 element [test]
var regex = /(test){1}/;


var sprawdz = regex.test(text);

document.write(sprawdz);
