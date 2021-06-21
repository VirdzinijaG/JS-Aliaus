"use strict"

/*  let m = [1, 2, 3, 4, 5]
let rez = [
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
]; 

pakeisti reiksmes pirma eilute 1, 2, 3, 4, 5
antra eilute 2, 3, 4, 5, 1
trecia eilute 3 4 5 1 2
ketvirta eilute 4 5 1 2 3
penkta eilute 5 1 2 3 4

conssole.log (rez);
*/

/* pakeisti reiksmes i 
 1 2 3 4 5
 5 1 2 3 4
 4 5 1 2 3
 3 4 5 1 2 
 2 3 4 5 1

 console.log (rez)
*/


// Funkcijos 

let kamuoliukai = [3, 5.4, 2.3, 4.9, 0.1, 0.23];

for (let i = 0; i < kamuoliukai.length; i++) {
console.log(turis(kamuoliukai[i]));
}

console.log(turis);
console.log(turis.toString());

function turis(r) {
let t = 4 * 3.14 * r * r * r / 3;
return t;
}

let didelisKamuolys = turis(945.78)
console.log(didelisKamuolys);


function suma (a, b) {
    let s = a + b;
    return s;
}

let sk1 = suma(2,3);

console.log(sk1);

let sk2 = suma(10, 15);
console.log(sk2);


function didesnioSkaiciausKvadratas (a, b) {
    let kv;
    if (a > b) {
        kv = a * a;
    } else {
        kv = b * b;
    }
    return kv;
}

let dsk = didesnioSkaiciausKvadratas(5,3);
console.log(dsk);


let m1 = [1, 2, 3, 4, 5];
let bubu = [65, 78, -2, 4, 7];
let meme = [165, 8, 2, -4, 17];
let oj = [65, 45, 11];
let ah = [0.1, 0.2, -1.2];


// didziausias skaicius masyve, salyga nurodyta viename masyve
    let max = m1[0];
    for (let x = 1; x < m1.length; x++) {
        if (m1[x] > max) {
            max = m1[x];
        }
    }
console.log(max);

// didziausias skaicius su funkcija masyvuose, viena funkcija tinkama keliems masyvams, isvedant console.log

function didesnisSk (puokste) {
    let max = puokste[0];
    for (let x = 1; x < puokste.length; x++) {
        if (puokste[x] > max) {
            max = puokste[x];
        }
    }
return max;
}

// kiekvieno masyvo atvaizdavime kvieciama funkcija, kuri parodo didziausia jo skaiciu 
console.log(didesnisSk(m1));
console.log(didesnisSk(bubu));
console.log(didesnisSk(meme));
console.log(didesnisSk(oj));
console.log(didesnisSk(ah));

/*  atspausdinti visu masyvu skaiciu vidurki 
let m1 = [1, 2, 3, 4, 5];
let bubu = [65, 78, -2, 4, 7];
let meme = [165, 8, 2, -4, 17];
let oj = [65, 45, 11];
let ah = [0.1, 0.2, -1.2];
*/
