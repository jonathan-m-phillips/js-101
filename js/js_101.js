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

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
let isNegativeOdd = function (num) {
    if (num < 0 && num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.
let isNegativeEven = function (num) {
    if (num < 0 && num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.
let half = function (num) {
    return num / 2;
}

// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.
function double (x) {
    return x * 2;
}

// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.
function triple (x) {
    return x * 3;
}

// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.
function reverseSign (x) {
    return x * -1;
}

// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
function absoluteValue (x) {
    return x = Math.abs(x);
}

// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.
function isMultipleOfThree (x) {
    if (x % 3  === 0) {
        return true;
    } else {
        return false;
    }
}

// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.
function isMultipleOfFive (x) {
    if (x % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.
function isMultipleOfBothThreeAndFive (x) {
    if (x % 3 === 0 && x % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.
function square (x) {
    return x * x;
}

// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.
let add = function (num1, num2) {
    return num1 + num2;
}

// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.
let cube = function (num) {
    // return num * num * num;
    return Math.pow(num, 3);
}

// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number
let squareRoot = function (num) {
    return Math.sqrt(num);
}

// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.
let subtract = function (num1, num2) {
    return num1 - num2;
}

// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.
let multiply = function (num1, num2) {
    return num1 * num2;
}

// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.
let divide = function (num1, num2) {
    return num1 / num2;
}

// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.
let quotient = function (num1, num2) {
    return Math.floor(num1 / num2);
}

// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.
let remainder = function (num1, num2) {
    return num1 % num2;
}

// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.
function sumOfSquares (x, y) {
    x = x*x;
    y = y*y;
    return x + y;
}

// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.
let timesTwoPlusThree = function (x) {
    x = x * 2;
    x = x + 3;
    return x;
}

// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.
function areaOfRectangle (x, y) {
    return x * y;
}

// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle
function areaOfCircle (x) {
    x = (x * x) * Math.PI;
    return x;
}

// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.
let circumference = function (x) {
    x = (x * 2) * Math.PI;
    return x;
}

// Exercise 43
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
let isVowel = function (x) {
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' || x === 'A' || x === 'E' || x === 'I'|| x === 'O' || x === 'U') {
        return true;
    } else {
        return false;
    }
}

// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.
function hasVowels(str){
    return "aeiouAEIOU".split("").some( s => str.includes(s) );
}

// Exercise 45
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.
function countVowels(str) {
    var vowels = "aeiou";
    var count = 0;

    for (var i = 0; i < str.length; i++){
        if (vowels.indexOf(str[i].toLowerCase()) > -1) {
            count++;
        }
    }
    return count;
}

// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels
function removeVowels (str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let x = str[i];

        if ("aeiou".match(x.toLowerCase()) === null) {
            result += x;
        }
    }
    return result;
}

// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel
let startsWithVowel = function (str) {
    return isVowel(str[0]);
}

// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel
let endsWithVowel = function (str) {
    return isVowel(str[str.length - 1]);
}

// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel
let startsAndEndsWithVowel (str) {
    return isVowel(str[0]);
    return isVowel((str[str.length - 1]));
}

// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.
let first = function (seq) {
    return seq[0];
}