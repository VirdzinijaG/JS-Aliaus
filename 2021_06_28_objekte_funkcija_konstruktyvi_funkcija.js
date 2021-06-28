"use strict"

// funkcijos objektuose
let masina1 = {
    pavadinimas: "pirma",
    kelias: 0,
    greitis: 0,
    gazas: function(kiek) { // funkcija objekte
        this.greitis += kiek;
    },
    stabdis: function(kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
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

masina1.gazas(15);
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

