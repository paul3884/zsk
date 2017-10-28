<?php

/*Napisz funkcję, która będzie obliczała wystąpienia określonego ciągu znaków w danym tekście. Tekst i szukany ciąg znaków powinny byćprzekazywane w postaci argumentów. */

function searchString($tek, $szuk){
    $iter = 0;
    if($szuk == ""){
        echo "Nie podano żadnego znaku";
        return;
    }
    //działaj dopoki ciąg znaków nie jest pusty
    while(strlen($tek) != 0){
        //kiedy znajdziemy szukany znak sprawdzamy pozycje i typ danych w przypadku gdyby pozycja była równa 0)
        if(strpos($tek, $szuk) !== false){
            //wycinamy część początkowego ciągu od pozycji znalezionego znaku + długość szukanego ciągu
            //przykład bdacrwd: pozycja  = 3 + 1 : nowy ciąg crwd szukana: a
            $tek = substr($tek, strpos($tek, $szuk) + strlen($szuk));
            $iter++;
        }
        else break;
    }

    echo "Znaleziono <span>$iter</span> wyników!";

}

$zlo = array(
    'rwa',
    'urwy',
    'pierdo',
    'uj',
    'lony',
    'olera',
    'szma',

);

$set = array(
    '***',
    '****',
    '****',
    '**',
    '****',
    '*****',
    '****'
);

$string = $_POST['inputText'];
$szukana = $_POST['find'];

$poprawnyLogin;
$occ;

$poprawnyLogin = str_replace($zlo, $set, $string, $occ);

if($poprawnyLogin != $string){

    echo "Tekst został ocenzurowany w <span>$occ</span> miejsach!<br><p>$poprawnyLogin</p>";
}else{

    echo "Podany tekst jest dobry i nie wymaga cenzurowania ";
}

echo "Wyszukuję ciąg \"<span>$szukana</span>\" w tekście!<br>";


searchString($string, $szukana);

$highLight = "<span>$szukana</span>";

echo "<br><p>" . str_replace($szukana,$highLight,$string) . "</p>";

?>

<!doctype html>
<html>
<head>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet">
    <style>
        body{
            font-family: 'Open Sans', sans-serif;
            font-size: 1.2vw;
        }
        span{
            position: relative;
            color:red;
            font-weight: 900;
        }
        p{
            display: block;
            width: 100%;
            height: 40%;
            overflow-y: scroll;
            box-sizing: border-box;
            border: 0.5px solid black;
        }
        a{
            position: fixed;
            display: block;
            margin: auto;
            width: 10%;
            height: 10%;
            top:0;
            right: 0;
        }
        p span{
            background-color: red;
            color:aliceblue;
        }
    </style>
</head>
<body>
    <a href = "zadania.php">WRÓC</a>
</body>
</html>
