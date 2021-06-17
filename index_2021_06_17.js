"use strict"

// let ir const nera hoistinami
// jie pradeda vykt nuo savo skaupo pradzios 

// object kitnamojo tipas

let puodukas = {
    turis: 300,
    kiekis: 200,
    spalva: "rudas"
};


puodukas.kiekis -= 50;
console.log(puodukas.kiekis);
console.log(puodukas.spalva);


let tasPatsPuodukas = puodukas; // jo reiksme yra let puodukas, ima objekto savybes
tasPatsPuodukas.spalva ="zalias" // galima keisti tiek per puodukas, tiek per tasPatasPuodukas
tasPatsPuodukas.kiekis += 100;

console.log(puodukas.spalva);
console.log(puodukas.kiekis);

console.log(puodukas);
