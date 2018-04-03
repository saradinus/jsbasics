/* 
Created while watching tutorial Wake Up & Code
*/

// First part
console.log("Hello world");

var name = "David";
var cityWhereILive = "Lublin";
var year = 2018;

console.log("My name is " + name + " and I live in " + cityWhereILive + " and I it's " + year + " now.");

let month = "January";
console.log(month);
month = "Febuary";
console.log(month);

const surname = "Gawalkiewicz";
console.log(surname);

let isWeatherGood = true;
console.log(isWeatherGood);

let myHobby;
console.log(myHobby);
myHobby = "programming";
console.log(myHobby);

let number1 = 5;
let number2 = 7;
console.log(number1 + number2);

// Second part 

let fruits = ["apple", "banana", "orange"];
console.log(fruits);
console.log(fruits[1]);

let mixed = [2, "happy", true];
console.log(mixed);
console.log(mixed.length);
console.log(mixed[mixed.length-2]);
console.log(mixed.indexOf("happy"));
console.log(typeof(name));
console.log(typeof(year));

if (isWeatherGood === true) {
    console.log("Weather is good");
}
else {
    console.log("Weather is baaad...");
}

if (number1 > number2) {
    console.log("No 1 is bigger");
} 
else if (number1 === number2) {
    console.log("Numbers are even");
}
else {
    console.log("No 2 is bigger");
}

for (let i = 1; i <= 5; i++){
  console.log("Go, go Power Rangers!");
} 

let myNumber = 0;

for (let i = 1; i <= 10; i++) {
    myNumber = myNumber + 1;
    console.log("My number equals to " + myNumber);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}