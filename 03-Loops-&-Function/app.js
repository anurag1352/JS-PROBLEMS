//Q.1 => Use a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Q.2 => Take a number n and calculate the sum 1 + 2 + ... + n using a loop.
// let n = parseInt(prompt("Enter a number"));
// let sum = 0;

// for(let i =1; i <= n; i++){
//     sum += i;
// }
// console.log(`the sum of 1 to ${n} is ${sum}`);

//Q.3 => Use a loop to print all even numbers between 1 and 50.
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}

//Q.4 => Print the multiplication table of a given number (e.g., 5 × 1 to 5 × 10).
// let n = parseInt(prompt("Enter a value"));
// for(let i = n; i <=n*10; i += n ){
//     console.log(i);
// }

//Q.5 => Use a loop to find the factorial of a given number (e.g., 5! = 5×4×3×2×1).
// let n = parseInt(prompt("Enter a number"));
// let sum = 1;
// for(let i = 1; i <=n ; i++){
//     sum *= i;
// }
// console.log(sum);

//Q.6 => Print numbers from 100 to 1 using a loop.
for (let i = 100; i >= 1; i--) {
  console.log(i);
}

//Q.7 => Print all odd numbers between 1 and 20:
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(`${i} odd`);
  }
}

//Q.8 => Find sum of digits : Input: 1234 → Output: 1 + 2 + 3 + 4 = 10;
// let num = parseInt(prompt("Enter a number:"));
// let sum = 0;

// while (num > 0) {
//     let digit = num % 10;     // Get the last digit
//     sum += digit;             // Add it to sum
//     num = Math.floor(num / 10); // Remove the last digit
// }
// console.log("Sum of digits is: " + sum);

//Q.9 => Count digits in a number: Input: 1056 → Output: 4;
// let num = parseInt(prompt("Enter a number:"));
// let count = 0;

// if (num === 0) {
//   count = 1;
// } else {
//   while (num !== 0) {
//     num = Math.floor(num / 10);
//     count++;
//   }
// }
// console.log("Number of digits:", count);

//Q.10 => Create a function greet(name) that prints "Hello, name!".
function greet(name){
    return "hello world";
}
console.log(greet(name));

//Q.11 => Write a function that takes two numbers and returns their sum.
function sum(a,b){
    return a + b;
}
console.log(sum(20,1));

//Q.12 => Create a function that returns the largest of three numbers.
function max(a,b,c){
    if(a > b && a >= c){
        return a
    }else if(b > a && b >= c){
        return b;
    }else {
        return c
    }
}
let largest = max(19,111,240);
console.log("largest number is", largest);

//Q.13 => Create a function isEven(num) that returns true or false.
function isEven(num) {
    if(num %2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(-90));

//Q.14 => Write a function power(base, exponent) that returns baseⁿ
function power(base , exponent) {
    let result = 1;

    for(let i = 1; i <= exponent; i++){
        result *= base;
    }
    return result;
}
console.log(power(2,3));

//Q.15 => toFahrenheit(celsius) should return the converted temperature.
function temperature(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(temperature(25));