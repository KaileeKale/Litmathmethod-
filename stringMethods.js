// STRING METHODS

/*
Syntax Example...

String.methodName();
*/

// Basics Methods

// Trim (Removes empty/white space before the start and after the end of content in a string)
console.log("   Hello World"); //   Hello World
console.log("   Hello World".trim()); // Hello World

let trim1 = " Hi ";
let trim2 = " Bye ";
console.log(trim1 + trim2); //  Hi  Bye
console.log(trim1.trim() + trim2.trim()); // HiBye

// Uppercase and Lowercase (Changes the text to UPPERCASE and lowercase)
const text = "These are words";
console.log(text); // These are words
console.log(text.toUpperCase()); // THESE ARE WORDS
console.log(text.toLowerCase()); // these are words

// Methods with Arguments
/*
Syntax Example...

String.methodName(argument)
*/

// Index Of (Returns the index position)
let letters1 = "abcd";
console.log(letters1.indexOf("b")); // 1

// NOTE: indexOf will always return the first occurrence of the argument (In this case the "a")
let letters2 = "abc";
console.log(letters2.indexOf("a")); // 0

// If the argument is a string of two or more characters, then the index will be the index where the string argument begins.
const fullName = "Matt Riley";
console.log(fullName.indexOf("Riley"));

// Replace (Replaces content in a string)
// The first argument is the character(s) being selected. The second argument is the character(s) that is/are replacing what was put in for the first argument.
let hi = "hello";
console.log(hi.replace("h", "j")); // jello
console.log(hi.replace("hello", "Hi there!")); // Hi there!

// Repeat (Repeats content in a string)
let lesson = "String Methods";
console.log(lesson.repeat(1)); // String Methods
console.log(lesson.repeat(3)); // String MethodsString MethodsString Methods

// Slice (Extracts part of string)
// First number/argument is start index. Second number/argument is the ending index (NOTE: Goes up to the second index, but does NOT include that index)
let breakTime = "Almost break time!";
console.log(breakTime.slice(0, 6)); // Almost
console.log(breakTime.slice(7, 12)); // break
// If a second number/argument is NOT included, then the rest of the string will be included in the slice
console.log(breakTime.slice(7)); // break time!
// When using negative numbers they start from the end of the string (Starting at 1 not 0)
console.log(breakTime.slice(-5, -1)); // time
