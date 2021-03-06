"use strict"

/*  let m = [1, 2, 3, 4, 5]
let rez = [
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
]; 

pakeisti reiksmes pirma eilute 1, 2, 3, 4, 5
antra eilute 2, 3, 4, 5, 1
trecia eilute 3 4 5 1 2
ketvirta eilute 4 5 1 2 3
penkta eilute 5 1 2 3 4

conssole.log (rez);
*/

/* pakeisti reiksmes i 
 1 2 3 4 5
 5 1 2 3 4
 4 5 1 2 3
 3 4 5 1 2 
 2 3 4 5 1

 console.log (rez)
*/

/*  atspausdinti visu masyvu skaiciu vidurki 
let m1 = [1, 2, 3, 4, 5];
let bubu = [65, 78, -2, 4, 7];
let meme = [165, 8, 2, -4, 17];
let oj = [65, 45, 11];
let ah = [0.1, 0.2, -1.2];
*/

// Atspausdinti masyvu skaiciu vidurki

let m1 = [1, 2, 3, 4, 5];
let bubu = [65, 78, -2, 4, 7];
let meme = [165, 8, 2, -4, 17];
let oj = [65, 45, 11];
let ah = [0.1, 0.2, -1.2];

function vidurkis(masyvoVidurkis){
    let suma = 0;
    let vid = 0;
  for (let i = 0; i < masyvoVidurkis.length; i++) {
      suma = suma + masyvoVidurkis[i];
      vid = suma / masyvoVidurkis.length;
      } 
  return vid;
}
console.log(vidurkis(m1));
console.log(vidurkis(bubu));
console.log(vidurkis(meme));
console.log(vidurkis(oj));
console.log(vidurkis(ah)); 


// Masyvo vidurkiai parodyta pamokoje
function vidurkis(masyvoVidurkis){
  let suma = 0;
  let vid = 0;
for (let i = 0; i < masyvoVidurkis.length; i++) {
    suma = suma + masyvoVidurkis[i];
    } 
    vid = suma / masyvoVidurkis.length; // vidurkis apskaiciuojamas kai gaunama visa suma
return vid;
}
console.log(vidurkis(m1));
console.log(vidurkis(bubu));
console.log(vidurkis(meme));
console.log(vidurkis(oj));
console.log(vidurkis(ah)); 



// pakeisti reiksmes i
// pirma eilute 1, 2, 3, 4, 5
// antra eilute 2, 3, 4, 5, 1
// trecia eilute 3 4 5 1 2
// ketvirta eilute 4 5 1 2 3
// penkta eilute 5 1 2 3 4

let m = [1, 2, 3, 4, 5]
let rez = [
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
]; 

for (let y = 0; y < rez.length; y++) {
  for (let x = 0; x < rez[y].length; x++) {
    rez[y][x] = m[(x + y) % m.length]
  }
}
// y: 0
// y < 5  true
// x: 0
// x < 5
// rez 0 0 
// m 0 
console.log(rez);


// pakeisti reiksmes i 
// 1 2 3 4 5
// 5 1 2 3 4
// 4 5 1 2 3
// 3 4 5 1 2 
// 2 3 4 5 1

for (let y = 0; y < rez.length; y++) {
  for (let x = 0; x < rez[y].length; x++) {
    rez[y][(x + y) % m.length] = m[x]
  }
}
console.log(rez);