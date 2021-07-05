"use strict"

function buttonClick() {
    console.log("button click started");
    longExecution();
    console.log("button click finished");
}

function longExecution() {
    console.log("long exec started");
    for (let i = 0; i < 10000000; i++) {
        for (let j = 0; j < 1000; j++) {

        }
    }
    console.log("long exec finished");
}

function buttonClick1() {
    console.log("button 1 click started");
    console.log("button 1 click finished");
}