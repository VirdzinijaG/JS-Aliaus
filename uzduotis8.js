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

const masinos = [
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
        pavadinimas: "ketvirta",
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
let checkPoint = 100;

do {
    // keiciam greiti
    for (let i = 0; i < masinos.length; i++) {
        let keiciamGreiti = Math.random();
        if (keiciamGreiti < 0.2) {
            masinos[i].greitis -= Math.floor(Math.random() * 5 + 1);
            if (masinos[i] < 0) {
                masinos[i].greitis = 0;
            }
        } else if (keiciamGreiti < 0.7) {
            masinos[i] += Math.floor(Math.random() * 10 + 1)
        }
    }
    // vaziuojam
    for (let i = 0; i < masinos.length; i++) {
        masinos[i].kelias += masinos[i].greitis;
    }
    // komentatorius
    let lyderis = 0;
    if ((masinos[i].kelias > masinos[lyderis].kelias) || (masinos[i].kelias === masinos[lyderis].kelias && masinos[i].greitis < masinos[lyderis].greitis)) {
        lyderis = i;
    }

    // tikrinam ar kas kirto finiso linija
    for (let i = 0; i < masinos.length; i++) {
        if (masinos[i].kelias >= 1000) {
            lenktyniaujam = false;
        }
    }

} while (lenktyniaujam);
// masinu rusiavimas pagal nuvaziuota kelia
for (let i = 0; i < masinos.length - 1; i++) {
    for (let j = i + 1; j < masinos.length; j++) {
        if ((masinos[i].kelias < masinos[j].kelias) || (masinos[i].kelias === masinos[j].kelias && masinos[i].greitis < masinos[j].greitis)) {
            let tmp = masinos[i];
            masinos[i] = masinos[j];
            masinos[j] = tmp;
        }
    }
}

console.log(masinos);