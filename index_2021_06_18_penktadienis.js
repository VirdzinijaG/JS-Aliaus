"use strict"

// masyvas - sarasas elementu, elementai numeruojami nuo 0
// masyvas javascripte yra objektas
// masyvas turi specialia savybe lenght (kiek elemetu yra masyve)
// masyve gali buti: number, string, boolean, objektas

let m = [5, 87, "labas", false, "!", 5]; // kintamajame m saugoma nuoroda // 6 elementai, nuo 0 iki 5

console.log(m[2]); // atspausdins labas // spausdins viena masyvo elementa

m[1] = true; // bus vietoj 87

console.log(m); // spausdinamas visas masyvas
console.log(m.length); // spausdins masyvo elementu kieki

let km = m; // du kintamieji i ta pati objekta, km toks pats kaip m

km[0] = "pakeiciau"; // vietoj 5 atspausdins pakeiciau

console.log(m); // spausdinamas visas masyvas su pakeistais elementais
console.log(km); // tokia pati informacija, nes toks pats objektas

let a = [5, 87, 5, 3]; 

for (let i = 0; i < a.length; i++) { // masyvo a kiekvienas skaicius isvedamas atskirai
    console.log(a[i]);
}
// i:0                 // 1                    // 2                    // 3                // 4 false
// i < m.lenght       // 1 < m.lenght          // 2 < m.lengt         // 3 < m.lenght
// m[0] elementas - 5 // m[1] elementas - 87  // m[2] elementas - 5   // m[3] elementas - 3
// i++ - 1           // i++ - 2              // i++ - 3               // i++ - 4


// masyvo a suskaiciuota suma
let suma = 0;
for (let s = 0; s < a.length; s++) {
    suma = suma + a[s];
}
console.log(suma);



/* let m = [5, 87, -5, 3, -4]
surusiuoti masyva didejimo tvarka ir atspausdinti
surusiuoti masyva mazejima tvarka ir atspausdinti
*/

// let st = [
//     [1, 2, 3, 5, 3, -4, 2],
//     [4, 5, 6, 10, 11, 12],
//     [7, 8, 9, 2, 6, -3, 67],
//     [7, 8, 9, -12, 3, -18]
//     ];
    /*
    atspausdinti kiekvienos eilutes elementu vidurki
    atspausdinti visu elementu vidurki
    */


let k = [5, 87, -5, 3, -4]; // isrinkti pati didziausia skaiciu

let max = k[0];

for (let n = 1; n < k.length; n++) {
    if (k[n] > max) {
        max = k[n];
    }
}
console.log(max); // masyvo k didziausias elementas

// kintamuju apkeitimas vietomis
let e = 5; 
let u = 10;

let s = e;  // sukuriamas naujas kintamasis s, kurio reiksme priskiriama e - 5
e = u;     // e priskiriama u reiksme - 10
u = s;     // u priskiriama s reiksme  - 5

console.log(e); // e dabar 10
console.log(u); // u dabar 5



/* 0 1 2
 0 1 2 3
 1 4 5 6
 2 7 8 9
*/
// masyvas masyve
let st = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(st); //atspausdinamas visas masyvas
console.log(st[1]); // atspausdinamas masyvo 1 elementas
console.log(st[1][2]); // atspausdinamas masyvo pirmo elemento 2 elementas

let st1 = [
    [[1,2],3], // masyvo masyve masyvas
    [4,5,6],
    [7,8,9]
]
console.log(st1);


// atspausdinti kiekviena masyvo elementa atskirai
let st2 = [
    [1, 2, 3],
    [4, 5, 6, 10, 11, 12],
    [7, 8, 9],
    [7, 8, 9]
]

for ( let p = 0; p < st2.length; p++){
    for (let j = 0; j < st2[p].length; j++) {
        console.log(st2[p][j]);
    }

}