<?php

/*
$name = $_GET['imie'];
$lname = $_GET['nazwisko'];



if(empty($name) | empty($lname)){

    echo 'COŚ TY WPROWADZIł';
}else{

    echo <<<HTML
    <span style = "color: red">$name $lname</span>
HTML;

}*/

/*
$login = $_POST['login'];
$pass= $_POST['password'];


if(!empty($login) & !empty($pass)){
    echo <<<DANE
    Login: $login <br>
    Password: $pass
DANE;

}else{
    //echo "nie wprowadzono prawidłowych danych";
    header('location: formularz.php');
}

*/

if(empty($_GET['kolor']))
    header('location: formularz.php');


if(isset($_GET['kolor'])){

    //echo "Zaznaczyłeś kolor ", $_GET['kolor'];
    echo "Zaznaczyłeś kolor  {$_GET['kolor']}";

}
?>
