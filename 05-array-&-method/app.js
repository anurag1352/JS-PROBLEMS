//Q.1 => Create an array with "apple", "banana", and "cherry". Print it.
let fruits = ["cherry", "banana", "apple"];
console.log(fruits);

//Q.2 => Print the first and last element of an array.
function print(arr) {
    if(arr.length === 0) {
        console.log("Array is empety");
        return;
    }
    console.log("First element :", arr[0]);
    console.log("Last element :", arr[arr.length - 1]);
}
let arr = ["anurag", "sharma", "haryana"];
print(arr);

//Q.3 => Use .push() to add "orange" to an existing array.
fruits.push("orange");
console.log(fruits);

//Q.4 => Use .unshift() to add "kiwi" at the beginning of an array.
fruits.unshift("kiwi");
console.log(fruits);

//Q.5 => Use .pop() to remove the last item and print the array.
fruits.pop();
console.log(fruits);

//Q.6 => Use .shift() to remove the first item and print the array.
fruits.shift();
console.log(fruits);

//Q.7 => Print the number of elements in an array.
console.log(fruits.length);

//Q.8 => Use a for loop or forEach() to print each element of an array.
let str = ["delhi","noida","pune"];
for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}

str.forEach(function (value) {
    console.log(value );
});

//Q.9 => Use .includes() to check if "banana" exists in the array.
let check = fruits.includes("banana");
console.log(check);

//Q.10 => Use .join() to join all elements into a string separated by -.
let num = [10,20,30,40];
let add = num.join("-");
console.log(add);

//Q.11 => Use .filter() to create a new array with only numbers > 10.
let numbers = [1,2,3,4,5,29,88,65,10,11];
let output = numbers.filter(function(num) {
    return num > 10
})
console.log(output);

//Q.12 => Use .map() to return a new array where each number is doubled.
let double = numbers.map( function (num) {
    return num * 2
})
console.log(double);

//Q.13 => Use .reduce() to find the total sum of numbers in an array.
let sum = numbers.reduce(function(num1 , num2) {
    return num1 + num2
})
console.log(sum);

//Q.14 => Sort [5, 2, 9, 1] into [1, 2, 5, 9].
let nums = [5,3,9,1];
let set = nums.sort();
console.log(set);

//Q.15 => Sort ["banana", "apple", "mango"].
let adjust = fruits.sort();
console.log(adjust);


//Q.16 => Use .reverse() to reverse an array.
let ulta = fruits.reverse();
console.log(ulta);

//Q.17 => Remove 2 elements starting from index 1.
let number = [10,20,30,40,50];
number.splice(1,2);
console.log(number);

//Q.18 => Use .slice() to copy first 3 elements of an array.
number.slice(3);
console.log(number);

//Q.19 => Use .indexOf() to find the index of "apple".
let index = fruits.indexOf("apple");
console.log(index);

//Q20 => Convert [1, 2, [3, 4], 5] into [1, 2, 3, 4, 5] using .flat().
let nest = [1,2,[3,4],5];
let newNwst = nest.flat();
console.log(newNwst);