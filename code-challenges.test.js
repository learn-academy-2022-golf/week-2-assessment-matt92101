// // ASSESSMENT 2: Coding Practical Questions with Jest

// const { Console } = require("console")

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest



// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// // a) Create a test with expect statements for each of the variables provided.



describe("object1", () => {
    it("decides if the number inside it is evenly divisible by three or not", () => {
      expect(object1()).toEqual("15 is divisible by three")
    })
  })

describe("object1", () => {
    it("decides if the number inside it is evenly divisible by three or not", () => {
      expect(object2()).toEqual("0 is divisible by three")
    })
  })

describe("object3", () => {
    it("decides if the number inside it is evenly divisible by three or not", () => {
      expect(object1()).toEqual("-7 is not divisible by three")
    })
  })

// //   // Received a good error
// // //   object1 › decides if the number inside it is evenly divisible by three or not

// // //     TypeError: object1 is not a function

// // //       26 | describe("object1", () => {
// // //       27 |     it("decides if the number inside it is evenly divisible by three or not", () => {
// // //     > 28 |       expect(object1()).toEqual("15 is divisible by three")
// // //          |              ^



// // // b) Create the function that makes the test pass.

// // // Psuedocode
// // // Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// // // Input: object1, object2, object3
// // // Output: If object1 is divisible by three - return "object 1 is divisible by three
// // //         If object1 is not divisible by three - return "object 1 is not divisible by three"
// // //         Need an if statemeny to determine whether each object is divisible by three  
// // //         Use string interpolation for object1, object2, and object3

    
const object1 = { number: 15 }
const object2 = { number: 0 }
const object3 = { number: -7 }
divideBy3 = () => {

    
    if (object1(this.number) % 3 === 0) {
        return `${object1(this.number)} "is divisible by three`}
    else if (object1(this.number) % 3 !== 0) {
        return `${object1(this.number)} "is not divisible by three`}
    
    if (object2(this.number) % 3 === 0) {
        return `${object2(this.number)} "is divisible by three`}
    else if (object1(this.number) % 3 !== 0) {
        return `${object2(this.number)} "is not divisible by three`}

    if (object3(this.number) % 3 === 0) {
        return `${object3(this.number)} "is divisible by three`}
    else if (object1(this.number) % 3 !== 0) {
        return `${object3(this.number)} "is not divisible by three`}
    
    }
    
    console.log(divideBy3(object1))
    console.log(divideBy3(object2))
    console.log(divideBy3(object3))

// //     // Spent WAY WAY to much time on this problem.. Test Failed!
// //     // cannot get the expected output - Receiving reference errors. Tried different ways to manipulate the code.
// //     // I thought perhaps the function itself needed to be within the object culy brackets 
// //     // Shown below:

    const object1 = { number: 15,
        
        divideBy3: function() {
        
            if ((this.number) % 3 === 0) {
                `${this.number} "is divisible by three`}
            else if ((this.number) % 3 !== 0) {
                `${this.number} "is not divisible by three`}
        }
    }
        Console.log(object1)

// // // This way gave me the same referencing errors
// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("randomNouns1", () => {
    it("returns an array with all the words capitalized", () => {
      expect(randomNouns1()).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])

describe("randomNouns1", () => {
    it("returns an array with all the words capitalized", () => {
        expect(randomNouns1()).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])

// // Good Error

// b) Create the function that makes the test pass.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// Psuedocode
// Create a function that takes in an array of words and returns an array with all the words capitalized.
// Input: randomNouns1, randomNouns2
// Output: Capitalizes the each word in the array set
//  Use built in methods .toUpperCase and .substring

const capitalLetter = (array) => {
    return array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })

}
console.log(capitalLetter(randomNouns1))
console.log(capitalLetter(randomNouns2))

// could not get jest to pass - following error

// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   Jest encountered an unexpected token

//   Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.


// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("vowelTester1", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        expect(vowelTester1).toEqual([1])

describe("vowelTester2", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        expect(vowelTester1).toEqual([0])

        describe("vowelTester3", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        expect(vowelTester1).toEqual([3])
    
    
// b) Create the function that makes the test pass.

//Psuedocode
//Input - vowelTester1, vowelTester2, vowelTester3,
//Output - the index position of the first vowel in each string
    // create a variable that searches for the vowels (a,e,i,o,u)
    // use the .indexof built in method to index the variable search

const findVowel = (string) => {
    const search = ("a","e","i","o","u")
    const firstVowel = vowelTester1.indexOf(search)

}
console.log(findVowel(vowelTester1))
console.log(findVowel(vowelTester2))
console.log(findVowel(vowelTester3))

// Test Failed 
// Results came back undefined