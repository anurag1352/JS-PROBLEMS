//Q.1 => Declare a variable username and assign your name.
console.log("anurag");

//Q.2 => Create a variable year and assign the current year to it.
let year = 2025;
console.log(year);

//Q.3 => Create a variable isLoggedIn and set it to false.
let isLoggedIn = false;
console.log(isLoggedIn);

//Q.4 => Create a variable country, assign any country, then change its value.
let country = "United-State";
country = "India";
console.log(country);

//Q.5 => Declare firstName and lastName, then create a full name by combining them.
let firstName = "Anurag";
let lastName = "Sharma";
let fullName = firstName + " " + lastName;
console.log(fullName);

//Q.6 => Create variables num1 and num2, assign numbers, and calculate their sum in total.
let num1 = 20;
let num2 = 30;
console.log(num1 + num2);

//Q.7 => Create length and width, and calculate the area of a rectangle.
let length = 20;
let width = 10;
let area = length * width;
console.log("Area of Rectangle : ", area);

//Q.8 => Create totalMarks and subjects, and calculate averageMarks.
let totalMarks = 297;
let subjects = 5;
let percentage = totalMarks / subjects;
console.log(percentage);

//Q.9 => Declare one variable each of type string, number, boolean, and undefined. Use typeof to log their types.
let str = "anurag";
let num = 999;
let bool = true;
let user;
console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof user);

//Q.10 => Swap values (without using a third variable): Let a = 3 and b = 7. Swap their values.
let a = 3;
let b = 7;
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);

//Q.11 => Convert 30°C to Fahrenheit and store it in fahrenheit.
let celcius = 30;
let fahrenheit = (celcius * 9/5) + 32;
console.log(fahrenheit);

//Q.12 => Given weight in kg and height in meters, calculate and store BMI.
let weight = 90;
let meter = 800;
let bmi = (weight  / meter*meter);
console.log(bmi);

//Q.13 => Create a variable radius and compute the area using πr².
let radius = 20;
const pi = 3.14;
let circle = (pi * radius*radius);
console.log(circle);

//Q.14 => Use backticks to create a sentence using variables: name, age, and hobby.
let myName = "anurag";
let age = 20;
let hobby = "Travelling";
console.log(`My name is ${myName} and i'm ${age} years old and my hobby is ${hobby}.`);

//Q.15 => Create a variable result that adds a number and a string (e.g. 10 + "5"). Log the result and its type.
let number = 78;
let number2 = "0.9";
let result = number + number2;
console.log(result); 
console.log(typeof result); 

//Q.16 => Convert a string "true" and a number 1 to Boolean values using Boolean() function.
let str2 = "true";
let nums = 1;

let boolFromString = Boolean(str2);
let boolFromNumber = Boolean(nums);

console.log(boolFromString);
console.log(boolFromNumber);

//Q.17 => Create two variables: one with null, one declared but not assigned. Log both and check their types.
let first = null;
let second;
console.log(first);
console.log( typeof first);

console.log(second);
console.log(typeof second);

//Q.18 => Declare a variable quantity = 3, item = "apple". Create a sentence like: "You bought 3 apples."
let quantity = 3;
let item = "apples";
console.log(`You bought ${quantity} ${item}.`);

//Q.19 => Given price = 100 and discountPercent = 15, calculate and store the discounted price.
let price = 100;
let discountPercent = 15;
let discountedAmount = (price * discountPercent) / 100;
let discountedPrice = price - discountedAmount;
console.log(discountedPrice);