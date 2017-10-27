<?php

$text = <<<TEXT
Zespół
Szkół
Komunikacji
TEXT;


echo "Przed użyciem funkcji nl2br:<br> $text";

echo "Po użyciu funkcji nl2br:<br>";
echo nl2br($text);
echo "<br>";

//zamiana na małe litery

echo strtolower($text);
echo "<br>";
//zamiana na duże litery

echo strtoupper($text);
echo "<br>";
//pierwsza jako duża


$text = "rAZ DWA tRZY";
echo "<br>";

echo ucfirst($text);
echo "<br>";
//zamiany wszystkich pierwszych liter na duże
echo ucwords($text);
echo "<br>";

$lorem = "Culpa vidisse si comprehenderit, ne quae ne irure, iudicem de dolore, malis
commodo familiaritatem. Fabulas comprehenderit ad arbitror, admodum quid irure
fabulas duis ad e aut relinqueret, tempor cillum de admodum transferrem ad an
nulla incididunt imitarentur ut ad iis anim occaecat hic excepteur esse o
arbitror coniunctione, an quamquam te commodo. Dolore ex aut malis eiusmod,
litteris noster iudicem eu irure deserunt ea nescius nam nam culpa iis velit.
Arbitror ea duis ad fabulas lorem admodum ne non aliqua excepteur, admodum nulla
malis a sint. In possumus aut admodum. Probant aute labore vidisse fore an quae
aliquip a quis eram. Nam malis irure ea ingeniis, mandaremus est quorum.";


$kolumna = wordwrap($lorem,40,"<br>");

echo $kolumna;
echo "<br>";

//usuwanie białych znaków
$imie1= "Janusz";
$imie = "  Janusz ";

echo strlen($imie);
echo "<br>";
echo strlen($imie1);

echo "<br>";
echo strlen(ltrim($imie));
echo "<br>";
echo strlen(rtrim($imie));
echo "<br>";
echo strlen(trim($imie));
echo "<br>";

$adres = "Poznań, ulica. Fredry 13, tel: (61) 445-44-58";

//w przód
$szukaj = strstr($adres, "tel:");

echo $szukaj;
echo "<br>";

//szukanie do tyłu
$doTylu = strstr($adres, "tel:", true);

echo $doTylu;
echo "<br>";

$szukaj2 = strstr($adres,"Tel");

//nie znajdzie nic, nie ignoruje wielkości znaków
echo $szukaj2;
echo "<br>";
//ignoruje wielkość liter

$szukaj2 = stristr($adres,"Tel");
echo $szukaj2;
echo "<br>";

$ciag = "a";
$ciag1 = "aa";

//compare
echo strcmp($ciag, $ciag1);
echo "<br>";

echo strcmp("zzz" , "zzz");
echo "<br>";

echo strcmp("zza" , "zzz");
echo "<br>";

echo strcmp("zza" , "zzz");
echo "<br>";

echo strcmp("zzz" , "zza");
echo "<br>";

echo strcmp("zzza" , "zzz");
echo "<br>";

//pozycja
$poz = strpos("abcdefg","cde");

echo $poz;
echo "<br>";

$poz = strpos("abcabc","abc");

echo $poz;
echo "<br>";

//zad1

$text1 = "abcdabcd";
$text2 = "ab";

if(strpos($text1,$text2) === false){
    echo "Ciąg $text2 nie została znaleziona w ciągu $text1";
    echo "<br>";
}else{

    echo"Ciąg $text2 została znaleziona w ciągu $text1";
    echo "<br>";
}

$mail = strstr("zsk@gmail.com", "@");

//szuka w kodzie ASCII
$mail1 = strstr("zsk@gmail.com", 64);

echo $mail;
echo "<br>";
echo $mail1;
echo "<br>";

//Przetwarzanie ciągu znaków
//zamień

$replace = str_replace("%imie%", "Janusz", "%imie% to nie imie to styl życia");

echo $replace;
echo "<br>";

$nazwisko = substr("Janusz Nowak",7,5);

echo $nazwisko;
echo "<br>";

$zdanie = "przykładowy ciąg znaków";

$zamienCiag = str_replace($zdanie,"ąężźćóśłń", "a");

echo $zamienCiag;
echo "<br>";



//Napisz funkcje która będzie obliczała
//wystąpienia określonego ciągu znaków
//tekst i szukany ciag znakow powinny być
//przekazywane w postaci argumentów


/*
Napisz program który pozwoli cenzurować zdanie podane przez użytkownika
Formularz do wprowadzenia niewłaściwych słów,
*/

?>
