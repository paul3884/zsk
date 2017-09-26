var f = "Fizz";
var b = "Buzz"

for(var i = 1; i <= 100; i++){


    if(i % 3 == 0){
        document.write(f + "<br>");

    }
    if(i % 5 == 0){
        document.write(b + "<br>");

    }
    if(i % 3 == 0  && i % 5 == 0){
        document.write(f+b + "<br>");

    }
    if(i % 3 != 0  && i % 5 != 0){
        document.write(i + "<br>");

    }

}
