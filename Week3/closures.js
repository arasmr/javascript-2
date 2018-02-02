"use strict"


//Your task is to write a function that takes another function as an argument and runs it.
function foo(func) {
    func();
}

function bar() {
    console.log('Hello, I am bar!');
}
foo(bar);

console.log("-------------------------------------------------------------------------------");

//setTimeout(code[,delay])
//setTimeout(function[,delay])
function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 3000);

console.log("-------------------------------------------------------------------------------");

//You must write a function that takes 4 arguments. - A start value - An end value - A callback to call if the number is divisible by 3 - A callback to use if the number is divisible by 5

//The function should generate an array containing values from start value to end value (inclusive).

//Then the function should iterate over the array and call the first callback if the array value is divisible by 3

//The function should call the second callback if the array value is divisible by 5

//Both functions should be called if the array value is divisible by both 3 and 5

function callBack(startValue, endValue, callByThree, callByFive) {
    let array = [];
    for (let i = startValue; i <= endValue; i++){
        //Then the function should iterate over the array
        array.push(i);
        //call the first callback if the array value is divisible by 3
        if (i % 3 === 0) {
            callByThree(i);
        }
        //The function should call the second callback if the array value is divisible by 5
        if (i % 5 === 0) {
            callByFive(i);
        }
        //Both functions should be called if the array value is divisible by both 3 and 5
        if(i % 3 === 0 && i % 5 === 0) {
            console.log(i + " is divisible by 3 and 5.");
        }
    }
    return array;
    

}

function divideByThree(dividedNumberThree) {
    console.log(dividedNumberThree + " is divisible by 3.");
}

function divideByFive(dividedNumberFive) {
    console.log(dividedNumberFive + " is divisible by 5.");
}

callBack(10, 15, divideByThree, divideByFive);

console.log("-------------------------------------------------------------------------------");

//Please solve this problem using: https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
//for loop

function repeatStringNumTimes(str, num) {
    // repeat after me
    str = num < 0 ? "" : str;
    let myString = "";
    for (let i = 0; i < num; i++) {
        myString = myString + str;
    }
    console.log(myString);
}
repeatStringNumTimes("abc", 3);

//while loop

function repeatStringNumTimes1(str, num) {
    str = num < 0 ? "" : str;
    let myString1 = "";
    let i = 0;
    while (i < num) {
        i++;
        myString1 = myString1 + str;
    }
    console.log(myString1);
}

//do loop

repeatStringNumTimes1("abc", 3);
function repeatStringNumTimes2(str, num) {
    // repeat after me
    str = num < 0 ? "" : str;
    let myString2 = "";
    let i = 0;
    do {
        i++;
        myString2 = myString2 + str;
    } while (i < num)
    console.log(myString2);
}
repeatStringNumTimes2("abc", 3);

console.log("-------------------------------------------------------------------------------");

//Some practice with objects https://www.freecodecamp.com/challenges/construct-javascript-objects-with-functions
var Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

// Only change code below this line.

var MotorBike = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 2;
};
