var pi = Math.PI;

console.log("TEST");
function liczPoleKola(r){
    return pi * Math.pow(r);
}
function liczObwodKola(r){
    return 2 * pi * r;
}
function liczObjetoscStozka(r, h){
    if(r < 0 && h < 0)
        return

    var objetosc = (Math.pow(r) * pi * h)/3;
    return objetosc;
}
function liczPoleStozka(r, l){
    var polePodstawy =  pi * Math.pow(r);
    var polePowBocznej = pi * r *l;

    return polePodstawy + polePowBocznej;
}

function test(){



}
