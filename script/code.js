// Q1
//1 Variable

// A variable is some sort of container that stores data and data values. A variable is declared with let or var or const which is then followed by a keyword.

//2 Value

// A value in js is a chunck or a bit that can play different roles in coding. Values are created by invoking its name, which could also be determined by what type it is.

//3 Data Types

// There are many data types such as strings, numbers, blooneals, undefind values and many more. These can then be split into two groups primitive and dynamic data types.

//4 Initialization

// This is the process of storing a value into a variable. Or a variable that is initialized and is given a value at a later stage.

//5 Difference between let, var, and const

// The difference between let and var is that var is outdated and had a lot of bugs that came with it where as when let was added in 2016 it was much better. The difference with const is that it cannot be changed through reassignment like var and let.

//6 variable scope

// So there are two types of scopes global and local which can be diferenciated by global scopes declared outside and local declared inside of a block.

//7 when to use a for or while, forEach and do while loop

// A for Loop is used to repeat a specific block of code a number of times that is known.
// A while Loop is used to repeat a specific block of code an unknown number of times until the conditions are met.
// A foreach loop is used when you need to operate on each item individually in an array.
// A do while loop is used in all scenarios where the loop body needs to be executed at least once.

//8 hoisting and variable scoping

// Hoisting and variable scoping is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before the code is executed.

//9 How to create a function called fullName that returns your full name

// whats you gonna do is initialize a variable with a keyword fullName then you gonna put a string in with your full name in it, then you gonna type consol.log and put the keyword in brakets so that your full name is displayed in the console.
// code =
let fullName = "Mujahid";
console.log(fullName);

//================================================================================================================//
// Q2
let information = {
  firstName: "Mujahid",
  lastName: "Fisher",
  age: 18,
  listofsubjects:
    "English, afrikaans, Maths lit, history, Life science, life orientation, consumers",
  address: {
    streetNumber: 3,
    streetName: "Clyde Street",
    suburb: "Woodstock",
    countryName: "South Africa",
  },
};

console.log(information);

//================================================================================================================//
// Q3

document.querySelector(".btn1").addEventListener("click", function () {
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);
  let operator = document.querySelector("#operator");
  let resultDisplay = document.getElementById("result");

// operator functions

  switch (operator.value) {
    case "+":
      resultDisplay.value = number1 + number2;
      break;
    case "-":
      resultDisplay.value = number1 - number2;
      break;
    case "*":
      resultDisplay.value = number1 * number2;
      break;
    case "/":
      resultDisplay.value = number1 / number2;
      break;
    default:
      console.log("Something missing");
  }
});

// ================================================================================================================//
// Q4

let myword = "programming"
array = myword.split("")
array.reverse("")
myword = array.join("")
console.log(myword);

// ================================================================================================================//
// Q5

let thing1 = [
  firstName = "Mish-Al",
  dob = "2001-05-31",
  age = 2023 - 2001,
  bday = 31 - 29
]
let thing2 = [
  firstName = "Migel",
  dob = "2004-05-31",
  age = 2023 - 2004,
  bday = 21 - 10
]
console.log(thing1, thing2);