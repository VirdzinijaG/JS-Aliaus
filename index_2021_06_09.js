"use strict"
//kintamojo tipai
// undefind - kai kintamasis neturi jokios reiksmes
// number - skaiciai
// string - tekstas
// boolean - specialus tipas, kuris turi dvi reiksmes true arba false


/* 
\\ - tai yra simbolis \
\' - tai yra simbolis '
\"" - tai yra simbolis ""
\t - tai yra TAB (kodas 09)
\n - LF line feed (kodas 0A arba 10)
\r - CR carridge return (kodas 0D arba 13)
\u - xxxx sesioliktainis simbolio kodas
*/



var tekstas = "cia yra tekstas"; // string kintamojo tipas tekstas
var kitas = 'tekstas su kitom kabutem';
var kabutes = 'cia yra "specialus" tekstas'; // taip galim iterpti "" kabutes, jei norim, kad jos matytusi
var simbolis = "cia \\ yra \"\'specialus'\"\ tekstas";
// norint iterpti simboli, kad butu teksto viduje \ rasoma \\
var kitaeilute = "cia \\ yra \"\'specialus'\"\ tek\r\nstas"; // windows naudojama \r\n vieinoj eilutej bus tek, kitoje stas, perkelia is naujos eilutes
var tab = "cia y\tr\ta tekstas" // \t iterpia tab elementa, pasidaro tarpai
var simbolis1 = "cia yra tekstas \u4EFB"; // iterpiamas kinietiskas simbolis, naudojant koda u - turi buti simbolio kodas, sesioliktainis skaitmuo

console.log(tekstas);
console.log(kitas);
console.log(kabutes);
console.log(simbolis);
console.log(kitaeilute);
console.log(tab);
console.log(simbolis1);



var s1 = "15"; // mato kaip teksta
var s2 = "5";

console.log(s1 + s2); // gavosi 155, susidejo kaip tekstas, nes naudojamos kabutes
        //"15" + "5"    // apjungti du string
var sk1 = 15;
var sk2 = 5;

console.log(sk1 + sk2);

console.log(sk1 + sk2 + s1 + s2); // bus skaiciaus suma ir tekstas 20155
        //  15 + 5 
        //      20 + "15"
        //      "20" + "15"
        //      "2015" + "5"
        //      "20155"
// jei yra nors vienas strig, skaicius pavers string

console.log("" + sk1 + sk2 + s1 + s2); // "" tekstas, kuriame nera nei vieno simbolio
         // "" + 15
         //  "" + "15"
         //     "15"    + 5
         //     "15"    + "5"
         //         "155" + "15"
         //            "15515" + "5"
         //             "155155"
console.log(s1 + s2 + sk1 + sk2); // skaiciavimo jau netliks, nes skaicius pavers i string



var b = true; // true false naudojama loginems operacijoms
var b1 = false;

// operatoriai // arba true arba false
// > daugiau
// < maziau
// >= daugiau arba lygu
// <= maziau arba lygu 

var sk1 = 55;
if (sk1 > 10) {  // jei true vykdys sita komanda, jei false nevykdo // blokui dedamos kabutes {}
    console.log("didelis");
    sk1 = sk1 * 10;
    console.log(sk1);
}

else {                  // naudoja jei if reiksme false
    console.log("mazas");
}
console.log("pabaiga");


/* 
0000 0 0
0001 1 1
0010 2 2
0011 3 3
0100 4 4
0101 5 5
0110 6 6
0111 7 7
1000 8 8
1001 9 9
1010 10 A
1011 11 B
1100 12 C
1101 13 D
1110 14 E
1111 15 F


 dvejataine, desimtaine, sesioliktaine sistema

E - 14 sesioliktaineje sistemoje, 1110 dvejataineje sistemoje
6C - 0110 1100 dvejataineje sistemoje lygus

5F3C tai sesioliktaineje sistemoje
5 * 16^3 + 15 * 16^2 + 3 * 16^1 + 12 * 16^0  = 24380(5F3C parasyta desimtaineje sistemoje)
0101 1111 0011 1100 (5F3C parasyta dvejataineje sistemoje)

0100011101001110 is dvejaitenes i sesioliktaine pavertsi, imti po keturis skaicius ir ziureti reiksme 
0100 0111 0100 1110 = 474E
*/

var tekstas1 = "Labas";
tekstas1 = tekstas1 + " pasauli"; // tekstas gali prideti teksta

console.log(tekstas1);