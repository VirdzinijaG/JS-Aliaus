"use strict"

// atspausdinti visus pirminius skaicius intervale nuo 2 iki 100 / mokytojo parodytas

var skaicius = 2;

while (skaicius <= 100) {
    var arPirminis = true; // pradzioj galvojam kad skaicius yra pirminis
    var atgal = skaicius - 1; // nuo skaiciaus eisiu zemyn
    while (atgal >= 2 && arPirminis) { // && arPirminis daugiau ciklo netikrina, kai skaicius jau tapo false // true ir false tampa false // true ir true tampa false ir vykdo salygas
        if (skaicius % atgal === 0){ // ar dalinasi be liekanos
            arPirminis = false; // jei dalinasi be liekanos arPirminis pasakem false, ne ne pirminis
            
        }
        atgal = atgal - 1;
    }
    if (arPirminis) { // jeigu true vykdys sekancia salyga console.log
        console.log(skaicius);
    }
    skaicius = skaicius + 1;
}

/* skaicius: 2                          3              4
2 <= 100 true                         3 <= 100 true
arPirminis: true                        true            true
atgal: skaicius - 1 /    2 - 1 = 1       2                3
atgal >=2 / 1 >= 2 false                 
console.log atspausdina 2                3


*/



// 1gigaH = 1000megaH = 1000000kiloH = 1000000000 H  / hercai H



// CIKLAI

var i = 1;

while (i <= 10) {
    console.log(i);
    i = i + 1; // sutrumpinimas i +=1 prie i prideda 1 // parasius +4 patikrina kas ketvira ir kas ketvirta atspausdina
    // i +=1 paima reiksme is i prideda 1 ir padeda reiksme i i 
}



/* 
+=  --->  prideda ir priskiria 
-=  --->  atima ir priskiria
*=  --->  daugina ir priskiria
/=  --->  dalina ir priskiria
%=  --->  liekana  ir priskiria
*/  


var a = 15;

do {    // do while pradzioje ivykdo, tada tikrina salygas jei ture eina toliau cikle, jei false nevykdo, bet viena karta tikrai bus atspausdinta reiksme
    console.log(a);
    a += 4;
   
}
 while (a <= 10);

 

