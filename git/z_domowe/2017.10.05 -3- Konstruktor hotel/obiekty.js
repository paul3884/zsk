

function Hotel(nazwa,pokoje,zarezerwowanePokoje,silownia,basen,rodzajPokoju){
    this.nazwa = nazwa;
    this.pokoje = pokoje;
    this.zarezerwowanePokoje = zarezerwowanePokoje;
    this.silownia = silownia;
    this.basen = basen;
    this.rodzajPokoju = rodzajPokoju;
    this.wolnePokoje = function(){
        return this.pokoje - this.zarezerwowanePokoje;
    }
    this.wyswietl = function(){
        return new Array('Nazwa: ' + this.nazwa,'Liczba pokoi: ' + this.pokoje, 'Pokoje zarezerwowane: ' + this.zarezerwowanePokoje, 'Czy jest siłownia: ' + this.silownia, 'Czy jest basen: ' + this.basen, 'Rodzaje pokojów: ' + this.rodzajPokoju, 'Wolne pokoje: ' + this.wolnePokoje());



        ;
    }
}

var HotelLech = new Hotel('Lech',100,30,true,false, ['jednoosobowy','apartament']);

var hotelInformacje = HotelLech.wyswietl();

for(var i= 0; i < hotelInformacje.length; i ++){
    document.write(hotelInformacje[i] + "<br>");
}




//zmienic metode wyswietl z konstruktora hotel, zastosuj tablice do wyswietlania wartosci









