"use strict"

// funkcijos objektuose
let masina1 = { // masina1 reiksme objektas
    pavadinimas: "pirma",
    kelias: 0,
    greitis: 0,
    gazas: function(kiek) { // funkcija objekte // funkcija be vardo
        this.greitis += kiek; // this kintamasis, rodo i objekta su kuriuo siuo metu dirba
    }, // this.greitis yra sio objekto greitis, kuris pakeiciamas naudojant funkcija
    stabdis: function(kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        } // gazas ir stabdis reiksme funkcija
    }
};

let masina2 = { 
    pavadinimas: "antra",
    kelias: 0,
    greitis: 0,
    gazas: function(kiek) {
        this.greitis += kiek; // this - nuoroda i objekta
    },
    stabdis: function(kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    }
}

console.log(masina1);
console.log(masina2);

masina1.gazas(15); // funkcijos kvietimas // 15 bus reiksme funkcijos gazas (kiek)
masina2.gazas(3); 
console.log(masina1);
console.log(masina2);

// konstruktoriaus funkcija (sablonas)

function Masina(pavadinimas) { // konstruktoriaus funkcijos pavadinimas rasomas is didziosios raides
    this.pavadinimas = pavadinimas; 
    this.kelias = 0;
    this.greitis = 0;
    this.gazas = function(kiek) { 
        this.greitis += kiek;
    };
    this.stabdis = function(kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    }
}

let masina3 = new Masina("trecia"); // new sukuria nauja objekta pagal konstrukriaus funkcijos sablona
let masina4 = new Masina("ketvirta");
console.log(masina3);
console.log(masina4);
masina3.gazas(15); // kvieciama funkcija gazas
masina4.gazas(3);
console.log(masina3);
console.log(masina4);

// Prototype

console.log(Masina.prototype);

Masina.prototype.gazas = function(kiek) {
    this.greitis += kiek;
}

Masina.prototype.stabdis = function(kiek) {
    this.greitis -= kiek;
    if (this.greitis < 0) {
        this.greitis = 0;
    }
} // taip parasius galima istrinti is function Masina savybes gazas ir stabdis



console.log(Masina.prototype);
console.log(masina3);
console.log(masina4);