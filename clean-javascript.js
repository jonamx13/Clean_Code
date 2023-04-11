//* Local Scope

function greet() {
    let greeting = 'Hello World';
    console.log('Greeting from function',greeting);
}

greet(); //> Hello World!
console.log(greeting); // error: var is not defined