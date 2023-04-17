//* Before ES6
//? Parent Class
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log('Hello I am ' + this.name);
}

//? Child Class
function Developer(name) {
    this.name = name;
}

Developer.prototype = Object.create(Person.prototype);

Developer.prototype.writeCode = function(coffee) {
    if(coffee) console.log('I am working in a new feature');
    else console.log('I need coffee, please!');
}

var dev = new Developer('Jona');
dev.greet(); //> Hello I am Jona
dev.writeCode(); //> I need coffee, please!


//* With ES6
//? Parent Class
class Person2 {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hello I am ${this.name}`);
    }
}

//? Child Class
class Developer2 extends Person2 {
    constructor(name) {
        super(name)
    }

    writeCode(coffee) {
        coffee 
        ? console.log('I am developing a new feature') 
        : console.log('I need coffee, please!');
    }
}

const dev2 = new Developer2('Candance');
dev2.greet(); //> Hello I am Candance
dev2.writeCode(); //> I need coffee, please