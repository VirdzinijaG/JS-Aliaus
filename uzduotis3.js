/* UZDUOTIS
 var nuo = 1;
 var iki = 5;
daugybos lenetele su ciklais for */

for (var a = 1; a <= 5; a++) {
    for (var j = 1; j <= 5; j++) {
        console.log(a * j)
    }

}

// priskirta kintamojo reiksme a=1 1 kad pradeda nuo 1 
// a palyginamas su maziau lygu 5/ ciklas iki 5
// prie a pridedama po 1 po salygos
// sukuriamas kintamasis j=1 pradeda nuo 1, su siuo kintamuoju daugins kintamaji a
// j palyganams maziau lygy 5/ ciklas iki/ iki kiek daugins
// prie j pridedama po 1 po salygos
// isvedamas atsakymas a ir j sandaugos ataskymas


/* 1*1=1 1*2= 2 1*3=3 1*4=4 1*5=5
2*1=2 2*2=4 2*3=6 2*4=8 2*5= 10
3*1=3 3*2=6 3*3=9 3*4=12 3*5=15
4*1= 4 4*2=8 4*3=12 4*4=16 4*5=20
5*1=5 5*2=10 5*3=15 5*4=20 5*5=25
*/






/*  2UZDUOTIS
su ciklu for atspausdinti skaicius nuo 100 iki 1 kas 3
turi atspausdinti 100 97 94 91 ir t.t.
*/
for (var i = 100; i >= 1; i -= 3) {
    
    console.log(i);
}
// paimtas skaicius 100 prilygintas daugiau lygu 1 ir spausdina reiksme i, -=3 tikrina kas trecia