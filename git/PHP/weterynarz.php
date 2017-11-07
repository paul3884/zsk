<!doctype html>


<html>
    <head>
    <title>Weterynarz</title>

    <meta charset="utf-8">

    <link rel="stylesheet" href="style.css">
    </head>

    <body>

        <div id = "baner"><h1>Gabinet weterynaryjny</h1></div>
        <div id = "panellewy"><h2>Psy</h2>
    <?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "zwierzaczki";

$connection = new mysqli($host,$user,$pass,$db);

if(!$connection){
    die("DIED");
}

    //echo "Connected to $db<br>";
$stmt = $connection->prepare("SELECT imie FROM zwierzeta WHERE rodzaj = 1");
$stmt->execute();
$result = $stmt->get_result();

while($row = $result->fetch_assoc()){

    echo "{$row['imie']} <br> ";
}
?>

            <h2>Koty</h2>
        <?php
            $stmt = $connection->prepare("SELECT imie FROM zwierzeta WHERE rodzaj = 2");
$stmt->execute();
$result = $stmt->get_result();

while($row = $result->fetch_assoc()){

    echo "{$row['imie']} <br> ";
}


        ?>

        </div>
        <div id = "panelsrodkowy"></div>
        <div id = "panelprawy"></div>
    </body>


</html>
