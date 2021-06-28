" use strict"

// Faktorialas 
// 4! = 4 * 3 * 2 * 1  // 4 * 3!
// 3! = 3 * 2 * 1      // 3 * 2!
// 2! = 2 * 1          // 2 * 1!
// 1! = 1
// 0! = 0

// Rekursija kai funkcija iskviecia pati save // rekursine funkcija
// iskviesta funkcija sukuria nauja skaupa
// Rekursines funkcijos visada turi tureti isejima, kai funkcija grazina reiksme nekviedama pati saves
function faktorialas(sk) {
    if (sk < 0) {
        return -1;
    }
    if (sk === 0) {
        return 1;
    }
    let f = sk * faktorialas(sk - 1);
    return f;
}
console.log(faktorialas(4));
console.log(faktorialas(7));
console.log(faktorialas(-10)); // isves - 1, nes taip nurodyta salyga

// ne visos funkcijos privalo tureti return
function labas(vardas) { // funkcija be grazinimo return
    console.log("labas, " + vardas);
}

labas("Jonas");
labas("Petras");

function labas1(vardas, pavarde) {
    console.log("labas " + vardas + " " + pavarde);
}

labas1("Jonas", "Jonaitis");
labas1("Petras", "Pertraitis");
labas1("Antanas") // isves viena reiksme, kita reiksme bus undefined
labas1(); // nera reiksmiu nurodyta undefined undefined

labas1("Jonas", "Petraitis", 10, "!", false) // ziures tik pirmas dvi reiksmes, kitos nevykdomos // spausdins Jonas Petraitis


/* Parasyti rekursine funkcija 
Fibonacci skaiciu sekos spausdinimas iki nurodytos maksimalios reiksmes
1, 1, 20
1
1
2
3
5
8
13
function fib(sk1, sk2, max)

fib(1, 1, 1000)
 */

/* Parasyti funkcija labas(vardas, pavarde)
jei paduotas ir vardas ir pavarde - spausdina: labas vardas pavarde
jei paduotas tik vardas - spausdina: labas vardas
jei nieko nepaduota - spausdina: labas nezinomas zmogaus
 */