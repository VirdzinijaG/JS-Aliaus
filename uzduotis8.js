"use strict"

/* Yra 8 masinos
su savybemis :
 pavadinimas
  greitis: 0
   kelias: 0

   masinos lenktiniauja (ciklas)

   kiekvienos iteracijos metu: visos masinos gali pakeisti savo greiti 
   random skaicius 
   jei random < 0.2 - masina stabdo (t.y mazeja masinos greitis nuo 1...iki 5 (random))
   jei random < 0.7 - masina gazuoja (t.y masinos greitis 1....10 (random))
   priesingu atveju masinos greitis nesikeicia

   visos masinos pavaziuoja: per tiek, koks yra jos greitis

   lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000km

   reikia surusiuoti masinas pagal nuvaziuota kelia
    jei dvieju masinu kelias vienodas - pirmesne yra ta, kurios didesnis greitis

    atspausdinti turnyrine lentele

** kas 100 km spausdinti lyderi

    */


// let distancijosIlgisMax = 1000;

// let automobiliai = ["pirmas ", 2, 3, 4, 5, 6, 7, 8];

// let autoSavybes = {
//     pavadinimas: 0,
//     greitis: 0,
//     kelias: 0
// }

// let atsitiktinis = Math.random();

// let mazeja = Math.floor(Math.random() * 5 + 1)
// let dideja = Math.floor(Math.random() * 10 + 1)

// console.log("Pradzia");

// for (let i = 0; i < automobiliai.length; i++) {
//     if (autoSavybes.kelias < distancijosIlgisMax) {
//         automobiliai[i] = autoSavybes;
//     } else if (atsitiktinis < 0.2) {
//         automobiliai[i].greitis = automobiliai[i].greitis + mazeja;
//         automobiliai[i].kelias = automobiliai[i].kelias + automobiliai[i].greitis;
//     } else if (0.2 > atsitiktinis && atsitiktinis > 0.7) { 
//         automobiliai[i].greitis = automobiliai[i].greitis + dideja; 
//         automobiliai[i].kelias = automobiliai[i].kelias + automobiliai[i].greitis; 
//     } else if (atsitiktinis > 0.7) { 
//         automobiliai[i].greitis = automobiliai[i].greitis; 
//         automobiliai[i].kelias = automobiliai[i].kelias + automobiliai[i].greitis;
//     }
// }
// console.log(automobiliai);
// console.log(atsitiktinis);


// Masinytes lenktiniauja per pamoka parodytas

// Pirmas isplestas budas
const masinos = [ // masyve sukurti 8 objektai (8 masinos)
    {
    pavadinimas: "pirma",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "antra",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "trecia",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "kevirta",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "penkta",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "sesta",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "septinta",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "astunta",
    kelias: 0,
    greitis: 0
    }
   ];
    
   let lenktyniaujam = true;
   let checkPoint = 100; // tikrinimas kas 100 km
   do {
    // keiciam greiti
    for (let i = 0; i < masinos.length; i++) { // einama per visas masinas
    let keiciamGreiti = Math.random(); // atsitiktinis skaicius
    if (keiciamGreiti < 0.2) {
    masinos[i].greitis -= Math.floor(Math.random() * 5 + 1); // sumazinimas greitis 
    if (masinos[i].greitis < 0) { // jei greitis mazesnis uz 0
    masinos[i].greitis = 0; // masinos greitis tada 0
    }
    } else if (keiciamGreiti < 0.7) {
    masinos[i].greitis += Math.floor(Math.random() * 10 + 1); // padidinamas greitis
    }
    }
    // vaziuojam
    for (let i = 0; i < masinos.length; i++) {
    masinos[i].kelias += masinos[i].greitis; // koks greitis toks ir kelias
    }
    // nustatom, kuris dabar pirmauja
    let lyderis = 0;
    for (let i = 1; i < masinos.length; i++) {
    if (
    (masinos[i].kelias > masinos[lyderis].kelias) ||
    (masinos[i].kelias === masinos[lyderis].kelias &&
    masinos[i].greitis > masinos[lyderis].greitis)
    ) {
    lyderis = i;
    }
    }
    // jei kirto check point'a - pranesam
    if (masinos[lyderis].kelias > checkPoint) {
    console.log("Po " + checkPoint + " km. pirmauja:");
    console.log(masinos[lyderis]);
    checkPoint += 100;
    }
    // tikrinam ar kas kirto finiso linija
    for (let i = 0; i < masinos.length; i++) {
    if (masinos[i].kelias >= 1000) {
    lenktyniaujam = false;
    }
    }
   } while (lenktyniaujam);
    
   // rusiuojam masinas pagal nuvaziuota kelia
   for (let i = 0; i < masinos.length - 1; i++) {
    for (let j = i + 1; j < masinos.length; j++) {
    if (
    (masinos[i].kelias < masinos[j].kelias) ||
    (masinos[i].kelias === masinos[j].kelias && // jeigu kelias lygus
    masinos[i].greitis < masinos[j].greitis) // tada ziuroma pagal greiti
    ) {
    let tmp = masinos[i];
    masinos[i] = masinos[j];
    masinos[j] = tmp;
    }
    }
   }
   console.log(masinos);



   // antras budas 
   // siek tiek supaprastinta versija
   const masinos2 = [
    {
    pavadinimas: "pirma",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "antra",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "trecia",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "kevirta",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "penkta",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "sesta",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "septinta",
    kelias: 0,
    greitis: 0
    },
    {
    pavadinimas: "astunta",
    kelias: 0,
    greitis: 0
    }
   ];
    
   let checkPoint2 = 100;
   let lyderis2;
   do {
    // keiciam greiti ir vaziuojam
    for (let i = 0; i < masinos2.length; i++) {
    let keiciamGreiti = Math.random();
    if (keiciamGreiti < 0.2) {
    masinos2[i].greitis -= Math.floor(Math.random() * 5 + 1);
    if (masinos2[i].greitis < 0) {
    masinos2[i].greitis = 0;
    }
    } else if (keiciamGreiti < 0.7) {
    masinos2[i].greitis += Math.floor(Math.random() * 10 + 1);
    }
    masinos2[i].kelias += masinos2[i].greitis; // masinos greitis lygus keliui
    }
    // nustatom, kuris dabar pirmauja
    lyderis2 = 0;
    for (let i = 1; i < masinos2.length; i++) {
    if (
    (masinos2[i].kelias > masinos2[lyderis2].kelias) ||
    (masinos2[i].kelias === masinos2[lyderis2].kelias &&
    masinos2[i].greitis > masinos2[lyderis2].greitis)
    ) {
    lyderis2 = i;
    }
    }
    // jei kirto check point'a - pranesam
    if (masinos2[lyderis2].kelias > checkPoint2) {
    console.log("Po " + checkPoint2 + " km. pirmauja:");
    console.log(masinos2[lyderis2]);
    checkPoint2 += 100;
    }
   } while (masinos2[lyderis2].kelias < 1000);
    
   // rusiuojam
   for (let i = 0; i < masinos2.length - 1; i++) {
    for (let j = i + 1; j < masinos2.length; j++) {
    if (
    (masinos2[i].kelias < masinos2[j].kelias) ||
    (masinos2[i].kelias === masinos2[j].kelias &&
    masinos2[i].greitis < masinos2[j].greitis)
    ) {
    let tmp = masinos2[i];
    masinos2[i] = masinos2[j];
    masinos2[j] = tmp;
    }
    }
   }
   console.log(masinos2);




   // trecias budas
   // su konstruktoriaus funkcija

   function Masina(pavadinimas) { // parametras pavadinimas, skirtumas pavadinimuose skirtingi visi
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
    };
    this.vaziuojam = function() { // () be parametru
    this.kelias += this.greitis;
    };
    this.asLyderis = function(kitaMasina) {
    if (this.kelias > kitaMasina.kelias) {
    return true;
    } else if (this.kelias === kitaMasina.kelias && this.greitis > kitaMasina.greitis) {
    return true;
    }
    return false;
    }
   }
    
   const masinos3 = [ // objektai sukuriami pagal konstruktoriu, funkcija parasyta viena karta, nereikia atskirai ta pati rasytis 8 kartus
    new Masina("pirma"),
    new Masina("antra"),
    new Masina("trecia"),
    new Masina("kevirta"),
    new Masina("penkta"),
    new Masina("sesta"),
    new Masina("septinta"),
    new Masina("astunta")
   ];
    
   let checkPoint3 = 100;
   let lyderis3;
   do {
    // keiciam greiti ir vaziuojam
    for (let i = 0; i < masinos3.length; i++) {
    let keiciamGreiti = Math.random();
    if (keiciamGreiti < 0.2) {
    masinos3[i].stabdis(Math.floor(Math.random() * 5 + 1));
    } else if (keiciamGreiti < 0.7) {
    masinos3[i].gazas(Math.floor(Math.random() * 10 + 1));
    }
    masinos3[i].vaziuojam();
    }
    // nustatom, kuris dabar pirmauja
    lyderis3 = 0;
    for (let i = 1; i < masinos3.length; i++) {
    if (masinos3[i].asLyderis(masinos3[lyderis3])) {
    lyderis3 = i;
    }
    }
    // jei kirto check point'a - pranesam
    if (masinos3[lyderis3].kelias > checkPoint3) {
    console.log("Po " + checkPoint3 + " km. pirmauja:");
    console.log(masinos3[lyderis3]);
    checkPoint += 100;
    }
   } while (masinos3[lyderis3].kelias < 1000);
    
   // rusiuojam
   for (let i = 0; i < masinos3.length - 1; i++) {
    for (let j = i + 1; j < masinos3.length; j++) {
    if (
    !masinos3[i].asLyderis(masinos3[j]) // ! rusiuoja i priesinga puse
    ) {
    let tmp = masinos3[i];
    masinos3[i] = masinos3[j];
    masinos3[j] = tmp;
    }
    }
   }
   console.log(masinos3);