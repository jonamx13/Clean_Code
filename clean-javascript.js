//* Arrow Functions and 'this'
const getResult = () => 'Results Jona';

console.log(getResult());

// Without arrow
[1, 2, 3].map(function (n) {
    return n * 2;
});

// With arrow
[1, 2, 3].map((n) => n * 2);

// With 'this'
const counterNormal = {
    number: 0,
    increase() {
        setInterval(() => console.log(++this.number) , 1000) 
    }
}

counterNormal.increase();

// Without 'this'

const counterThis = {
    number: 0,
    increase() {
        setInterval(function() {
            console.log(++this.number);
        }.bind(this), 1000) // bind method
    }
}

counterThis.increase();