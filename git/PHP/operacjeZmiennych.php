
<?php

echo  "ORKI, ORKI Z POZNANIA" . '<br>';

//operatory

//operator potęgowanie [**]
$potegowanie = 2**3;

//echo "$potegowanie";

//modulo

$modulo = 13%3;

//echo "$modulo";

// + , - , * , / ,

//operatory bitowe: w PHP: and &, or |, not -, xor *, przesunięcie bitowe w lewo <<, przesunięcie bitowe >>





/*$x = 2;

echo $x++;  //2
echo ++$x; // 4
echo $x; //4

$y = $x++; //4

echo $y; //4

$y = ++$x;

echo $y; //6
echo ++$y; //7*/



//operator łączenia łańcuchów

$t1 = "Pierwszy tekst";
$t2 = "Drugi tekst";
$t3 ="6";

$liczba = 14;

//echo $t1.$t2.$liczba;

//operatory rzutowania

//bool,int,float,string,array,object,unset

$dwa = (int)$t1;
$trzy = (int)$t3;


//echo $dwa;

$a = "22a1aasd";

$liczba = 5;

$l = (float)$liczba;

//echo gettype($l);

//string, object, array


//zad 1
//sprawdz czy w sklepie kupisz rower;

/*
$sklep = "otwarty";
$hajs = 1000;
$romet = true;


if($sklep == "otwarty" & $hajs > 900 & $romet){

    echo "Kupiłeś rower";

}else{
    echo "Nie masz roweru";
}

*/

//zad 2
//chcesz kupić rower lub hulajnoge
/*
$sklep = "otwarty";
$hajs = 2900;
$romet = false;
$hulajnoga = false;

if($sklep == "otwarty" & $hajs > 1000 & ($romet | $hulajnoga) )
{

    if($hulajnoga & $romet){
        echo "MASZ ROWER I HULAJNOGE!";

    }else if($romet){
          echo "MASZ ROWER !";
    }else
    {
        echo "MASZ HULAJNOGE !";
    }


}else{
    echo "idzesz pieszo";
}


*/

$a = 1.0;
$b = 1;

/*
if($a == $b){
    echo "JAAA!";

}else
    echo "NOOO!!";

*/
$tekst = "szkoła";
$a = 10;
$x = 20.5;
$y = true;
$n = null;
$c;

/*
echo gettype($tekst) , '<br>';
echo gettype($a) , '<br>';
echo gettype($x) , '<br>';
echo gettype($y) , '<br>';
echo gettype($n) , '<br>';
echo @gettype($c) , '<br>';
*/

//echo is_bool($tekst);
//echo is_string($tekst);
//echo is_float($x);
//echo is_int($x);
//echo @is_null($c);

//$_GET, $_POST, $_COOKIE, $_FILES

//echo $_SERVER['SERVER_PORT'];
//echo $_SERVER['SCRIPT_NAME'];
//echo $_SERVER["SERVER_PROTOCOL"];
//echo $_SERVER['DOCUMENT_ROOT'];

$lokalizacjaPliku = $_SERVER['DOCUMENT_ROOT'] . $_SERVER['SCRIPT_NAME'];

//echo $lokalizacjaPliku;

//stałe
//stałe z dużych liter

define('NAZWISKO','KOWAL');

//echo NAZWISKO;
/*
ERROR 2934937848 NIE MOZNA TAK ROBIC !!!!!!!!!
NAZWISKO = 'xd';

echo NAZWISKO;

*/

/*define('imie','karyna');

echo imie;*/


/*define('wiek',18);

echo wiek;*/

//define('wiek',18);

//stałe predefiniowane


//echo PHP_VERSION;


//echo PHP_OS
//echo __LINE__;
//echo __FILE__;
//echo __DIR__;




?>


