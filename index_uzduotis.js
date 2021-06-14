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

 var nuo = 2;
 var iki = 100;
 var dd = 2;
 var tt = 3;
 var pp = 5;
 var ss = 7;
 var cz = ss + 1;
 console.log(dd);
 console.log(tt);
 console.log(pp);
 console.log(ss);
 while (cz <= 100) {
     if(cz / cz === 1 && cz % dd !== 0 && cz % tt !== 0 && cz % pp !== 0 && cz % ss !== 0) {
         console.log(cz);
     }
        cz = cz + 1;
 }
 console.log("pabaiga");
   





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

