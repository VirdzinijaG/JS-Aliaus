"use strict"

// atspausdinti visu nelyginiu skaiciu suma ir vidurki
    
let m = [
    [
    [1, 2, 3, 4, 5, 6],
    [74, 23, 5, 7, 4],
    [67, 4, 7, 3, 7, 9, 3]
    ],
    [
    [6, 34, 67, 8, 4, 8],
    [7, 4, 5],
    [3, 6, 8, 0, 3, 89],
    [3, 6, 2, 5, 7, 6, 3, 1]
    ],
    [
    [1, 1, 1, 1, 4],
    [2, 2, 2, 12],
    [23],
    [7, 4, 7, 5, 32, 8, 3]
    ]
    ];
   
   let suma = 0;
   let skKiekis = 0;
   

   for (let i = 0; i < m.length; i++) {
       for (let j = 0; j < m[i].length; j++ ) {
           for (let k = 0; k < m[i][j].length; k++) {
            if (((m[i][j][k]) % 2) !== 0) {
                suma += m[i][j][k];
                skKiekis += 1
            }
           }
          
       }

   }
   console.log(suma);
   console.log(skKiekis);
   console.log(suma / skKiekis);
