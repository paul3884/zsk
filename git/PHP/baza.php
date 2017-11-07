<?php

$host = "127.0.0.1";
$user = "root";
$pass = "";
$db = "zwierzaczki";

$connection = new mysqli($host,$user,$pass,$db);


if(!$connection){
    die("DIED");
}
else
    echo "Connected to $db<br>";

/*
Sposób 1
$sqlQuery = "SELECT * FROM zwierzeta";

$result = $connection->query($sqlQuery);

*/


//Sposób 2
$stmt = $connection->prepare("SELECT imie, telefon, szczepienie, opis FROM zwierzeta;");

$stmt->execute();

$result = $stmt->get_result();




while($row = $result->fetch_assoc()){

    echo "{$row['imie']} {$row['telefon']} {$row['szczepienie']} {$row['opis']}<br> ";
}



$connection->close();
?>
