"use strict"

// let
// const 
// let ir const kintamieji nera hoistinami ir atsiranda tik tada, kai ateina ju laikas\
// var kintamasis yra hoistinamas ir iskart deklaruojamas pagrindiniame skaupe

let naujas = 2;
console.log(naujas);

naujas = naujas + 5;
console.log(naujas);

const konstanta = 15;
console.log(konstanta);

// konstanta +=3;   const reiksmes negalima pakeist, mes klaida
// console.log(konstanta);

console.log("Pradzia");
{
    sk = 3; // del let mestu klaida, nes kintamojo dar nera, reiketu rasyt let sk = 3;
    console.log("komanda bloke", sk);
    {
        var sk; // let atveju kintamojo sk nedeklaruotu 
        console.log("komanda vidiniam bloke");
        sk++;
        console.log("komanda 2 vidinam bloke", sk);
    }
    sk = 15;
    console.log("kita komanda bloke", sk);
}
console.log("Pabaiga");
// galima rasytiti be {} bloko, rezultatas butu toks pats
// let ir const kintamieji gyvuoja tik nurodytame bloke, blokas dar kitaip vadinamas skaupas, nuo deklaravimo pradzios iki savo skaupo pabaigos
// su let negalima deklaruoti kintamojo su tuo paciu pavadinimu, bet skirtingose skaupose galimas 

let i = 1;
while (i < 3) {
    //let i = 7; // nurodzius tokia salyga, uzsisuks ciklas ir spausdins iki begalybes ir daugins vien 7 * 5, nepadidins po viena, nes kitas skaupas bus
    let k = 5;
    console.log(i++ * k);
}
console.log(i);
//console.log(k); mes klaida nes k nurodytas kitame skaupe, su var atspausdintu, nes jis yra hoistinamas ir nuo pat pradziu deklaruojamas
//

// do {
//     let a = 1;
//     let b = 5;
//     console.log(a++ * b);
// } while (a < 3);
// console.log(a);
// atspausdins tik 5 nes netures is ko atlikti while, nes let kitame skaupe
// jei let a = 1 butu virs do tada atliks

for (let c = 1; c < 3; c++){
    let c = 7;
    let d = 5;
    console.log(c * d);
}
// ciklas for turi savo skaupa