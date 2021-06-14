"use strict"

// atspausdinti visus pirminius skaicius intervale nuo 2 iki 100 / mokytojo parodytas

var skaicius = 2;

while (skaicius <= 100) {
    var arPirminis = true;
    var atgal = skaicius - 1;
    while (atgal >= 2 && arPirminis) {
        if (skaicius % atgal === 0){
            arPirminis = false;
            
        }
        atgal = atgal - 1;
    }
    if (arPirminis) {
        console.log(skaicius);
    }
    skaicius = skaicius + 1;
}

/* skaicius: 2                          3              4
2 <= 100 true
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
    i = i + 1; // sutrumpinimas i +=1 prie i prideda 1 // parasius +4 patikrina kas ketvira 
}



/* 
+=  --->  prideda ir priskiria 
-=  --->  atima ir priskiria
*=  --->  daugina ir priskiria
/=  --->  dalina ir priskiria
%=  --->  liekana  ir priskiria
*/  



