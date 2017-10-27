<html>
<head>
</head>
    <body>
    <form action = "tablice.php">
        <button></button>
    </form>

    <script>


    </script>
    </body>
</html>


<?php

/*

//tablice indeksowane numerycznie

$kolory = array('biały', 'czerwony', 'zielony');
$csgo = array('VP', 'ASTRALIS', 'FANACIT');

//echo "Początkowa zawartość tablicy: <br>";

/*for($i = 0; $i < count($kolory); $i++){
    $e = $i+1;
    echo "$e: $kolory[$i] ";
}
echo "<br>";

$kolory[0] = 'orange';
$kolory[1] = 'aqua';
$kolory[2] = 'magenta';

/*for($i = 0; $i < count($kolory); $i++){
    $e = $i+1;
    echo "$e: $kolory[$i] ";
}


function wypisz($tablica){
    foreach($tablica as $a){
        echo "$a ";
    }

    echo '<br>';
}
//wypisz($csgo);

//tablice asocjacyjne
$dane =array(
    'imie' => "Pablo",
    'nazwisko' => "Pasha",
    'wiek' => 69,
    'narodowosc' => 'Polska');

echo "Zawartość tablicy asocjacyjnej o nazwie \$dane<br>";

/*
echo <<<TABLICA
Imię: $dane[imie]<br>
Nazwisko: $dane[nazwisko]<br>
Wiek: $dane[wiek]<br>
Narodowość: {$dane['narodowosc']}<br>
TABLICA;
*/

/*
foreach($dane as $a => $v){
    echo "$a: $v <br>";
}
*/
/*
foreach($dane as $wartosc){
    echo "Wartość: $wartosc<br>";
}


//tablice wielowymiarowe

$uczen = array(
    array('julia','Nowak', 20),
    array('Anna', 'Kowal', 19),
    array('Paweł','Kowalski', 25)
);

for($i = 0; $i < count($uczen); $i++){

    for($j = 0; $j < count($uczen[$i]); $j++){

        echo $uczen[$i][$j] . '<br>';


    }
}


foreach($uczen as $klucz => $tablica){

    foreach($tablica as $klucz2 => $wartosc){

        echo "{$uczen[$klucz][$klucz2]} <br>";

    }

}




$cyfry = array(
    array(1,2,3),
    array(5,6),
    array(7,2,5),
    array(9,10)
);

foreach($cyfry as $wartosc){

    foreach($wartosc as  $x){

        echo $x . '<br>';

    }

}

$tab = array(1,5,6,2,3,100,-5);

wypisz($tab);

//sortowanie rosnąco

sort($tab);

wypisz($tab);

rsort($tab);

wypisz($tab);

$tab2 = array('julia','tomek','anna',);

wypisz($tab2);

sort($tab2);

wypisz($tab2);

$tab3 = array('Julia','tomek','anna',);

wypisz($tab3);

sort($tab3);

wypisz($tab3);

$tab4 = array('Julia','tomek','anna',);

wypisz($tab4);

foreach($tab4 as $klucz => $x){

    $x = strtolower($x);
    $tab4[$klucz] =$x;
}
wypisz($tab4);



//sortowanie tablicy asocjacyjnej

$tabAsoc = array(
    'imie' => 'andrew',
    'pseudonim' => 'tomk',
    'wiek' => 32,
    'nazwisko' => 'król'
);
wypisz($tabAsoc);


echo gettype($tabAsoc['pseudonim']);
echo gettype($tabAsoc['wiek']);

ksort($tabAsoc);

wypisz($tabAsoc);

krsort($tabAsoc);
wypisz($tabAsoc);

//wyświetlanie danych z tablicy
var_dump($tabAsoc);
echo '<br>';
print_r($tabAsoc);

echo '<pre>';
    print_r($tabAsoc);
echo '</pre>';


*/


//zadanie domowe
//utwórz tablice trójwymiarową i napisz dla niej
//funkcję wyświetlającą zawartość wykorzystaj
//foreach

$arr3d = array(
    array(
        array(),
        array()
    ),
    array(
        array(),
        array()
    ),
    array(
        array(),
        array()
    ),
    array(
        array(),
        array()
    )
);


    for($i = 0; $i < 9; $i++){
        for($a = 0; $a < 9; $a++){
            for($c = 0; $c < 9; $c++){
                $arr3d[$i][$a][$c] = mt_rand(-PHP_INT_MAX,PHP_INT_MAX);

        }
   }
}
foreach($arr3d as $v1){
    foreach($v1 as $v2){
        foreach($v2 as $v3){
            echo $v3 . " ";

        }
        echo "<br>";
    }
    echo "<br>";
}

echo "<pre>";
print_r($arr3d);
echo "</pre>";
//OBROBIĆ PODRĘCZNIK Z INFY 60 stron
//INFORMATYKA EUROPEJCZYKA CZĘŚĆ 1
?>
