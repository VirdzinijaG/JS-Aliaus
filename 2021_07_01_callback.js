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

