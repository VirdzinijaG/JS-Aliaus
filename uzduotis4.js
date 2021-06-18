   /*
    atspausdinti kiekvienos eilutes elementu vidurki
    atspausdinti visu elementu vidurki
    */

 let st = [
     [1, 2, 3, 5, 3, -4, 2], // vidurkis 1.71428..
     [4, 5, 6, 10, 11, 12],  // vidurkis    8
     [7, 8, 9, 2, 6, -3, 67], // vidurkis  13.71428....
     [7, 8, 9, -12, 3, -18]   // vidurkis  -0.5
     ]; // vidurkis 5.884615...
  

// kiekvienos eilutes elementu vidurkis

let vidurkis = 0;
let suma = 0;
for (let i = 0; i < st[0].length; i++) {
         suma = suma + st[0][i]; 
          vidurkis = suma / st[0].length;
} 
console.log(vidurkis);

let vidurkis1 = 0;
let suma1 = 0;
for (let i = 0; i < st[1].length; i++) {
         suma1 = suma1 + st[1][i]; 
          vidurkis1 = suma1 / st[1].length;
} 
console.log(vidurkis1);

let vidurkis2 = 0;
let suma2 = 0;
for (let i = 0; i < st[2].length; i++) {
         suma2 = suma2 + st[2][i]; 
          vidurkis2 = suma2 / st[2].length;
} 
console.log(vidurkis2);

let vidurkis3 = 0;
let suma3 = 0;
for (let i = 0; i < st[3].length; i++) {
         suma3 = suma3 + st[3][i]; 
          vidurkis3 = suma3 / st[3].length;
} 
console.log(vidurkis3);


// bsuma = suma + suma1 + suma2 + suma3;
// console.log(bsuma);
// bvidurkis = bsuma / st.length;
// console.log(bvidurkis);


// visu elementu vidurkis

let bvidurkis = 0;
let bsuma;
bsuma = suma + suma1 + suma2 + suma3;
console.log(bsuma);

console.log(st[0].length);
console.log(st[1].length);
console.log(st[2].length);
console.log(st[3].length);

let lsuma;
lsuma = st[0].length + st[1].length + st[2].length +st[3].length;
console.log(lsuma);

bvidurkis = bsuma / lsuma;
console.log(bvidurkis);


