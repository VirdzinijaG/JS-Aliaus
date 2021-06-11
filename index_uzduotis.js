"use strict"

/*  
suskaiciuoti visu skaiciu nuo 0 iki 100, kurie dalinasi is 3 suma

atspausdinti visus pirminius skaicius intervale nuo 2 iki 100
*/



// suskaiciuoti visu skaiciu nuo 1 iki 100, kurie dalinasi is 3 suma

var skaicius = 1;
var suma = 0;

while (skaicius <= 100) {
    if (skaicius % 3 === 0) 
    suma = suma + skaicius;
    skaicius = skaicius + 1; 
} 
 console.log(suma); 


 // atspausdinti visus pirminius skaicius intervale nuo 2 iki 100 / skaicius kuris dalinasi tik iš savęs ir vieneto.

var skaicius1 = 2;
if (skaicius1 <= 100) {
    if (skaicius1 % 2 == 0 ){
        
        console.log(skaicius1);
    }
    if (skaicius1 % 3 == 0 ) {
console.log(skaicius1)
    }
    skaicius1 = skaicius1 + 1;

}




// var x = 100; // max skaicius iki kurio norime surasti prime
// for (var i = 2; i <= x; i++) { // for loop - var i=2 bus ivykdytas viena karta pries vykdant viso bloko operacija; i <= x - nustato kondicija vykdant bloko op; i++ - bus padaroma kiekviena karta po bloko operacijos (i++ - inkrementuoja po viena +1)
//     var isPrime = true;
//     for (var j = 2; j < i; j++) { 
//         if (i % j === 0 && i !== j) {
//             isPrime = false;
//         }
//     }
//     if (isPrime === true) {
//         console.log(i);
//     }
// }

