"use strict"

// Promise 
//Funkcija turi buti su dviem parametrais
// Parametrus galima uzsivadinti ivairiai, bet dazniausiai vadinami resolve ir reject
// Kai promise susikuria jo busena pradzioje buna pending (laukia)
// Kitos busenos resolve, reject


let p = new Promise((resolve, reject) => {  // kuriamas naujas objektas su Promise funkcija
    console.log("start promise function");
    setTimeout(() => {
          if (Math.random() > 0.5) { // tikimybe 50 proc
        console.log("resolving promise");
        resolve("resolve value"); // galima nurodyti su kokia reiksme buvo patvirtintas
    } else {
        console.log("rejecting promise");
        reject("reject value"); // galima nurodyti su kokia reiksme buvo atmestas
    }
    }, 10);
    console.log("finish promise function");
});
console.log(p);

// promise po to turi funkcija then
// kur yra du parametrai ir abu parametrai jei yra pateikiami turi buti funkcijos
// i then galima rasyti viena arba dvi funkcijas
p.then(
    value => { // jei resolve vykdo value
        console.log("promise was resolved with value " + value);
        return "new resolve value"
    }, 
    reason => { // jei reject vykdo reason
        console.log("promise was rejected with value " + reason);
        return "new reject value"
    }
    
) .then (
    v => {
        console.log("p2 resolved with: " + v);
    }
);

console.log("program finished");
