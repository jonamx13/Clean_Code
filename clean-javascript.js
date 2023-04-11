//* How to name according to data types

//? Arrays 
    //in plural

// Not recommended
const user = ['Jonathan', 'Mariana', 'Eduardo'];

// Regular
const userList = ['Jonathan', 'Mariana', 'Eduardo'];

// Good
const users = ['Jonathan', 'Mariana', 'Eduardo'];

// Excellent
const userNames = ['Jonathan', 'Mariana', 'Eduardo'];


//? Booleans:
    // Use prefixes 'is', 'has', 'can'

// Not recommended
const valid = true;
const read = false;
const color = true;

// Recommended
const isValid = true;
const canRead = false;
const hasColor = true;

//? Numbers
    // Use prefixes 'min', 'max', 'total'

// Not recommended
const users = 15;

// Recommended
const maxUsers = 50;
const minUsers = 10;
const totalUsers = 15;


//? Functions
    // verb + noun (Since they are actions)
    // ...forAccess: get + noun
    // ...forModification: set +  noun
    // ...forPredicate: is + noun

// Not recommended
createUserIfNotExist();
updateUserIfNotEmpty();
sendEmailIfIsValid();

// Recommended
createUser();
updateUser();
sendEmail();

// Example for get, set and is
getUser();
setUser();
isValidUser();

//? Classes
    // Non-Generic Nouns
    // PascalCase

// Not recommended
class Data {}
class Manager {}
class Info {}

// Recommended
class User {}
class UserProfile {}
class Account {}