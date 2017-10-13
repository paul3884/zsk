$(document).ready(function(){
    //$("tr:even").css("background-color", "#b2aaaa");
    //$("tr:odd").css("background-color", "#f7f0f0");

    $("#table1 tr:even").css("background-color", "#b20000");
    $("#table1 tr:odd").css("background-color", "#a06e6e");

    $("#table1 tr:first").css("background-color", "#82e231");
    $("#table1 tr:last").css("background-color", "#5a64de");

    $("#table1 tr:eq(3)").css("color", "#ffffff");
    $("#table1 td:eq(0)").css("color", "#ffffff");

    $("#table1 td:contains(MC)").css("color", "#25ff00");

    $("#widoczny").click(function(){
        $("#obraz").show(3200);
    })
    $("#niewidoczny").click(function(){
        $("#obraz").hide(3200);
    })
});
