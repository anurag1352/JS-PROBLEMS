//Q.1 => Write a program to check if a given number is even or odd.
let number = 201;
if (number % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

//Q.2 => Take two numbers and print the greater one.
let a = 90;
let b = 30;
if (a > b) {
  console.log("a is greater than b");
} else if (a === b) {
  console.log("a and b are equal");
} else {
  console.log("b is greater than a");
}

//Q.3 => Check if a number is positive, negative, or zero.
let num = 0;
if (num > 0) {
  console.log("Number are positive");
} else if (num === 0) {
  console.log("Number are zero");
} else {
  console.log("Number are negatve");
}

//Q.4 => Write a program to check whether a year is a leap year or not.
let year = 2020;
if (year % 4 === 0) {
  console.log("This is a leap year");
} else {
  console.log("This is not a leap year");
}

//Q.5 =>  Grade calculator:
let marks = 87;
if (marks >= 90) {
  console.log("Grade : A");
} else if (marks < 90 && marks >= 80) {
  console.log("Grade : B");
} else if (marks < 80 && marks >= 70) {
  console.log("Grade : C");
} else if (marks < 70 && marks >= 60) {
  console.log("Grade : D");
} else {
  console.log("Grade : F");
}

//Q.6 => Check if a person is eligible to vote (age >= 18).
let age = 99;
if (age >= 18) {
  console.log("You are eligible to vote");
} else if (age < 0) {
  console.log("Enter a valid age number");
} else {
  console.log("You are not eligible to vote");
}

//Q.7 =>  If a number is divisible by both 3 and 5, print "FizzBuzz".If only 3, print "Fizz". If only 5, print "Buzz".
let value = 15;
if (value % 3 === 0 && value % 5 === 0) {
  console.log("FizzBuzz");
} else if (value % 3 === 0) {
  console.log("Fizz");
} else if (value % 5 === 0) {
  console.log("Buzz");
} else {
  console.log("Number not divisible by both value");
}

//Q.8 => Take two variables, username and password. If both match preset values, print “Login successful”; else print an error.
// let userName = "anurag";
// let password = "1234";

// let username = prompt("Enter userName");
// let pwd = prompt("Enter Password");

// if(username === userName && pwd === password){
//     console.log("Login successful");
// }else{
//     console.log("Error");
// }

//Q.9 => Given three angles, check if they form a valid triangle (sum should be 180).
let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

let sum = angle1 + angle2 + angle3;

if (sum === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
  console.log("valid triangle");
} else {
  console.log("Invalid Triangle");
}

//Q.10 => Write a program to find the smallest among three given numbers.
let x = 1;
let y = 3;
let z = 7;

if (x < y && z > x) {
  console.log("X is small");
} else if (y < z && x > y) {
  console.log("Y is small");
} else if (z < x && y > z) {
  console.log("Z is small");
} else {
  console.log("error");
}

// Q.11 => Given a variable signalColor, use conditional statements to print:
let signalColor = "green";
if (signalColor === "red") {
  console.log("Stop");
} else if (signalColor === "yellow") {
  console.log("Ready");
} else if (signalColor === "green") {
  console.log("Go");
} else {
  console.log("Invalid signal");
}

//Q.12 => Check if character is vowel or consonant:
// let input = prompt("Enter a single alphabet");

// if (input.length === 1 && /[a-zA-Z]/.test(input)) {
//   if (
//     input === "a" ||
//     input === "e" ||
//     input === "i" ||
//     input === "o" ||
//     input === "u" ||
//     input === "A" ||
//     input === "E" ||
//     input === "I" ||
//     input === "O" ||
//     input === "U"
//   ) {
//     console.log("Vowel");
//   } else {
//     console.log("Consonant");
//   }
// } else {
//   console.log("Invalid input. Please enter a single alphabet character.");
// }

//Q.13 => Use the ternary operator to print "Minor" if age < 18, else "Adult".
let userAge = 19;
let output = userAge >= 18 ? "Adult" : "Minor" ;
console.log(output);

//Q.14 => Check if a number is between 10 and 50 (inclusive).
let range = 50;
if(range >= 1 && range <= 50){
    console.log("Range exists 1 to 50");
}else{
    console.log("Range doesn't exists");
}

//Q.15 => Eligibility for scholarship:
let mark = 89;
let income = 6000;
if(mark >= 85 && income < 50000){
    console.log("You are eligible for scholrship");
}else{
    console.log("You are not eligible");
}