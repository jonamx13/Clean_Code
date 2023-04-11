//Prior to ES6
var name = 'Jona';

//Modern Javascript
let name = 'Eduardo';
const PI = 3.14159;

//let usage
let age = 28;

{
    let age = 29;
    console.log('Value inside block', age); //> error, age doesn't exist here
}

console.log('Value outside block', age); //> 29
age = age * 2;
console.log('Changed Value', age); //> 58