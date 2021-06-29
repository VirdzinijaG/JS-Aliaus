"use strict"

// sukurti puoduko konstruktoriu
 
// kiekvienas puodukas turi tureti spalva, kieki ir max turi
 
// puodukai turi moketi:
// isgerti(kiek) - negalima isgerti daugiau negu yra puoduke
// ipilti(kiek) - negalima, kad puoduke butu daugiau negu telpa
 
// sukurti kelis puodukus
// ir ipilti, isgerti ir paziureti, kaip tai veikia

function Puodukas(spalva, turis) {
    this.spalva = spalva;
    this.kiekis = 0;
    this.turis = turis 

}

let puodukas1 = new Puodukas("rudas", 350);
console.log(puodukas1);

let puodukas2 = new Puodukas("juodas", 200);
console.log(puodukas2);

let puodukas3 = new Puodukas("raudonas", 500);
console.log(puodukas3);

Puodukas.prototype.iplik = function(kiek) {
    if (kiek < 0) {
        return;
    }
    this.kiekis += kiek;
    if (this.kiekis > this.turis){
        this.kiekis = this.turis;
    }
};
Puodukas.prototype.isgerk = function(kiek) {
    if (kiek < 0) {
        return;
    }
    this.kiekis -= kiek;
    if (this.kiekis < 0){
        this.kiekis = 0;
    }
};

puodukas1.iplik(500);
console.log(puodukas1);

puodukas1.isgerk(200);
console.log(puodukas1);

puodukas2.iplik(180);
console.log(puodukas2);

puodukas2.isgerk(70);
console.log(puodukas2);

puodukas3.iplik(60);
console.log(puodukas3);

puodukas3.isgerk(100);
console.log(puodukas3);



// Parodytas per pamoka 

function Puodelis1 (spalva, maxTuris) {
    this.spalva = spalva;
    this.kiekis = 0;
    this.maxTuris = maxTuris;
   }
    
   Puodelis1.prototype.ipilti = function (kiek) {
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
    
   Puodelis1.prototype.isgerti = function (kiek) {
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
    
   const puodelis1 = new Puodelis1("Geltonas", 300);
   const puodelis2 = new Puodelis1("Baltas", 200);
    
   puodelis1.ipilti(250);
   puodelis1.ipilti(250);
   puodelis1.ipilti(-10);
   puodelis1.isgerti(-10);
   puodelis1.isgerti(0);
   puodelis1.isgerti(100);
   puodelis1.isgerti(555);
   puodelis1.isgerti(100);
   console.log(puodelis1);