"use strict"

// aritmetiniai operatoriai + - * /
// palyginimo operatoriai > < >= <=
// == ar lygu
// === ar lygu (strict)
// != ar nelygu 
// !== ar nelygu (strict)

/*
& - AND - IR; gali rasytis ir &&
| - OR - ARBA; gali rasytis ||
^ - XOR - (paturbintas)
! - NOT - ne


&	    TRUE	FALSE
TRUE	TRUE	FALSE
FALSE	FALSE	FALSE

|	    TRUE	FALSE
TRUE	TRUE	TRUE
FALSE	TRUE	FALSE


XOR (^)	TRUE	FALSE
TRUE	FALSE	TRUE
FALSE	TRUE	FALSE


! (not)	TRUE	FALSE

        FALSE	TRUE




*/

var sk1 = 0; // patikrinta dar su 5, -5, 55
 if (sk1 < 0) {
     console.log("neigiamas");
 } else if (sk1 === 0) {
     console.log("NULIS");
 }   else if (sk1 < 10) {
     console.log("mazas");
 } else if (sk1 < 100) {
     console.log("vidutinis");
 } else { 
     console.log("didelis");
 }


 var sk = 5;
 if (0 <= sk & sk <= 9);
 // 0 <= 5 
 // true
 //      5 <=9 maziau arba lygu
 //              true   
 //  true & true
 //   true
 // pradzioje vykde palyginimus tada & 
 console.log("vienazenklis")
 // & vykdo kai yra true ir true


var sk2 = -5;
 if (!(0 <= sk1 & sk1 <= 9));
 //  (0<= -5              )    pradzioje tikrino palyginima tada =& ir paskutini ! 
 //  (false                )
 //  (           -5 <=9    )
 //  (              true    )
 //  (     false & true    )
 //  (           false       )
 //  (         !false   pekaicia i true    )
 //  (            true       )
console.log("ne - vienazenklis");


var sk3 = 105;
if (0 > sk2 | sk2 > 9) {
    console.log("ne - vienazenklis");
}
//  galima rasyti ir taip vietoj naudojamo ! apvertimo


 /*  Ciklas kazkokiu veiksmu kartojimas

 while ciklas, kartoja, kol salyga buna false ir atspaudina rezultata, kol true vykdys komandas ir vis tikrins
 
 */

 // sudesiu visus skaicius nuo 1 iki 4 = 10/ bandyta su skaicius = 23 <= 5472 sudeda skaicius nuo 23 iki 5472 = 14973875
 var suma = 0;         // 1  3  6  10   
 var skaicius = 1;     // 2  3  4   5  
 while (skaicius <= 4) {  // true    2 true 3 true  4 true   5 false
     suma = suma + skaicius;  // 0+1   1+2    3 +3   6+4
     skaicius = skaicius + 1;   // 1+1   2+1   3+1    4+1
 }
 console.log(suma); // atspausdina 10


 // % - liekana
 // 11 % 3 = 2 liekana / 11/3= 9 liekana 2


 // israsomi visi skaiciai nuo 1 iki 100, kurie yra 5 arba 2 kartotinis (kas dalinasi is 5 ar 2)
 var ska = 1;
 while (ska <= 100) {
     if (ska % 5 === 0 || ska % 2 === 0) { // skaiciu padalinus is 5 liekana turi buti 0 / skaiciu padalinus is 2 liekana == 0, sitie skaiciai atvazduojami
         console.log(ska); // spaudsdina kai nera liekanos
     }
     ska = ska + 1; // prideti bet kuriuo atveju true ar false
 }


 // atspausdinti daugybos rezultatus 2*2=4 2*3=6 ir t.t.
 var nuo = 2;
 var iki = 4;

 var i = nuo;

 while (i <= iki) { // 2 maziau uz4 true vykdo bloka
     var j = nuo;  
     while (j <= iki) { // ciklas cikle, sukasi kol pasiekia false ir gryzta i pirma while
         console.log(i * j); // 2*2=4 2*3=6 2*4=8     3*2=6  3*3=9 3*4=12   4*2=8  4*3=12  4*4=16
         j = j + 1; // 2+1=3 3+1=4 4+1=5      2+1=3   3+1=4  4+1=5    2+1=3 3+1=4 4+1=5
     }
     i = i + 1; //  2+1=3   3+1=4  4+1=5
 } // i  3 4  5
   // j  3 4 5 3 5


   

 /*  
 suskaiciuoti visu skaiciu nuo 1 iki 100, kurie dalinasi is 3 suma

atspausdinti visus pirminius skaicius intervale nuo 2 iki 100
 

 
 */
