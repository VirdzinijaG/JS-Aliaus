"use strict"

// Funkcijos 

function suma(a,b) { // kintamasis suma, kuris rodo i objekta funkcija
    return a + b;
}

function sandauga(sk1, sk2) { // kintamasis sandauga, kuris rodo i objekta funkcija
    return sk1 * sk2;
}
function atimtis(s1, s2) { // kintamasis atimtia, kuris rodo i objekta funkcija
    return s1 - s2;
}
function skaiciuotuvas(pirmas, antras, veiksmas) { // kintamasis skaiciuotuvas, kuris rodo i objekta funkcija
    if (typeof veiksmas === "function") {
        return veiksmas(pirmas, antras);
    } else {
        console.log("nezinomas veiksmas");
    }
    return undefined;
}
let dalyba = function (a, b) { // galima sukurti funkcija ir taip // anonimine funkcija, funkcija neturi pavadinimo
    return a / b;
}; // cia ne funkcijos deklaravimas, o priskirimas
// dalyba = 7; meta klaida tokiu atveju

suma = atimtis; // kintamasis suma pakeista i atimtis kintamaji ir atliks nebe suma, o atminti

console.log(skaiciuotuvas(2,3, suma)); // 2 - pirmas, 3 - antras, suma - veiksmas
console.log(skaiciuotuvas(2,3, sandauga)); // 2 - pirmas, 3 - antras, sandauga - veiksmas
console.log(skaiciuotuvas(2,3,atimtis)); // 2 - pirmas, 3 - antras, atimtis - veiksmas
// perduodama nuoroda i funkcija
console.log(skaiciuotuvas(2,3,dalyba));


// typeof operatorius nurodo kas tai per reiksme
//  typeof rezultatas yra tekstas, grazina undefined, number, string, object, function

console.log(typeof dalyba);

// Objektai

let puodukas = {
    turis: 300,
    keikis: 100,
    gerimas: "arbata"

}
// sukuriamas kintamasis pavadinimu puodukas, jam priskiriamas objektas

// Tipai typeof
// Parodo reiksme

let undef;
let sk = 10;
let o = {};
let f = function() {};
let str = "tekstas";
let n = null; // null reiksme - nieko
let b = true;

console.log(typeof undef); // undefined
console.log(typeof sk); // number 
console.log(typeof o); // object
console.log(typeof f); // function 
console.log(typeof str); // string
console.log(typeof b); // boolean

console.log(typeof n); // atspausdino object // typeof null grazins object (javascript klaida)

if (typeof sk === "number") { // su typeof galima daryti palyginimus
    console.log(sk * sk);
}

// Funkcijos

function suma1(a,b, c, d) {
    console.log(a, typeof a);
    console.log(b, typeof b);
    console.log(c, typeof c);
    console.log("--------");
    let s = 0;
    if (typeof a === "number") {
        s += a;
    }
    if (typeof b === "number") {
        s += b;
    }
    if (typeof c === "number") {
        s += c;
    }
    if (typeof d === "number") {
        s += d;
    }
    return s;
}

console.log(suma1(1, 2, 3));
console.log(suma1(1,2)); // trecias elementas undefined ir atspausdina NaN - ne skaicius
console.log(suma1(1));
console.log(suma1("labas", 2, 3));
console.log(suma1(1,"labas", 3));
console.log(suma1(1, 2, "labas"));
console.log(suma1(1, 2, 3, 4));

// kintamasis arguments naudojamas funkcijose, arguments beveik kaip masyvas
function suma2() {
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number") {
            s += arguments[i]
        }
    }
    return s;
}
console.log(suma2(1, 2, 3));
console.log(suma2(1,2)); 
console.log(suma2(1));
console.log(suma2("labas", 2, 3));
console.log(suma2(1,"labas", 3));
console.log(suma2(1, 2, "labas"));
console.log(suma2(1, 2, 3, 4));
console.log(suma2(1, 2, 3, 4, 5, 6, 7, 8, 9, "dhjshhdhs", false));

function pasisveikinimas (vardas = "bevardis", pavarde = "bepavardis") { // bevardis, bepavardis yra default reiksme, kai yra undefined
    console.log(arguments); // arguments kintamasis delioja kaip masyva
   let str = "labas " + vardas + " " + pavarde;
   if (arguments.length > 2) {
       str += " titulai:"
   }
   for (let i = 2; i < arguments.length; i++) {
       str += " " + arguments[i]
   }
   console.log(str);
}

pasisveikinimas("Jonas", "Jonaitis");
pasisveikinimas("Jonas", "Jonaitis", "Imperatorius") // arguments delioja kaip masyva
pasisveikinimas("Jonas", "Jonaitis", "Imperatorius", "Kaune");
pasisveikinimas("Jonas", "Jonaitis", "Imperatorius", "Caras", "Valdovas");
pasisveikinimas("Jonas", undefined, "Imperatorius", "Caras", "Valdovas");
pasisveikinimas(undefined, undefined, "Imperatorius", "Caras", "Valdovas");


function pasisveikinimas1(zmogus) {
    console.log("Labas " + zmogus.vardas + " " + zmogus.pavarde);
    zmogus.jauPasveikintas = true;
}

let z = {
    vardas: "Jonas1",
    pavarde: "Jonaitis1"
}
pasisveikinimas1(z)
console.log(z);

// pasisveikinimas1({
//   vardas: "Jonas",
//   pavarde: "Jonaitis"
// })
// pasisveikinimas1(zmogus)

function skaicia(sk) {
    sk = sk * sk;
    console.log(sk);
}
let s = 10;
skaicia(s);
console.log(s);

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

let atsitiktinis = Math.random();
// sita funkcija grazina skaicius tarp 0 ir 1
//[0....1]

console.log(atsitiktinis);

let sveikasAts = Math.floor(Math.random() * 5 + 1); // math.floor padaro skaiciu be kablelio 
//[1....5.999999999]

console.log(sveikasAts);