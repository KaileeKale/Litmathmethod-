// MATH OBJECT (Properties and Methods)
// The Math Object is a built-in JavaScript Object/Feature that has Properties and Methods which can be used for completing Math related tasks

// PROPERTIES (Provides different values/numbers that can be used)
/*
Syntax Example...

Math.propertyName
*/

// PI Property
console.log(Math.PI); // 3.141592653589793

// METHODS
/*
Syntax Example...

Math.methodName(argument)
*/

// Min Method (Returns the lowest number)
const minOne = Math.min(1, 2, 3, 4);
console.log(minOne); // 1

const minTwo = Math.min(14, 22, 8);
console.log(minTwo); // 8

const minThree = Math.min(3, -9, 0);
console.log(minThree); // -9

// Max Method (Returns the largest number)
const maxOne = Math.max(1, 2, 3, 4);
console.log(maxOne); // 4

const maxTwo = Math.max(-9.123, 0, -13);
console.log(maxTwo); // 0

// Round Method (Round the number to the nearest number)
const roundNumOne = Math.round(7.7);
console.log(roundNumOne); // 8

const roundNumTwo = Math.round(-1.1);
console.log(roundNumTwo); // -1

const roundNumThree = Math.round(0.5);
console.log(roundNumThree); // 1 (NOTE: .5 will always round up)

// Floor Method (Rounds the number down)
const floorOne = Math.floor(26.2);
console.log(floorOne); // 26

const floorTwo = Math.floor(0.99999);
console.log(floorTwo); // 0

const floorThree = Math.floor(-1.1);
console.log(floorThree); // -2 (NOTE: If the starting number is negative, then the floor method will round it down to the next negative number (Ex: -1.1 to -2))

const floorFour = Math.floor(-3);
console.log(floorFour); // -3

// Ceil Method (Rounds the number up)
const ceilOne = Math.ceil(1.1);
console.log(ceilOne); // 2

const ceilTwo = Math.ceil(-1.1);
console.log(ceilOne); // -1 (NOTE: Removes the numbers after the decimal on a negative number)
// Random Method (Returns a number from 0 up to 0.99999 (AKA Less than 1))
// NOTE: The Random Method does NOT accept an argument (AKA Nothing inside the parenthesis "()")
let randomNum = Math.random();
console.log(randomNum); // 0 up to less than 1 (AKA 0 up to 0.99999)

randomNum *= 6;
// randomNum = randomNum * 6;
console.log(randomNum); // 0 up to less than 6 (AKA 0 up to 5.99999)

randomNum = Math.floor(randomNum);
console.log(randomNum); // 0, 1, 2, 3, 4, OR 5

randomNum++;
console.log(randomNum); // 1, 2, 3, 4, 5 OR 6

// Random Number using ceil (Since Math.random()) can possibly be 0 it is best NOT to use Math.ceil when creating a random whole number)
let random = Math.random() * 6;
console.log(random); // 0 up to less than 6 (AKA 0 up to 5.99999)

random = Math.ceil(random);
console.log(random); // 0, 1, 2, 3, 4, 5, or 6