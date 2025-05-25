//Q.1 => Create an array with "apple", "banana", and "cherry". Print it.
let fruits = ["apple", "banana", "cherry"];
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
