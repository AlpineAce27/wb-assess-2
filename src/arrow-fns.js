// Unit 2 Assessment: arrow-fns.js

// Set the value of giveMeTwo to an arrow function that returns 2.
//
// Ex.:
//   giveMeTwo();
//   => 2
const giveMeTwo = () => {
    return 2
};

// Set the value of addNums to an arrow function that takes in two numbers and
// returns their sum.
//
// Ex.:
//   addNums(1, 2);
//   => 3
const addNums = (numA, numB) => {
    return numA+numB
};

// Set the value of max to an arrow function that takes in two numbers and
// returns the largest one.
//
// Ex.:
//   max(1, 2);
//   => 2
const max = (numbA, numbB); {
    if(numA > numB){
        return numA
    }
    else{
        return numB
    }
}

// Given an array of numbers, return a new array that only includes the even
// numbers. Do this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   evens([1, 2, 3, 4, 5]);
//   => [2, 4]
function evens(nums) {
    let newArray = []
    nums.forEach((element) => {
        if(element % 2 === 0){
            newArray.push(element)
        }
    });
    return newArray
}

// Given an array of names, return a new array of greetings for each name. Do
// this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   createGreetings(['Clive', 'Jill', 'Torgal']);
//   => ['Hello, Clive!', 'Hello, Jill!', 'Hello, Torgal!']
function createGreetings(names) {
    let newArray = names
    newArray.forEach((element) => {
        element = "Hello, " + element
    })
    return newArray
}

// Given an array of words, return a new array where each word is uppercased
// and only includes words that are longer than 4 characters. Do this using
// array iteration methods (you may need more than one). Do NOT use a for loop.
//
// Ex.:
//   loudLongWords(['apple', 'pear', 'cake', 'pinata']);
//   => ['APPLE', 'PINATA']
function loudLongWords(words) {
    let newArray = []
    words.forEach((element) => {
        if(element.length > 4){
            newArray.push(element.toUpperCase)
        }
    })
    return newArray
}

export { addNums, createGreetings, evens, giveMeTwo, loudLongWords, max };
