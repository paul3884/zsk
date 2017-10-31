<?php

/*

echo date('n'),"<br>";
echo date('o'),"<br>";
echo date('O'),"<br>";
echo date('P'),"<br>";

echo date('s'),"<br>";
echo date('S'),"<br>";
echo date('t'),"<br>"; // liczba dni miesiaca
echo date('T'),"<br>"; //strefa czas
echo date('U'),"<br>"; //znacznik czasu unixa
echo date('w'),"<br>"; //dzien tygodnia
echo date('W'),"<br>"; //tydzien roku
echo date('z'),"<br>"; //dzien roku

*/

//getdate();

$data = getdate();
$dzien = $data['mday'];
$miesiac = $data['mon']; //1-12

switch($miesiac){
    case 10:{
            $miesiac = "październik";
            break;
        }
}

echo "$dzien $miesiac<br>";



$r1 = 2017;
$m1 = 10;
$d1 = 31;

$r2 = 1998;
$m2 = 3;
$d2 = 23;

$czas1 = mktime(0,0,0,$d1,$m1,$r1);
$czas2 = mktime(0,0,0,$d2,$m2,$r2);

$dni = floor((($czas1 - $czas2)/3600)/24);


$lata = floor(((abs($czas1 - $czas2)/3600)/24)/365);

echo "$dni dni<br>$lata lat<br>";

//strtotime()

$data = mktime();

echo $data , '<br>';

echo $dataDzisiejsza = strtotime("now") , '<br>';

$dataUrodzenia = strtotime("7 december 1998");




$panF = abs($dataUrodzenia - $dataDzisiejsza);

echo "PAN F: $panF<br>";

$dziesiecDniWstecz = strtotime("-10 day");

echo $dziesiecDniWstecz,'<br>';

$wczoraj = strtotime("yesterday");

echo $wczoraj,'<br>';

$przyszlosc = strtotime("+20 year");

echo "$przyszlosc ";

$jutro = strtotime("tomorrow");

echo $jutro,'<br>';

$dziensekundy = $jutro - $dataDzisiejsza;

echo $dziensekundy;









?>
