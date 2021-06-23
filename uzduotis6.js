"use strict"

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


// Fibonacci skaiciu sekos spausdinimas iki nurodytos reiksmes

function fib (sk1, sk2, max) {
    console.log(sk1);
    console.log(sk2);
    for (let i = 0; i < max; i++) { 
        let temp = sk1 + sk2;
        console.log(temp);
        sk1 = sk2;
        sk2 = temp;
    }
}
console.log(fib(1, 1, 20));

// Parodytas per pamoka



//  Parasyti funkcija labas(vardas, pavarde)
// jei paduotas ir vardas ir pavarde - spausdina: labas vardas pavarde
// jei paduotas tik vardas - spausdina: labas vardas
// jei nieko nepaduota - spausdina: labas nezinomas zmogaus
 
function labas(vardas, pavarde) {
    if (vardas, pavarde) {
    console.log("Labas, " + vardas + " " + pavarde);
}
    else if (vardas) {
        console.log("Labas, " + vardas);
    }
   else if  (vardas, pavarde !== 0) 
        console.log("Labas, nezinomas zmogau");
}

labas("Jonas", "Jonaitis");
labas("Petras");
labas();

// Parodytas per pamoka
function labas1(vardas, pavarde) {
    if (vardas !== undefined && pavarde !== undefined) {
    console.log("Labas, " + vardas + " " + pavarde);
}
    else if (vardas !== undefined) {
        console.log("Labas, " + vardas);
    }
   else
        console.log("Labas, nezinomas zmogau");
}
labas1("Antanas", "Antanaitis");
labas1("Ona");
labas1();