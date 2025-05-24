//Q.1 => Create a string variable and print its length.
let user = "Anurag";
console.log(user.length);

//Q.2 => Convert a string like "hello world" to uppercase.
let upper = "hello world";
console.log(upper.toUpperCase());

//Q.3 => Convert "JavaScript" to lowercase.
let lang = "JAVASCRIPT";
console.log(lang.toLowerCase());

//Q.4 => Join two strings "Good" and "Morning" using + or .concat().
let str1 = "Good";
let str2 = "Morning";
let finalStr = str1 + str2;
console.log("using + ",finalStr);

let join = str1 .concat(str2);
console.log("using concat", join);

//Q.5 => Print the first and last character of a string
console.log(user[0]);
console.log(user[5]);

//Q.6 => Check if the string "apple" contains "pp" using .includes().
let str = "apple";
let check = str.includes("pp");
console.log(check);

//Q.7 => Use .slice() to extract "Script" from "JavaScript".
let cut = lang.slice(4,10);
console.log(cut);

//Q.8 => find the index of "@“ in "test@example.com".
let mail = "test@example.com";
let value = mail.indexOf("@");
console.log(value);

//Q.9 => Replace "bad" with "good" in the string "This is a bad idea".
let string = "this is a bad idea";
let changeStr = string.replace("bad", "good");
console.log(changeStr);

//Q.10 => Repeat "ha" 5 times using .repeat()
let char = "ha";
let repeatingChr = char.repeat(5);
console.log(repeatingChr);

//Q.11 => Remove leading and trailing spaces from " hello " using .trim().
let x = "     hello   ";
let triming = x.trim();
console.log(triming);

//Q.12 => Count the number of characters in a sentence excluding spaces.
function countSpace(str) {
    let noSpace = str.split(" ").join("");
    return noSpace.length;
}
let sentence = "hello this is the hahhaha funny lol this is nothing dude.";
console.log("count :",countSpace(sentence));

//Q.13 => Create a function to reverse any given string (e.g., "hello" → "olleh").
function reverseString(str) {
    let ulta = str.split("").reverse().join("");
    return ulta;
}
console.log(reverseString("hello"));

//Q.14 => Capitalize the first letter of a word (e.g., "hello" → "Hello").
function capitalizeword(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalizeword("hello"));