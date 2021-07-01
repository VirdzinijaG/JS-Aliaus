"use strict"

// setTimeout - nustato atgalini laikmati
// setTimeout priima du parametrus

function test () {
    console.log("1");
    console.log("2");
    console.log("3");
}

setTimeout (test, 5000); // parametrai funkcija test, po tiek laiko paleidzia sita funkcija

console.log("4");
console.log("5");
console.log("6");

console.log("Pradzia");

function test1 () {
    console.log("7");
}

function test2 () {
    console.log("8");
}

function test3 () {
    console.log("9");
}

setTimeout (test2, 20);
setTimeout (test1, 230);
setTimeout (test3, 10);

console.log("Pabaiga");



// node.js moka perskaityti failus is failines sistemos txt
const fs = require ("fs"); 

function perskaiciau (err, data) {
    console.log(" " + data); // atspausdina tai ka perskaite
}

fs.readFile("a.txt", perskaiciau); // node.js funkcionalumas
fs.readFile("b.txt", perskaiciau);
fs.readFile("c.txt",perskaiciau)
// readFile - failo skaitymas

// kad a.txt b.txt ir c.txt skaitytu ir atspausdintu is eiles rasoma:

/* fs.readFile("a.txt", (err, data) => {
    console.log(" " + data);
        fs.readFile("b.txt", (err, data) => {
        console.log(" " + data);
            fs.readFile("c.txt", (err, data) => {
            console.log(" " + data);
            }; 
    }; 
}; 
*/

// Taip uzrasius spausdins eiles tvarka, nes pradzioje ivykdis viena komanda, po to eis prie sekancios 

/*  fs.readFile("a.txt", (err, data) => {
    data = " " + data;
        fs.readFile("b.txt", (err, data) => {
        data = " " + data;
            fs.readFile("c.txt", (err, data) => {
            data = " " + data;
            }; 
    }; 
}; 
*/
// Taip gaunamas tekstas, kuri perskaite is failo 