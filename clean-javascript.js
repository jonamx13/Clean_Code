//* Lexical Scope
const age = 28;

function printAge() {
    console.log(age);
}

function mainApp() {
    const age = 26;
    printAge();
}

mainApp(); //> 28