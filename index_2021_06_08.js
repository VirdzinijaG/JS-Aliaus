"use strict";  //kol kas neidomu ka reiskia
var sk1; // cia deklaravau kintamaji sk1
var sk2; // cia deklaravay kintamaji sk2

sk1 = 5; // kintamuju nurodytos reiksmes
sk2 = 7;
var sk3 = 4;
sk3 = 2;            // nurodzius nauja reiksme sk3 matomas galutis rezultatas
// var neberasomas nes kintamasis jau yra nurodyta, tik reiksme nauja nurodyta
var rez;

rez = sk1 + sk2;
//     5   +  7
/* pasizuriu kas yra saugoma sk1 ->5 
pasiziuriu kas yra saugoma sk2 ->7
atliekama sudetis 6+7=12
12 -> rez
*/


console.log(rez);
// atspausdina i ekrana skaiciu 12 


/* Operatoriai :
var     kintamojo deklaravimas
=       reiksmes priskirimas
+       sudetis
-       atimtis
/       dalyba
*       daugyba
*/
rez = rez / sk3;
/* paima reiksme is rez ->12
    paima reiksme is sk3 -> 4
    padalinam 12 / 4 = 3
    padedam reiksme i rez
*/
console.log(rez);
rez = sk1 + sk2 / sk3;
/*            7 /  2
                3.5
        5  +   3.5
            8.5
*/
console.log(rez);

rez = sk1 + sk2 / sk3 * sk1;
console.log(rez);
/* 
/ 15 precence  jei yra operatotiai kurie turi vienonada pirmuma(Precedence) tada ziurima i Associativity, kur nurodama einama nuo left to right ar right to left
* 15 precence
+ 14 precence
= 3 precence
*/