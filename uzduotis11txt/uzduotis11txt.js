"use strict"

/* susikurti 5 failus:
1.txt
2.txt
3.txt
4.txt
5.txt

perskaityti failus tokia tvarka: 4, 3, 1. Rezultatus sudeti i viena string'a
Ta string'a suskaldyti zodziais (per tarpa). Atspausdinti kiekviena zodi ilgejimo tvarka
Po to perskaityti failus: 5, 2. Atspausdinti ju turini 
*/

const fs = require ("fs");


let first = "";
let second = "";
let last = "";
let all;

fs.readFile("uzduotis11txt/4.txt", (err, data) => {
    first += data;
    // console.log(first);
        fs.readFile("uzduotis11txt/3.txt", (err, data) => {
            second += data;
        // console.log(second);
            fs.readFile("uzduotis11txt/1.txt", (err, data) => {
                last += data
            // console.log(last);
            all = (first + " "  + second + " "  + last);
            console.log(all);
            let z = all.split(" ")
            for (var i = 0; i < z.length - 1; i++) {
                z[i] += " ";
                console.log(z);
                z.sort((a, b) => {
                    return a.length - b.length
                })
            }
            console.log(z);
            });
            fs.readFile("uzduotis11txt/5.txt", (err, data) => {
                console.log(" " + data);
            });
            fs.readFile("uzduotis11txt/2.txt", (err, data) => {
                console.log(" " + data);
            });
        });
    });

   