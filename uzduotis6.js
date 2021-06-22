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


// Finonacci skaiciu sekos spausdinimas 

// function fib (sk1, sk2, max) {
// //    if (sk1 === 0) {
// //        return 1;
// //    }
// //    if (sk2 < sk1) {
// //        return sk2;
// // }
// if (fib[sk1 -1] + fib[sk2 - 2] <= max){
//     return (fib[sk1 -1] + fib[sk2 - 2]), sk1++, sk2++;
// }
// return fib(sk1 - 1) + fib(sk2 - 2);
// }

// console.log(fib(1, 1, 1000));


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