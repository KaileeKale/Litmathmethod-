// VARIABLES (For Storing/Assigning values)

/*
Syntax for Variables...

variableType variableName = value;
*/
// NOTE: When creating a variable the common standard is for the variable name to be written in camelCasing

// LET is the variable type
// mcuMovies is the variable name
// 33 is the value being set/assigned to the variable
// When you create a variable it is called Declaring a variable.
// NOTE: In JavaScript, when there is a single equal sign = the value to the right of the equal sign is being set as the value for whatever is on the left.
let mcuMovies = 33;

// The number 33 displays in the terminal when the file is run because 33 is the value that was set to the mcuMovies variable
console.log(mcuMovies); // 33

// Reassigning a new number value to the mcuMovies variable
// NOTE: When updating/reassigning a new value for the variable the variable type should NOT be used
// mcuMovies = 34;

// Using/referencing the current value of the variable to reassign/update the value to a new number
// mcuMovies = mcuMovies + 2;
// mcuMovies = mcuMovies - 2;

// Shorthand way to use/reference the current value of the variable to reassign/update the value of the variable to a new number (Same as examples above)
// mcuMovies += 2;
// mcuMovies -= 2;

// Incrementing (Adding one) using ++
// Decrementing (Subtracting one) using --
// mcuMovies--;
// mcuMovies++;

// Reassigning a different data/primitive value type as the new value for the variable.
// mcuMovies = "Hello";
// mcuMovies = true;

// console.log(mcuMovies);

// Using math operators with variables that have number values
let avengersMovies = 4;
console.log(avengersMovies); // 4
let nonAvengersMovies = mcuMovies - avengersMovies;
console.log(nonAvengersMovies); // 29

// OTHER TYPES OF VARIABLES
// const (Used for variables with a value that will NOT change)
const mcuPhases = 5;
// Cannot reassign/update the value of a const variable
// mcuPhases = 6;
// console.log(mcuPhases);
