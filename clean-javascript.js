//* Functions (parameters and arguments)
//? Recommended to limit them up to 3 parameters

// Parameter: number
function getDouble(number) {
    return number * 2;
}

// Argument: 10
getDouble(10); //> 20

// Default parameter
function greet(person = 'Strange') {
    console.log(`Hello ${person}`);
}

greet(); //> Hello Strange
greet('Jona'); //> Hello Jona

/////
//? This happens when we don't sent the argument
function greet2(person) {
    console.log(`Hello ${person}`);
}

greet2(); //> Hello undefined

// Spread operator
//? Rest must be the last parameter

// Without rest(spread)
function add(x,y) {
    console.log(x + y);
}

add(1, 2, 3, 4, 5); //> 3 (it's ignoring the rest of arguments)

//With rest(spread)
function addSpread(x, y, ...args) {
    console.log(args.reduce((prev, current) => prev + current, 0) + ( x + y ));
}

addSpread(1, 2, 3, 4, 5); //> 15

// Using spread to copy elements
const course = {
    title: 'Definitive Javascript',
    content: 'Anything you need to know',

    upperCaseTitle: function(){
        console.log(this.title.toUpperCase());
    }
}

const courseCloned = Object.assign({}, course);
const spreadCourseCloned = { ...course};

console.log(spreadCourseCloned);
spreadCourseCloned.upperCaseTitle();

// Cloning arrays with spreads
const numbers = [1, 2 ,3];

const clonedNumbers = numbers.slice();
const spreadClonedNumbers = [...numbers];

console.log(spreadClonedNumbers);

// Linking two arrays with spread
const numbersA = [1, 2, 3];
const numbersB = [4, 5, 6];

const newNumbers = [...numbersA, ...numbersB];

console.log(newNumbers);