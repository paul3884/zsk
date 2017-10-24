<!doctype html>
<html>
    <head>

        <meta charset="utf-8">
        <title>Formularz</title>
    </head>

    <body>

        <!--<form action = "dane.php" method="get">
            XD<input type = "text" name = "imie"><br>
            s<input type = "text" name = "nazwisko"><br>

            <input type ="submit">

        </form>-->
        <!--
        <form method="post" action = "dane.php">

            Login<input type = "text" name = "login"><br>
            password<input type = "text" name = "password"><br>

            <input type="submit">
        </form>
        -->

       <!-- <form method = "get" action = "dane.php">

            <input type = "radio" name ="kolor" value = "biały">biały
            <input type = "radio" name ="kolor" value = "czerwony">czerwony
            <input type = "radio" name ="kolor" value = "niebieski">niebieski
            <input type = "radio" name ="kolor" value = "szary">szary

        <br>
        <input type = "submit">

        </form>-->

         <form method = "get">

            <input type = "radio" name ="kolor" value = "biały">biały
            <input type = "radio" name ="kolor" value = "czerwony">czerwony
            <input type = "radio" name ="kolor" value = "niebieski">niebieski
            <input type = "radio" name ="kolor" value = "szary">szary

        <br>
        <input type = "submit">

        </form>


        <?php

            if(isset($_GET['kolor'])){

    //echo "Zaznaczyłeś kolor ", $_GET['kolor'];
    echo "Zaznaczyłeś kolor  {$_GET['kolor']}";

}

        ?>
    </body>

</html>
