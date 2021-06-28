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

let distancijosIlgisMax = 1000;

let automobiliai = ["pirmas ", 2, 3, 4, 5, 6, 7, 8];

let autoSavybes = {
    pavadinimas: 0,
    greitis: 0,
    kelias: 0
}

let atsitiktinis = Math.random();

let mazeja = Math.floor(Math.random() * 5 + 1)
let dideja = Math.floor(Math.random() * 5 + 1)

console.log("Pradzia");

for (let i = 0; i < automobiliai.length; i++) {
    if (autoSavybes.kelias < distancijosIlgisMax) {
        automobiliai[i] = autoSavybes;
    } else if (atsitiktinis < 0.2) {
        automobiliai[i].greitis = automobiliai[i].greitis + mazeja;
        automobiliai[i].kelias = automobiliai[i].kelias + automobiliai[i].greitis;
    } else if (0.2 > atsitiktinis && atsitiktinis > 0.7) { 
        automobiliai[i].greitis = automobiliai[i].greitis + dideja; 
        automobiliai[i].kelias = automobiliai[i].kelias + automobiliai[i].greitis; 
    } else if (atsitiktinis > 0.7) { 
        automobiliai[i].greitis = automobiliai[i].greitis; 
        automobiliai[i].kelias = automobiliai[i].kelias + automobiliai[i].greitis;
    }
}
console.log(automobiliai);
console.log(atsitiktinis);



