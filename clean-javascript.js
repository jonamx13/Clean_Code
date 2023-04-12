//* Hoisting
/* var greet = 'Hello';

(
    function() {
        console.log(greet); //> undefined
        var greet = 'Hi';
        console.log(greet); //> Hi
    }
)(); */

var greet = 'Hello';

(
    function() {
        var greet;
        console.log(greet); //> undefined
        var greet = 'Hi';
        console.log(greet); //> Hi
    }
)();

/* 
function greet() {
    let greeting = 'Hello world!';
    console.log(greeting);
}

greet(); //>
 */