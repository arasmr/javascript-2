
let createBase = function (number) {
    return function (y) {
        return number + y;
    }
}
let addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27

console.log("---------------------------------------------------------------------------");

let myArray = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

//https://codehandbook.org/how-to-remove-duplicates-from-javascript-array/

function removeDuplicate() {
    return Array.from(new Set(myArray));
}
console.log(removeDuplicate());
