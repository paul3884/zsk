
<?php


$a = 16;
$_liczba =5;
$liczba2 = 5;

$imie = "Janusz";
$Imie = "Adam";

$imię_ = "Adam"; //można dać polskie znaki do zmiennych;
$wartość = "Adam"; //można dać polskie znaki do zmiennych;

echo "$liczba2"; //10
echo $liczba2; //10
echo '$liczba2' . "<br>"; //liczba2


//typy zmiennych
//typ skalarny [prosty]

//typ boolean

$prawda = true;
$prawda = false;

//typ integer

$calkowita = 200;

$szesnastkowa = 0xA;

//echo "$szesnastkowa" . "<br>";

$osemkowa= 010;

//echo "$osemkowa" . "<br>";

$binarna= 0b111;

//echo "$binarna";

//typ float

$zmiennoprzecinkowa = 5.2;

//echo "$zmiennoprzecinkowa";

//typ string

$a = 5.2;

echo "$a";

//składnia heredoc

$im = "Krystyne";

//Przypisanie etykiety
$heredoc = <<<TEKST
Mam horom curke $im
TEKST;

//echo "$heredoc";

//składnia nowdoc

$tekst = "Mowak";
$nowdoc = <<<'ETYKIETA'
Moje nazwisko: $tekst

ETYKIETA;

//echo "$nowdoc";

//typy zlozone
    //typ array
    //typ object

//typ specjalny
    //typ resource - odwołanie do zewnętrznego zasobu
    //typ null

$inna = null;
$inna = NULL;


echo "Zmienna o nazwie \$inna ma wartość: ", gettype($inna);
?>


