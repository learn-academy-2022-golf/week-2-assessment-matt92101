# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer:

An argument is information that is passed into a function whereas a parameter is only a placeholder for that piece of infomation. I like to think of parameters as more "generic information and arguments as more specific information. For example, in the subtract function below, the "(a,b) represent two parameters "a" and "b" which will be a placeholder until a specific value is identified. Continuing in the example, the "4" and "8" are now identified when calling on the function and these are considered the arguments.

Function subtract(a,b){
    return a - b
}
subtract(4, 8)

Researched answer:

Freecodecamp.org further clarifies the difference between a parameter and an argument. First, we must understand that a fuction should be REUSABLE code to any developer
. Using parameters within a function allows the developer
 to input their own values into the function by replacing the parameter data type with their own values within that same data type.

Resource: Parameters vs Arguments in JavaScript – What's the Difference? by Segun Ajibola
https://www.freecodecamp.org/news/what-is-the-difference-between-parameters-and-arguments-in-javascript/#:~:text=A%20parameter%20is%20one%20of,pass%20into%20the%20method's%20parameters.


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:

The .map method must take in an array as a parameter. The array can hold any of the six primitive data types.

Researched answer:

After researching this questions, it is more clear that the .map method can take two predifined parameters. These parameters are "function(currentValue,index,arr)" and 
"thisValue". The "function(currentValue,index,arr)" parameter is required and the
"thisValue" parameter is optional. It is good to note that some of the parameters within the "function(currentValue,index,arr)" parameter are also required and/or optional. For intance, the "currentValue" is required since it holds the value of the current element. The "index" and "array" / "arr" parameter are both optional. 

Reference:
Javascript - Array map() Method
https://www.geeksforgeeks.org/javascript-array-map-method/#:~:text=It%20contains%20three%20parameters%20which,and%20it%20holds%20the%20array.



3. What is the difference between map and filter?

Your answer: 

The .map and .filter are both methods used in functions for returning an array in Javascript. Their is one primary difference beween the .map and .filter method. The .map method will take in an array and return the same number of values in the output whereas the 
.filter method will take in an array and may return an array that has a different number of values that was originally inputted. For example, using the .map method in the array named Animals, notice the values may be different names but the number of values remain the same. However,when using the .filter method, the number of values may be reduced in the returned array output.

Array Animals - Using .map method

(cat,dog,elephant,lion)
(giraffe,cat,lion,sheep)

Array Animals - Using .filter method
(cat,dog,elephant,lion)
(dog,cat)

Researched answer:

After researching this question, the .filter method can be better explained as iterating through the entire array and asking whether a specific value meets a developer's specified criteria. If the value does meet the criteria, it is considered "true" and remains in the array. If the value does not meet the citeria, it is considered "false" and removed from the array output. The .map method also returns a modified array but does not necessarily ask whether a cetain criteria is met, rather the .map method can manipulate a data set but returning the same number of values in the array. For example:

const numSample - [1,2,3]
const mapped = numSample.map
return the values in numSample * 10
the expected output in the new array is [10,20,30]

Reference:
Map vs Filter vs Reduce by Dylan Israel
https://thinkster.io/tutorials/100-front-end-interview-questions-challenge/map-vs-filter-vs-reduce


4. What is iteration?

Your answer:

Iteration is the process of performing a particular task over and over until a certain condition is met. Iteration is most commonly performed through loops.

Researched answer:

After doing some research, there appears to be some subtle differences between interation and looping. Looping circulates through a particular piece of code repeatedly until a condition is met. Some common looping methods are 'for loops' and 'while loops'. On the other hand, iteration is when the developer wants to execute code only once for each value in a collection. Some common iteration methods are 'for of', 'for in', 'map()', and 'forEach'. 

Resource: Looping vs Iteration in Javascript: A Beginners Guide to Navigating Both by Joseph Fulkerson
https://medium.com/geekculture/looping-vs-iteration-in-javascript-a-beginners-guide-to-navigating-both-571ecdfd9cfe#:~:text=Looping%20is%20when%20we%20want,or%20properties%20of%20an%20object.


5. What is the difference between a class and an object?

Your answer: 

An object is a collection of data that is formatted in a 'key-value' relationship. For example, the object 'cars' can have keys of 'make' and 'model' and values of 'Jeep' and 'Wrangler'. The object could be written like:

const cars = {
    make: "Jeep"
    model: "Wrangler
}

On the other hand, classes are the blueprints for objects.

Researched answer:

Upon further research, classes are a special type of function that have class expressions and class declaration. A class has a constructor method which operationalizes the objects. This is shown in class Square,

class Square {
    constructor(hight, width)
}

In summary, a class is the blueprint that oulines the properties and behaviors of objects. The object is one particular instance of that class, sharing the same properties hand behaviors.

Resource:
Difference Between Class and Object by Satyam Tripathi
https://www.scaler.com/topics/difference-between-class-and-object/



6. STRETCH: What is hoisting in JavaScript?

Your answer: I'm not sure what hoisting in Javascript is. I would love the opportunity to research that question and get back to you.

Researched answer:

Hoisting refers to Javascript's behavior of moving all declarations to the top of the script. By hoisting, it allows the developer to call on functions before they appear in the code.

Understanding Javascript Hoisting by Krissanawat Kaewsanmuang
https://blog.bitsrc.io/what-is-javascript-hoisting-f0678208eb08

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: 

User stories evaluate software from the user's perspective. The main purpose of user stories is to allow the developer to recieve critical feedback from the user to determine whether they are satified with the software or if they would like to see some changes. An effective user story will dive into three areas known as card, conversation, and confirmation. The card feature means that the user story will be short, the brevity is usually written down on an index card. Next, all stakeholder provide input or open conversation about the details of the story. Stakeholders include the user, business partners, and of course the developers. Lastly, the software development team tracks the conversation to ensure the story has been implemented correctly. The software development team generally follows a template that asks:

a. Who are we building this product for?
b. What is the user actually trying to achieve?
c. What the "big problem" that needs solving

For example, a user story for an English language learning app might look like this:

As an English language learner (Answer to Question A), I want to improve my English speaking skills (Answer to Question B), so that I can advance my career in a management position with a multinational company (Answer to Question C).

Resource: A Radically Simple Approach to User Stories by Bertil Muth
https://www.freecodecamp.org/news/a-radical-simple-approach-to-user-stories/

2. Spread operator:

The spread operator is a new feature in Javascript ES6. The spread operator will take an array and ouptuts individual elelemnts. The spread operator is useful in several scenerios. Most notebly, the spread operator can copy an existing array. For example:

let array1 = ['j', 'o', 'b']
let array2 = [...array1] <------- Utilizing the spread operator
console.log(array2) <-------- output will be ['j', 'o', 'b']

In addition, the spread operaotr can insert elements of one array into another. This eleviates the restriction of appending an existing array to either the beginning or end of another array. The spread operatorat now allows an array to be appended after any element of another array. For example:

let vegetables = ['spinach', 'carrots', 'broccoli', 'cabbage']
let breakfastItems = ['eggs', 'toast', 'oatmeal', 'pancakes']
let breakfastItems2 = ['eggs', ...vegetables, 'toast', 'oatmeal', 'pancakes'] <------- now the array vegtables will be placed in between 'eggs' and 'toast' of array breakfastItems

Resource: What is the spread operator is Javascript?
https://www.educative.io/answers/what-is-the-spread-operator-in-javascript


3. React:

React is a Javascript library for building user interfaces (UI) that was created by Facebook. It is effective for builiding UI components, and ultimately interactive applications that responds to data that is rapidly changing.

Resource: Tutorial: Intro to React
https://reactjs.org/tutorial/tutorial.html


4. React props:

React props refer to the properties of an object. When using React, a developer can create properties and values for an object by passing data into a component. Only components with data to display will use props. The use of props creates a better user experience by streamlining code that executes quickly.

Resource: Introduction to React Props & How to Use It in Your Code by Athena Ozanich
https://blog.hubspot.com/website/react-props#:~:text=In%20React%2C%20the%20term%20props,and%20values%20for%20the%20object.


5. DOM events:
DOM stands for Document Object Model which includes various events. Some possible events may be clicking the mouse on an HTML object or submitting a form on a webpage. For example, when a webpage is displaying a photo without any associated DOM events, the photo will remain static and cause any events. However, it the developer makes the photo enlarge by allowing the user to move the mouse pointer over the photo, a mouseover DOM has been been envoked. 

Resource: What are Javascript DOM Events
https://www.tutorialspoint.com/What-are-JavaScript-DOM-Events