"use strict" 

// failu skaitymas su promise

const fs = require("fs/promises");

let s = "";
fs.readFile("uzduotis11txt/4.txt")
.then(data => {
    s += data;
    return fs.readFile("uzduotis11txt/3.txt");
})
.then(data => {
    s += " " +  data;
    return fs.readFile("uzduotis11txt/1.txt");
})
.then(data => {
    s += " " + data;
    let m = s.split(" ");
    m.sort((e1, e2) => e1.length - e2.length);
    console.log(m);
    return fs.readFile("uzduotis11txt/5.txt");
})
.then((data) => {
    console.log("" + data);
    return fs.readFile("uzduotis11txt/2.txt");
})
.then(data => {
    console.log("" + data);
})
.catch(err => {
    console.log("Ivyko klaida", err);
});