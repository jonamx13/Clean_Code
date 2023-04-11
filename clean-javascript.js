//Prior to ES6
var name = 'Jona';

//Modern Javascript
let name = 'Eduardo';
const PI = 3.14159;

//var usage
var age = 28;

{
    console.log('Value inside block', age); //> 28
    var age = 29;
}

console.log('Value outside block', age); //> 29
age = age * 2;
console.log('Changed Value', age); //> 58