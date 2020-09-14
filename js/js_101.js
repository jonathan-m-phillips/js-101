// JS exercises to maintain and gain knowledge in writing JavaScript

//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
let onMArsRightNow = false;

// Exercise 2
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.
let fruits = ['mango', 'banana', 'guava', 'kiwi', 'strawberry'];

//  Exercise 3
//  Create a variable named vegetables and assign it an array of fruits containing the following vegetable names as strings:
//  eggplant, broccoli, carrot, cauliflower, and zucchini
let vegetables = ['eggplant', 'broccoli', 'carrot', 'cauliflower', 'zucchini'];

// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exercise 5
// Add the string "tomato" to the end of the fruits array.
fruits.push('tomato');

// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
vegetables.push('tomato');

// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.
let someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
someNumbers.reverse();

// Exercise 8
// Sort the vegetables in alphabetical order.
vegetables.sort();

// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order
fruits.sort();
fruits.reverse();

// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
let fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);

// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one
function addOne (x) {
    return x + 1;
}

// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
function isPositive (num) {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}

// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.
function isNegative (num) {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}

// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
function isOdd (num) {
    if (num % 2 === 0) {
        return false;
    } else if (num % 2 !== 0) {
        return true;
    }
}

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.
function isEven (num) {
    if (num % 2 === 0) {
        return true;
    } else if (num % 2 !== 0) {
        return false;
    }
}

// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!
function identity (x) {
    return x;
}

// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd
function isPositiveOdd (num) {
    if (num > 0 && num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
function isPositiveEven (num) {
    if (num > 0 && num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}