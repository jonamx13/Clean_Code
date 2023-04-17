//* DRY Principle (Don't Repeat Yourself)
const jonaAverage = (90 + 50 + 70) / 3;
const alexAverage = (80 + 90 + 70 + 80) / 4;
const candanceAverage = (40 + 100) / 2;

console.log(jonaAverage, alexAverage, candanceAverage);


function getAverage(...grades) {
    return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

const jonaAverage2 = getAverage(90, 50, 70);
const alexAverage2 = getAverage(80, 90, 70, 80);
const candanceAverage2 = getAverage(40, 100);

console.log(jonaAverage2, alexAverage2, candanceAverage2);