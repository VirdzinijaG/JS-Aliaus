"use strict" 

// operatorius ++, prideda per viena, labai panasus i +=1
// operatorius --, atima per viena

var sk = 3;
var kitas = 5 + sk++;
//              paima sk reiksme 3 ir atsimena
//              padidina sk 1-u -> sk:4 // atsakyme cosnsole.log sk bus 4, nes padidino 
//          5 + 3 / naudoja pirmine reiksme 3
//          5 + 3
//            8
//        i kitas padedam 8

var ska = 3;
var kitas1 = 5 + ++ska;
//               padidina ska 1-u -> ska:4
//               paima ska reiksme 4
//                5 + 4
//                 9
//              i kitas1 padeda 9


console.log(sk);
console.log(kitas);
console.log(kitas1);

var i = 1;

while (i <3) {
    console.log(i++);
    //          paimam reiksme i 1 ir atsimena     // paimama reiksme 2 i = 2 nes padidintas ir atsimena
    //          padidinam i vienetu -> 2          //  padiddinam 2 -> 3
    //          spausdinama reiksme 1 nes ja atsimena // spausdinama atsiminta reiksme 2
}

var d = 1;
while (d <3) {
    console.log(++d);
    //           padidinam reiksme i -> 2  // padiddinama reiksme 2 -> 3
    //           spausdinama reiksme 2    // spausdinama reiksme 2
}



var n = 3;

while (n > 0) {
    console.log(--n);
    //          pamazinama reiksme 3 vienetu 3 -> 2   //  pamazinama reiksme 2 -> 1   // pamazinama reiksme 1 -> 0
    //          spausdinama reiksme 2                 //  spausdinama reiksme 1       // spausdinama reiksme 0
}

var m = 3;
while (m > 0) {
    console.log(m--);
    //          paimama reiksme 3 ir atsimenama         // paimama reiksme 2          // paimama reiksme 1
    //          sumazinama reiksme vienetu 3 -> 2       // sumazinama reiksme 2 -> 1 // sumazinama reiksme 1 -> 0
    //          spausdinama reiksme 3, nes ji atsiminta // spausdinama 2             // spausdinama 1
}






var ski = 3;
var kitas2 = 10 - ++ski + ski++ - ++ski;
//                padidinam ski 1-u -> ski:4
//                paimam sk reiksme 4
//                         paimam ski reiksme 4 ir atsimena
//                         padidina ski 1-u -> ski:5
//                                  padidinam ski 1 -u -> 6
//                                  paimam ski reiksme 6 
//           10 - 4
//              6      + 4
//                 10 - 6
//                      4             




console.log(kitas2);


// Ciklas for 

// pirma dalis visada bus ivykdoma s=1
// antra dalis jei true tada vykdo trecia dali spausdina reiksme s 
// tada vkdoma ketvirta dalis s padidinamas 1
for (var s = 1; s < 4; s++){
    console.log(s);

}


/* UZDUOTIS
 var nuo = 1;
 var iki = 5;
daugybos lenetele su ciklais for */

/*  2UZDUOTIS
su ciklu for atspausdinti skaicius nuo 100 iki 1 kas 3
turi atspausdinti 100 97 94 91 ir t.t.
*/



// Kintamieji
// kintanaji deklaruojam su var
// kintamuju deklaravimas yra hoistinimas - perbega ir paziuri ar yra var, tada juos deklaruoja

console.log(skai); // meta undefined, nes reiksmes dar nerado/ vykdo programa nuo virsaus i apacia

var skai = 10;

console.log(skai); // cia jau atspausdino 10, nes priskirtas var skai = 10
