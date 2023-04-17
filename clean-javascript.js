//* Before ES6
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return 'Hello I am ' + this.name;
}

var person = new Person('Jonathan');
console.log(person.name);
console.log(person.greet());


//* With ES6
class Cat {
    constructor(cat) {
        this.name = cat;
    }

    greet() {
        return `Hello, I am a cat and my name is ${this.name}`
    }
}

const cat = new Cat('Oliver')
console.log(cat.name);
console.log(cat.greet());