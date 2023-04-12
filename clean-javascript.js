//* Block Scope
{
    let greeting = 'Hello World!';
    var lang = 'English';
    console.log('greeting from block',greeting);
}

console.log('Language outside block', lang); //> English
console.log(greeting); //> ReferenceError: greeting is not defined