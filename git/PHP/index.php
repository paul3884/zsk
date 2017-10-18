<!doctype html>
<html>
    <head>

        <title>Lekcja 1</title>
        <meta charset="utf-8">

    </head>
    <body>

        <?php //znacznik kanoniczny

            //echo "4TE"; wyświetla łańcuch znaków
            //echo ("4TE"); wyświetla łańcuch znaków
        ?>

        <?
        //znacznik typu SGML
        //Tylko z włączonym 'short_open_tag w php.ini

        //echo "Witaj świecie";

        //komentarz liniowy

        # komentarz jednoliniowy uniksowy

        /*komentarz blokowy*/

        //Wyświetlanie informacji

        echo ("wyświetlam<br>");
        echo ('apostrof<br>');
        echo 'tekst<br>';
        echo "xd<br>";
        echo 18;
        echo "<br>Masz ", 18, " lat";
        echo "<h2>Nagłówek drugiego stopnia</h2>";
        echo "<h1 style= \"color: blue\">Test</h1>";
        echo '<h1 style= "color: blue">Test</h1>';


        //Bardziej skomplikowane wyświetlanie
        //Nie można rozbijać przecinkami jak w [echo]

        print "ZSK";



        ?>

        <!--Znacznik typu ASP
        <%

        %>

        Znacznik skryptów HTML, nie działa w PHP7
        <script language = "php"></script>-->

    </body>



</html>


