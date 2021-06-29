"use strict"

// Konstruktoriaus funkcija

"use strict";

function Puodukas (spalva, maxTuris) { // konstruktorius puodukas
    this.spalva = spalva;
    this.kiekis = 0;
    this.maxTuris = maxTuris;
}

Puodukas.prototype.ipilk = function (kiek) {
    if (kiek <= 0) {
        console.log("Ar zinai, ka darai?");
        return;
    }
    this.kiekis += kiek;
    if (this.kiekis > this.maxTuris) {
        console.log("Ant kelniu issipyle " + (this.kiekis - this.maxTuris));
        this.kiekis = this.maxTuris;
    } else {
        console.log("Sekmingai ipylem " + kiek + ". Liko laisvos vietos: " + (this.maxTuris - this.kiekis));
    }
}

Puodukas.prototype.isgerk = function (kiek) {
    if (kiek < 0) {
        console.log("Nespjaudyk i puoduka");
        return;
    }
    if (kiek === 0) {
        console.log("Tai gersim, ar akis vartysim?");
        return;
    }
    this.kiekis -= kiek;
    if (this.kiekis < 0) {
        console.log("Isgerem tik " + (this.kiekis + kiek));
        this.kiekis = 0;
    } else {
        console.log("Sekmingai isgerem " + kiek + ". Liko gerimo: " + this.kiekis);
    }
}

function Termosas(spalva, maxTuris) { // konstruktorius termosas
    Puodukas.apply(this, arguments); // paveldimas funkcionalumas
    this.temp = 20;
}

Termosas.prototype = Object.create(Puodukas.prototype); // sukuria nauja objekta kurio __proto__ yra puodukas prototype(nuoroda i objekta)
Termosas.prototype.constructor = Termosas; 

Termosas.prototype.pasildyk = function(kiek) {
    this.temp += kiek;
}

Termosas.prototype.atvesink = function(kiek) {
    this.temp -= kiek;
}


const t1 = new Termosas("Zalias", 1000); // sukuriamas objektas pagal konstruktoriu 
// operatorius new pradzioje sukuria nauja tuscia objekta ir kviecia funkcija(Termosas)

t1.ipilk(500);
t1.pasildyk(50);
console.log(t1);


// Kiekvienas „JavaScript“ objektas turi specialią ypatybę (__proto__), kuri nurodo kitą objektą, kuris yra jo prototipas. 
// Objektas paveldi prototipo savybes ir metodus.