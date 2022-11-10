// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
console.log(cohort.split(""))

// a) Your answer: "G", "o", "l", "f", "2", "0", "2", "2"
// b) Verify and explain:
//    The split method will separate each element within a string and output that individual element into it's own string
//    ** Note - after running the console log, I forgot to add the empty space in my answer. Also, the output generated single quotes insead of double quotes.
//    Actual output:   'G', 'o', 'l','f', ' ', '2','0', '2', '2'


// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello, LEARN Student'
// b) Verify and explain:
//    Const greeter is a function using string interpolation. After the console log is ran, the output should take in the text string
//    'Hello' and add the string interpolation 'name'. The console log is replacing 'name' with the argument 'LEARN Student'. 
//    Note:
//    I received an undifined value after running the function.
//    After further evaluating the function, I discovered there was not a "return" statement before `Hello, ${name}!`
//    The function returned 'Hello, LEARN Student!' after I added the return statement.


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: 
//    A variable was created that incorporates the .map method using a function. The .map method in the function will iterate through each character in the array and
//    multiply each number by two.
//    Note: The parameter names can be changed to any value that I choose in .map((number) => number * 2
//    For example, I can change the name from 'number' to 'value' and achieve the same output
//    Also note, with .map method the array output will be the same number of characters as the input. In this case, 5 characters

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain:
//    A variable was created that incorporates the .filter method using a function. The .filter method in the function will iterate through each character in the array and
//    take each number and determines whether that number is odd using the modulo operator.
//    Note: In this case the modulo operator is checking for a number divisible by two and than says there should be a remainder value by using the bang operator !== 0
//    Also note, with .filter method the array output has a different number of characters as the input. In this case, the characters 12 and 14 were removed from the array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: ["Javascript"]
// b) Verify and explain:
//    A variable has been set up called myCodingSkills
//    There are four objects (key-value relationships) inside myCodingSkills
//    The first key-value relationship is Languages and has been assigned an array that contains the values of ["JavaScript", "Ruby"]
//    The console log will output the zeroth index location of the language object in the myCodingSkills variable
//    Note: Since the object 'laguages' contains an array - the zeroth index will be the fist string within that array.
//    However, if the object does not contain an array and only a string as in 'databases', the zeroth index will be the first character
//    of "P" in "PostgreSQL"


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: [George, Foxtrot, 2022]
// b) Verify and explain:
//    We are creating a class called 'Learn". We use a constructor function and define a parameter called 'name'
//    We use .this to reference the object itself - similiar to looking at yourself in the mirror
//    A new variable is created called LearnStudent which created an instance of each object within the Learn class
//    Console log will return the values for this.student, this.cohort, and this.year.
//    I forgot that the console log will return the results in the key-value format aka  key: value
//    Actual output { student: 'George', cohort: 'Foxtrot', year: 2022 }
