// let username;

// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "Hello " + username;
// }



// let age = window.prompt("How old are you?");

// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);
// age += 1;

// console.log("Happy birthday! You are", age, "years old")



// let x;
// let y;
// let z;

// x = Number("3.14");
// y = String(3.14);
// z = Boolean("pizza")

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);



// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log("The circumference is:", circumference);



// let x = 3.14;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;

// // x = Math.round(x);
// // x = Math.floor(x);
// // x = Math.ceil(x);
// // x = Math.pow(x, 2)
// // x = Math.sqrt(x);
// // x = Math.abs(x);
// // maximum = Math.max(x, y, z);
// // minimum = Math.min(x, y, z);
// x = Math.PI;


// console.log(x);



// hypotenuse calc practice program

// let a;
// let b;
// let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b)

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

// console.log("side C: ", c);


// document.getElementById("submitButton").onclick = function () {

//     a = document.getElementById("aTextBox").value;
//     a = Number(a); //convert value to number type

//     b = document.getElementById("bTextBox").value;
//     b = Number(b)

//     c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

//     document.getElementById("cLabel").innerHTML = "Side C: " + c;
// }



// counter program

// let count = 0;

// document.getElementById("decreaseBtn").onclick = function(){
//     count -= 1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function(){
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function(){
//     count += 1;
//     document.getElementById("countLabel").innerHTML = count;
// }



// random number generator

// let x;
// let y;
// let z;

// document.getElementById("rollButton").onclick = function () {

//     x = Math.floor(Math.random() * 6) + 1;
//     y = Math.floor(Math.random() * 6) + 1;
//     z = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("xLabel").innerHTML = x;
//     document.getElementById("yLabel").innerHTML = y;
//     document.getElementById("zLabel").innerHTML = z;
// }



// useful string properties & methods

// let userName = "Cong Tuan";
// let phoneNumber = "123-456-7890";

// console.log(userName.length);
// console.log(userName.charAt(0));
// console.log(userName.indexOf("n"));
// console.log(userName.lastIndexOf("n"));
// userName = userName.trim(); // get rid of empty spaces before and after any charactes
// userName = userName.toUpperCase();
// userName = userName.toLocaleLowerCase();

// phoneNumber = phoneNumber.replaceAll("-","");

// console.log(phoneNumber);



// string slicing

// let fullName = "Huynh Man";
// let firstName;
// let lastName;

// normal way
// firstName = fullName.slice(0,4);
// lastName = fullName.slice(5);

// better way
// firstName = fullName.slice(0, fullName.indexOf(" ")); 
// lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);



// method chaining

// let useName = "cong";

// let letter = useName.charAt(0).toLocaleUpperCase().trim();

// console.log(letter);



// if statements

// let age = 65;

// if(age >= 65){
//     console.log("You are a senior citizen!")
// }
// else if(age >= 18 ){
//     console.log("You are an adult!");
// }
// else if(age < 0){
//     console.log("You have not been born yet!")
// }
// else{
//     console.log("You are a child!");
// }

// let online = false;

// if (online) {
//     console.log("You are online!");
// }
// else {
//     console.log("You are offline!");
// }



// checked property

// document.getElementById("myButton").onclick = function () {

//     const myCheckBox = document.getElementById("myCheckBox")
//     const visaBtn = document.getElementById("visaBtn");
//     const masterCardBtn = document.getElementById("masterCardBtn");
//     const paypalBtn = document.getElementById("paypalBtn");


//     if (myCheckBox.checked) {
//         console.log("You are subcribed!");
//     } else {
//         console.log("You are not subcribed!");
//     }

//     if(visaBtn.checked){
//         console.log("You are paying with a Visa!");
//     }
//     else if(masterCardBtn.checked){
//         console.log("You are paying with a Master Card!");
//     }
//     else if(paypalBtn.checked){
//         console.log("You are paying with PayPal!");
//     }
//     else{
//         console.log("You must select a payment type!");
//     }
// }



// switches

// let grade = 89;

// switch (true) {
//     case grade >= 90:
//         console.log("You did great!");;
//         break;
//     case grade >= 80:
//         console.log("You did good!");;
//         break;
//     case grade >= 70:
//         console.log("You did okay!");;
//         break;
//     case grade >= 60:
//         console.log("You passed ... barely!");;
//         break;
//     case grade < 60:
//         console.log("You failed!");
//         break;
//     default:
//         console.log(grade, "is not a letter grade!");
// }



// AND OR logical operators

// let temp = 15;
// let sunny = false;

// if(temp > 0 && temp < 30 && sunny){
//     console.log("The weather is good!");
// }else{
//     console.log("The weather is bad!");
// }



// ! NOT logical operator

// let temp = 15;
// let sunny = false;

// if(!(temp > 0)){
//     console.log("It's cold out side");
// }else{
//     console.log("It's warm outside");
// }

// if(!sunny){
//     console.log("It's cloudy outside");
// }else{
//     console.log("It's sunny outside");
// }



// while loop

// let useName = "";

// while (useName == "" || useName == null) {
//     useName = window.prompt("Enter yor name");
// }

// console.log("Hello", useName);



// do while loop
// (do one time before go to while loop)

// let useName = "";

// do {
//     useName = window.prompt("Enter yor name");
// }while (useName == "") 

// console.log("Hello", useName);



// for loops

// for(let i = 10; i > 0; i -= 1){
//     console.log(i);
// }

// console.log("Happy new year!");



// break continue statements
// (break =  break out of a loop entirely)
// (continue =  skip an interation of a loop)


// for(let i = 1; i <= 20; i += 1){
//     if(i == 13){
//         // break
//         continue;
//     }
//     console.log(i);
// }



// nested loop

// let symbol = window.prompt("Enter a symbol to use")
// let rows = window.prompt("Enter # of rows");
// let colums = window.prompt("Enter # of colums");

// for (let i = 1; i <= rows; i += 1) {
//     for (let j = 1; j <= colums; j += 1) {
//         document.getElementById("myRectangle").innerHTML += symbol;
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>";
// }



// function 

// startProgram();

// function startProgram(){
//     let useName = "Tuan";
//     let age = 23;

//     happyBirthday(useName, age);
// }

// function happyBirthday(useName, age) {
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday dear", useName);
//     console.log("Happy birthday to you!");
//     console.log("You are", age, "years old!");
// }



// return statemante

// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = getArea(width, height);

// console.log("The area is: ", area);

// function getArea(width, height){
//     return width * height;
// }



// ternary operaor
// (Shortcut for an 'if/else' statement)
// (Take 3 operands)

// 1. a condition with ?
// 2. expression if True :
// 3. expression if False

// example: condition ? exprIfTure : exprIfFalse

// let adult = checkAge(21);
// console.log(adult)

// function checkAge(age) {

//     return age >= 18 ? true : false; // example
// }

// checkWinner(false);

// function checkWinner(win){
//     win ? console.log("You win!") : console.log("You lose!")
// }



// var vs let
// let = variables are limited to a block scope {}
// var = variables are limited to a function(){}

// let name = "Tuan";

// doSomething();

// function doSomething() {

//     for (var i = 1; i <= 3; i += 1) {
//         // console.log(i);
//     }
// }

// console.log(i);



// template literals

// let userName = "Tuan"
// let items = 3;
// let total = 75;

// console.log("Hello", useName);
// console.log("You have", items, "items in your cart");
// console.log("Your total is $", total);

// console.log(`Hello ${useName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your total is $${total}`);

// let text =
//     `Hello ${userName}<br>
// You have ${items} items in your cart<br>
// Your total is $${total}<br>`;

// document.getElementById("myLabel").innerHTML = text;



// format currency

// let myNum = 100;

// myNum = myNum.toLocaleString("en-US"); // US English
// myNum = myNum.toLocaleString("hi-In"); // Hindi
// myNum = myNum.toLocaleString("de-DE"); // standard German

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

// myNum = myNum.toLocaleString(undefined, {style: "percent"});

// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});


// console.log(myNum)



// number guessing game

// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function () {

//     let guess = document.getElementById("guessField").value
//     guesses += 1;

//     if (guess == answer) {
//         alert(`${answer} is the #. It took you ${guesses} guesses`)
//     } else if (guess < answer) {
//         alert("Too small!")
//     }else{
//         alert("Too large");
//     }
// }



// temperature conversion program

// document.getElementById("submitButton").onclick = function(){

//     let temp;

//     if(document.getElementById("cButton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toCelsius(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°C";
//     }else if(document.getElementById("fButton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toFahrenheit(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°F";
//     }else{
//         document.getElementById("tempLabel").innerHTML = "Select a unit"
//     }
// }

// function toCelsius(temp) {
//     return ((temp - 32) * (5 / 9));
// }

// function toFahrenheit(temp) {
//     return (temp * 9 / 5 + 32)
// }



// arrays

// let fruits = ["apple", "orange", "banana"];

// fruits[2] = "coconut";

// fruits.push("lemon");       //add an element
// fruits.pop();               // remove last element
// fruits.unshift("mango");    // add element to begining
// fruits.shift();             // remove element from begining

// let length = fruits.length;
// let index = fruits.indexOf("kiwi");

// console.log(index);



// loop through an array

// let prices = [5, 10, 15, 20, 25];

// for (let i = prices.length - 1; i >= 0; i -= 1) {
//     console.log(prices[i]);
// }

// advanced way
// for(let price of prices){
//     console.log(price);
// }



// sort an aray ò strings

// let fruits = ["banana", "apple", "orange", "mango"];

// fruits = fruits.sort();
// fruits = fruits.sort().reverse();

// for(let fruit of fruits){
//     console.log(fruit);
// }



// 2D array = An array of arrays

// let fruits = ["apples", "oranges", "banana"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats = ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];

// groceryList[2][2] = "steak"

// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }



// spread operator
// ...

// let userName= "Truong Tuan"
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let maximum = Math.max(...numbers);
// console.log(maximum);

// let class1 = ["Spongebob", "Patrick", "Sandy"];
// let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

// class1.push(...class2);

// console.log(...class1);



// rest parameters
// ...

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b, c, d, e));

// function sum(...numbers) {
//     let total = 0;
//     for (let number of numbers) {
//         total += number
//     }
//     return total
// }



// callback = a function passed as an argument
//            to another function

// sum(2, 3, displayDOM);

// function sum(x, y, callback) { 
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(output) {
//     console.log(output);
// }

// function displayDOM(output) {
//     document.getElementById("myLabel").innerHTML = output;
// }



// array.forEach() = executes a provided callback function
//                   once for each array element

// let students = ["spongebob", "patrick", "squidward"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array) {
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element) {
//     console.log(element);
// }



//array.map() = excutes a provided callback function
//              once for each array element
//              AND creates a new array

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// cubes.forEach(print);

// function square(element){
//     return Math.pow(element, 2);
// }
// function cube(element){
//     return Math.pow(element, 3);
// }
// function print(element){
//     console.log(element);
// }



// array.filter() = creates a new array with all elements
//                  that pass the text provied by a function

// let ages = [18, 16, 21, 17, 19, 90];
// let adult = ages.filter(checkAge);

// adult.forEach(print);

// function checkAge(element) {
//     return element >= 18;
// }

// function print(element){
//     console.log(element);
// }



// array.reduce() = reduce an array to single value

// let prices = [5, 10, 15, 20, 25, 30];
// let total = prices.reduce(checkOut);

// console.log(`The total is: $${total}`);

// function checkOut(total, element) {
//     return total + element;
// }



// sort an array of numbers

// let grades = [100, 50, 90, 60, 80, 70];

// grades = grades.sort(ascendingSort);

// grades.forEach(print);

// function descendingSort(x, y) {
//     return y - x;
// }

// function ascendingSort(x, y) {
//     return x - y;
// }

// function print(element){
//     console.log(element);
// }



// function expressions = funtion without a name(anonymous function)
//                        avoid polluting the global scope with names
//                        Write it, then forget about it

// const greeting = function () {
//     console.log("Hello!");
// }

// greeting();

// let count = 0

// document.getElementById("increaseButton").onclick = function () {
//     count += 1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// document.getElementById("decreaseButton").onclick = function () {
//     count -= 1;
//     document.getElementById("myLabel").innerHTML = count;
// }



// arrow function experssions = compact alternative to a traditional function expression
// =>

// const greeting = (userName) => console.log(`Hello ${userName}`);

// greeting("Tuan");

// const percent = (x, y) =>  x / y * 100; 

// console.log(`${percent(75, 100)}%`);

// let grades = [100, 50, 90, 60, 80, 70];

// grades.sort((x, y) => y - x );
// grades.forEach((element) => console.log(element));



// shuffle an array

// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

// shuffle(cards);

// console.log(cards[0]);

// cards.forEach(card => console.log(card));

// function shuffle(array) {
//     let currentIndex = array.length;

//     while (currentIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex -= 1;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }

//     return array;
// }



// nested functions = Funtion inside other functions.
//                    Outer functions have access to inner functions
//                    Inner functions are "hidden" from outside
//                    used in closures (future video topic)

// let userName = "Tuan";
// let userInbox = "0";

// login();

// function login() {
//     displayUserName();
//     displayUserInbox();

//     function displayUserName() {
//         console.log(`Welcome ${userName}`);
//     }
//     function displayUserInbox() {
//         console.log(`You have ${userInbox} new messages`);
//     }
// }



// maps = object that holds key-value pairs of any data type

// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10],
//     ["underwear", 50]
// ]);

// store.get("t-shirt");
// store.set("hat", 40);
// store.delete("hat");
// console.log(store.has("underwear"));
// console.log(store.size);

// store.forEach((value, key) => console.log(`${key} $${value}`));



// objects = A group of properties and methods
//           properties = what an object has
//           methods = what an object can do
//           use . to access properties/methods

// const car1 = {

//     //properties

//     model: "Mustang",
//     color: "red",
//     year: 2023,


//     //methods

//     drive: function () {
//         console.log("You drive the car");
//     },
//     brake: function () {
//         console.log("You step on the brakes");
//     }
// }

// const car2 = {
//     model: "Corvette",
//     color: "blue",
//     year: 2024,

//     drive: function () {
//         console.log("You drive the car");
//     },
//     brake: function () {
//         console.log("You step on the brakes");
//     }
// }

//use . to access properties/methods

// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

// car2.drive();
// car2.brake();



// this keyword = reference to a particular object
//                the object depends on the immediate context

// this.name = "myCoolWindow";

// console.log(this.name);

// const car1 = {
//     model: "Mustang",
//     color: "red",
//     year: 2023,

//     drive: function () {
//         console.log(`You drive the ${this.model}`);
//     }
// }

// const car2 = {
//     model: "Corvette",
//     color: "blue",
//     year: 2024,

//     drive: function () {
//         console.log(`You drive the ${this.model}`);
//     }
// }

// car1.drive();
// car2.drive();



// classes = a blueprint for creating onjects
//           define what properties and methods hey have
//           use a constructor for unique properties

// class Player{
//     score = 0;

//     pause(){
//         console.log("You paused the game");
//     }
//     exit(){
//         console.log("You exited the game");
//     }
// }

// const player1 = new Player();
// const player2 = new Player();
// const player3 = new Player();
// const player4 = new Player();

// player1.score += 1;

// console.log(player1.score);
// console.log(player2.score);

// player1.pause();
// player2.exit();



// constructor = a special method of a class,
//               accepts arguments and assigns properties

// class Student {

//     constructor(name, age, gpa) {
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }
//     study() {
//         console.log(`${this.name} is studying`);
//     }
// }

// const student1 = new Student("Spongebob", 30, 3.2);
// const student2 = new Student("Patrick", 35, 1.5);
// const student3 = new Student("Sandy", 27, 4.0);


// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);
// student2.study();

// console.log(student3.name);
// console.log(student3.age);
// console.log(student3.gpa);
// student3.study();



// static keyword
// static = belong to the class, not the object
//          properties: useful for caches, fixed-configuration
//          methods:    useful for utility functions

// class Car{

//     static numberOfCars = 0;
//     constructor(model){
//         this.model = model;
//         Car.numberOfCars +=1;
//     }

//     static startRace(){
//         console.log("3...2...1...GO!");
//     }
// }

// const car1 = new Car("Mustang");
// const car2 = new Car("Corvette");
// const car3 = new Car("BMW");
// const car4 = new Car("Ferrari");
// const car5 = new Car("Lambo");

// console.log(Car.numberOfCars);

// Car.startRace();



// inheritance = a child class cac inhertit all the 
//               methods and properties from another class

// class Animal {

//     alive = true;

//     eat() {
//         console.log(`This ${this.name} is eatting`);
//     }

//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
//     }

// }

// class Rabbit extends Animal {

//     name = "rabbit";

//     run() {
//         console.log(`This ${this.name} is running`);
//     }
// }

// class Fish extends Animal {

//     name = "fish";

//     swim() {
//         console.log(`This ${this.name} is swimming`);
//     }
// }

// class Hawk extends Animal {

//     name = "hawk";

//     fly() {
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();
// fish.swim();
// hawk.fly();



// supper keyword
// supper = Refers to the parent class.
//          Comonly used to invoke constructor of a parent class

// class Animal {

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Rabbit extends Animal {

//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
// }

// class Fish extends Animal {
//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
// }

// class Hawk extends Animal {
//     constructor(name, age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 40);
// const fish = new Fish("fish", 2, 80);
// const hawl = new Hawk("hawk", 3, 200);

// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);



// getter $ setter
// get = binds an object property to a function
//       when that property is accessed
// set = binds an object property to a function
//       when that property is assigned a value

// class Car {
//     constructor(power) {
//         this._gas = 25;
//         this._power = power;
//     }
//     get power() {
//         return `${this._power}hp`;
//     }
//     get gas() {
//         return `${this._gas}L (${this._gas / 50 * 100}%)`;
//     }
//     set gas(value) {
//         if (value > 50) {
//             value = 50;
//         } else if (value < 0) {
//             value = 0;
//         }
//         this._gas = value;
//     }
// }

// let car = new Car(400);

// car.gas = -200;

// console.log(car.power);
// console.log(car.gas);



// objects as arguments

// class Car {

//     constructor(model, year, color) {
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");

// changeColor(car3, "gold");
// displayInfo(car3);

// function displayInfo(car){
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }

// function changeColor(car, color){
//     car.color = color;
// }



// array of objects

// class Car {

//     constructor(model, year, color) {
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }

//     drive(){
//         console.log(`You drive the ${this.model}`);
//     }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");
// const car4 = new Car("Ferrari", 2025, "white");


// const cars = [car1, car2, car3, car4];

// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();

// startRace(cars);

// function startRace(cars){
//     for(const car of cars){
//         car.drive();
//     }
// }



// anonymous objects = Objects without a name
//                     Not directly referenced
//                     Less syntax. No need for unique names

// class Card {
//     constructor(value, suit) {
//         this.value = value;
//         this.suit = suit;
//     }
// }

// let cards = [
//     new Card("A", "Hearts"),
//     new Card("A", "Spades"),
//     new Card("A", "Diamonds"),
//     new Card("A", "Clubs"),
//     new Card("2", "Hearts"),
//     new Card("2", "Spades"),
//     new Card("2", "Diamonds"),
//     new Card("2", "Clubs"),
// ];

// console.log(cards[0].value + cards[0].suit);

// cards.forEach(card => console.log(`${card.value} ${card.suit}`));



// error handling 
// error = object with a description of somthing went wrong

// throw = executes a user-defined error

//EX
//         Can't open a file
//         Lose connection
//         User types incorrect input
//         Type Error

// try {
//     let x = window.prompt("Enter a #");
//     x = Number(x);

//     if(isNaN(x)) throw "That wasn't a number!";
//     if(x == "") throw "That was empty";

//     console.log(`${x} is a number`)
// }
// catch (error) {
//     console.log(error);
// }
// finally{
//     console.log("This alaways executes")
// }



//  setTimeout() = invokes a function after a number of miliseconds
//                 asynchronous function(does not pause execution)

// let item = "cryptocurrency";
// let price = 420.69;

// let timer1 = setTimeout(firstMessage, 3000, item, price);
// let timer2 = setTimeout(secondMessage, 6000);
// let timer3 = setTimeout(thirdMessage, 9000);

// function firstMessage(item, price){
//     alert(`Buy this ${item} for $${price}`);
// }
// function secondMessage(){
//     alert(`This is not a scam!`);
// }
// function thirdMessage(){
//     alert(`DO ITT!`);
// }

// document.getElementById("myButton").onclick = function(){
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert(`Thanks for buying <3`);
// }



// setInterval() = invokes a function repeatedly after a number of miliseconds
//                 asynchronous function(does not pause execution)

// let count = 0;
// let max = window.prompt("count up to what number #?");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp() {
//     count += 1;
//     console.log(count);
//     if (count >= max) {
//         clearInterval(myTimer);
//     }
// }



// Date onjects = used to work with dates & times

// let date = new Date();
// let date = new Date(2023, 0, 1, 2, 3, 4, 5);
// let date = new Date("Mar 1, 2023 00:00:00");

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let ms = date.getMilliseconds();

// date.setFullYear(2024);
// date.setMonth(11);
// date.setDate(31);
// date.setHours(23);
// date.setMinutes(1);
// date.setSeconds(30);
// date.getMilliseconds(0);

// date = date.toLocaleString();
// document.getElementById("myLabel").innerHTML = formatTime(date);

// function formatDate(date){
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     return `${month}/${day}/${year}`
// }
// function formatTime(date){
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amOrPm = hours >= 12 ? "pm" : "am";

//     hours = (hours % 12) || 12;

//     return `${hours}:${minutes}:${seconds} ${amOrPm}`;
// }



// clock program

// const myLabel = document.getElementById("myLabel");

// update();
// setInterval(update, 1000);

// function update(){

//     let date = new Date();
//     myLabel.innerHTML = formatTime(date);

//     function formatTime(date){
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let amOrPm = hours >= 12 ? "pm" : "am";

//         hours = (hours % 12) || 12;

//         hours = formatZeroes(hours);
//         minutes = formatZeroes(minutes);
//         seconds = formatZeroes(seconds);

//         return `${hours}:${minutes}:${seconds} ${amOrPm}`;
//     }

//     function formatZeroes(time){
//         time = time.toString();
//         return time.length < 2 ? "0" + time : time;
//     }
// }



// asynchronous
// synchronous code = In an ordered sequence.
//                    Step-by-step linear instruction
//                    (start now, finish now)

// asynchronous code = Out of sequence.
//                     Ex. Access a database
//                         Fetch a file
//                         Task that take time
//                     (start now, finish sometime later) 

// console.log("START");
// console.log("This step is synchronous");
// setTimeout(() => console.log("This is asynchronous"), 5000);
// console.log("END");



// console.time() = starts a timer you can use to
//                  track how long an operation takes
//                  Give each timer unique name.

//start
// console.time("Respone time");

// alert("CLICK THE OK BUTTON!");
// setTimeout(() => console.log("Hello"), 3000);

//end
// console.timeEnd("Respone time");



// promise = object that encapsulates the result of an asynchronous operation
//           let asynchronous methods return values like synchronous methods
//           "I promise to return something in the future"

//           the STATE is 'pending' then: 'fullfilled' or 'rejected'
//           the RESULT is what can be returned
//           2 parts producing & consuming

// const promise = new Promise((resolve, reject) => {

//     let fileLoaded = false;

//     if(fileLoaded){
//         resolve("File loaded");
//     }
//     else{
//         reject("File NOT loaded");
//     }
// });

// promise.then(value => console.log(value))
//         .catch(error => console.log(error));

// const wait = time => new Promise((resolve) => {
//     setTimeout(resolve, time);
// });

// wait(3000).then(() => console.log("Thanks for waiting!"))



// async = makes a function return a Promise

// async function loadFile() {

//     let fileLoaded = false;

//     if (fileLoaded) {
//         return("File loaded");
//     }
//     else {
//         throw("File NOT loaded");
//     }
// }

// loadFile().then(value => console.log(value))
//     .catch(error => console.log(error));



// await = makes an async function wait for the Promise

// async function loadFile() {

//     let fileLoaded = false;

//     if (fileLoaded) {
//         return ("File loaded");
//     }
//     else {
//         throw ("File NOT loaded");
//     }
// }

// async function startProcess() {
//     try {
//         let message = await loadFile();
//         console.log(message);
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// startProcess();



// ES6 Modules
// The idea behind a module is that it's a file of reusable code
// We can import sections of pre-written code to use whenever
// Great for any general utility values and functions
// Helps to make your code more reusable and maintanable
// Think of modules as seperate chapter of a book

// import { PI, getCircumference, getArea } from "./math_util.js";
// import * as MathUtil from "./math_util.js"

// console.log(MathUtil.PI);

// let circumference = MathUtil.getCircumference(10);
// console.log(circumference);

// let area = MathUtil.getArea(10);
// console.log(area);



// DOM = Document Object Model (API)
//       An iterface for changing the content of a page

// console.dir(document);
// console.log(document.title);
// console.log(document.URL);
// document.title = "Title goes here!";
// document.location = "http://www.google.com"

// document.body.style.backgroundColor = "skyblue";
// document.getElementById("myDiv").innerHTML = "Hello";



// element selectors

// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "lightgreen";

// let fruits = document.getElementsByName("fruits");

// fruits.forEach(fruit => {
//     if (fruit.checked) {
//         console.log(fruit.value);
//     }
// })

// let vegetables = document.getElementsByTagName("li");
// vegetables[2].style.background = "lightgreen";

// let desserts = document.getElementsByClassName("desserts");
// desserts[2].style.backgroundColor = "lightgreen";

// let element = document.querySelector("[for]");
// element.style.backgroundColor = "lightgreen";

// let elements = document.querySelectorAll("[for]");
// elements.forEach(element => {
//     element.style.backgroundColor = "lightgreen";
// })



// DOM traversal

// let elemet = document.querySelector("#fruit");
// let children = Array.from(elemet.children);

// children.forEach(child => child.style.backgroundColor = "lightgreen");

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)



// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter your name");
// document.body.append(nameTag);

// const myList = document.querySelector("#fruit");
// const listItem = document.createElement("li");
// listItem.textContent = "mango";
// // myList.append(listItem);
// // myList.prepend(listItem);
// myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);



// add/Change CSS properties

// const title = document.getElementById("myTitle");

// title.style.backgroundColor = "#222222";
// title.style.color = "rgb(50,200,250)";
// title.style.fontFamily = "consolas";
// title.style.textAlign = "center";
// title.style.border = "2px solid";
// title.style.display = "block";



// events

// const element = document.getElementById("myButton");
// const element = document.body;
// const element = document.getElementById("myText");
// const element = document.getElementById("myDiv");

// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
// element.onmousedown = doSomething;
// element.onmouseup = doSomethingElse;

// function doSomething() {
//     // alert("You did something!");
//     element.style.backgroundColor = "red";
// }

// function doSomethingElse() {
//     // alert("You did something!");
//     element.style.backgroundColor = "lightgreen";
// }



// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different functions

// const innerDiv = document.getElementById("innerDiv");
// const outerDiv = document.getElementById("outerDiv");

// innerDiv.addEventListener("mouseover", changeRed);
// innerDiv.addEventListener("mouseout", changeGreen);

// function changeRed(){
//     innerDiv.style.backgroundColor = "red";
// }

// function changeGreen(){
//     innerDiv.style.backgroundColor = "lightgreen";
// }

// innerDiv.addEventListener("click", changeBule);
// outerDiv.addEventListener("click", changeBule, true);

// function changeBule(){
//     alert(`You selected ${this.id}`);
//     this.style.backgroundColor = "lightblue";
// }



// show/hide HTML elements

// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("#myImg");

// myButton.addEventListener("click", () => {
//     console.log(myImg.style.display);
//     if(myImg.style.visibility == "hidden"){
//         myImg.style.visibility = "visible";
//     }
//     else{
//         myImg.style.visibility = "hidden";
//     }
// })



// detect key presses

// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;
// function move(event) {

//     switch (event.key) {
//         case "ArrowDown":
//             y += 5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowUp":
//             y -= 5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowRight":
//             x += 5;
//             myDiv.style.left = x + "px";
//             break;
//         case "ArrowLeft":
//             x -= 5;
//             myDiv.style.left = x + "px";
//             break;
//         default:
//             break;
//     }
// }



// animations

// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");

// myButton.addEventListener("click", begin);

// function begin() {
//     // let timerId = null;
//     // let x = 0;
//     // let y = 0;

//     // timerId = setInterval(frame, 5);

//     // function frame() {
//     //     if (x >= 200 || y >= 200) {
//     //         clearInterval(timerId);
//     //     } else {
//     //         x += 1;
//     //         y += 1;
//     //         myAnimation.style.left = x + "px";
//     //         myAnimation.style.top = y + "px";
//     //     }
//     // }

//     // let timerId = null;
//     // let degrees = 0;

//     // timerId = setInterval(frame, 5);
//     // function frame() {
//     //     if (degrees >= 360) {
//     //         clearInterval(timerId);
//     //     } else {
//     //         degrees += 1;
//     //         myAnimation.style.transform = "rotateZ("+degrees+"deg)"
//     //     }
//     // }

//     // let timerId = null;
//     // let degrees = 0;
//     // let x = 0;
//     // let y = 0;

//     // timerId = setInterval(frame, 5);
//     // function frame() {
//     //     if (x >= 200 || y >= 200) {
//     //         clearInterval(timerId);
//     //     } else {
//     //         degrees += 5;
//     //         x += 1;
//     //         y += 1;
//     //         myAnimation.style.left = x +"px";
//     //         myAnimation.style.top = y +"px";
//     //         myAnimation.style.transform = "rotateZ(" + degrees + "deg)"
//     //     }
//     // }

//     let timerId = null;
//     let scaleX = 1;
//     let scaleY = 1;

//     timerId = setInterval(frame, 5);
//     function frame() {
//         if (scaleX <= 0.1 || scaleY <= 0.1) {
//             clearInterval(timerId);
//         } else {
//             scaleX -= 0.01;
//             scaleY -= 0.01;
//             myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
//         }
//     }
// }



// canvas API = a means for drawing graphics
//              used for animations, games, data visualization

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

// // DRAW LINES
// // context.strokeStyle = "purple";
// // context.lineWidth = 10;
// // context.beginPath();
// // context.moveTo(0, 0);
// // context.lineTo(250, 250);
// // context.lineTo(250, 500);
// // context.moveTo(500, 0);
// // context.lineTo(250, 250);
// // context.stroke();

// //DRAW TRIANGLE
// // context.strokeStyle = "grey";
// // context.fillStyle = "yellow";
// // context.lineWidth = 10;
// // context.beginPath();
// // context.moveTo(250, 0);
// // context.lineTo(0, 250);
// // context.lineTo(500, 250);
// // context.lineTo(250, 0);
// // context.stroke();
// // context.fill();

// // DRAW RECTANGLE
// // context.fillStyle = "black";
// // context.fillRect(0, 0, 250, 250);
// // context.strokeStyle = "black";
// // context.strokeRect(0, 0, 250, 250);

// // context.fillStyle = "red";
// // context.fillRect(0, 250, 250, 250);
// // context.strokeStyle = "black";
// // context.strokeRect(0, 250, 250, 250);

// // context.fillStyle = "green";
// // context.fillRect(250, 250, 250, 250);
// // context.strokeStyle = "black";
// // context.strokeRect(250, 250, 250, 250);

// // context.fillStyle = "blue";
// // context.fillRect(250, 0, 250, 250);
// // context.strokeStyle = "black";
// // context.strokeRect(250, 0, 250, 250);

// //DRAW CIRCLE
// // (x, y, r, sAngle, eAngle, counterclockwise)
// // context.fillStyle = "lightblue";
// // context.strokeStyle = "darkblue";
// // context.lineWidth = 10;
// // context.beginPath();
// // context.arc(250, 250, 200, 0, 2 * Math.PI);
// // context.stroke();
// // context.fill();

// // DRAW TEXT
// context.font = "50px MV Boli";
// context.fillStyle = "grey";
// context.textAlign = "center";
// context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);



// window = interface used to talk to the web browser
//          the DOM is a property of the window

// const myButton = document.querySelector("#myButton");

// console.dir(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);
// window.location.href = "https://google.com";
// console.log(window.location.hostname);
// console.log(window.location.pathname);

// myButton.addEventListener("click", () => window.open("https://google.com"));
// myButton.addEventListener("click", () => window.close());
// myButton.addEventListener("click", () => window.print());

// window.alert("Hello");
// window.confirm("Press OK to continue!");

// let age = window.prompt("Enter your age");
// if (age < 18) {
//     window.alert("You must be 18+ to visit this site");
//     window.close();
// }



// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name = value pairs

// console.log(navigator.cookieEnabled);
// document.cookie = "firstName = SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName = SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// console.log(document.cookie);

// setCookie("firstName", "SpongeBob", 365);
// setCookie("lastName", "SquarePants", 365);

// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));


// const firstText = document.querySelector("#firstText");
// const lastText = document.querySelector("#lastText");
// const submitBtn = document.querySelector("#submitBtn");
// const cookieBtn = document.querySelector("#cookieBtn");

// submitBtn.addEventListener("click", () => {
//     setCookie("firstName", firstText.value, 365);
//     setCookie("lastName", lastText.value, 365);
// });
// cookieBtn.addEventListener("click", () => {
//     firstText.value = getCookie("firstName");
//     lastText.value = getCookie("lastName")
// });

// function setCookie(name, value, daysToLive) {
//     const date = new Date();
//     date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
//     let expires = "expries=" + date.toUTCString();
//     document.cookie = `${name}=${value}; ${expires}; path=/`
// }
// function deleteCookie(name) {
//     setCookie(name, null, null);
// }
// function getCookie(name) {
//     const cDecoded = decodeURIComponent(document.cookie);
//     const cArray = cDecoded.split("; ");
//     let result = null;

//     cArray.forEach(element => {
//         if (element.indexOf(name) == 0) {
//             result = element.substring(name.length + 1)
//         }
//     })
//     return result;
// }



// stopwatch program

// const timeDisplay = document.querySelector("#timeDisplay");
// const startBtn = document.querySelector("#startBtn");
// const pauseBtn = document.querySelector("#pauseBtn");
// const resetBtn = document.querySelector("#resetBtn");

// let startTime = 0;
// let elapsedTime = 0;
// let currentTime = 0;
// let paused = true;
// let intervalId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startBtn.addEventListener("click", () => {
//     if (paused) {
//         paused = false;
//         startTime = Date.now() - elapsedTime;
//         intervalId = setInterval(updateTime, 1000);
//     }
// });
// pauseBtn.addEventListener("click", () => {
//     if (!paused) {
//         paused = true;
//         elapsedTime = Date.now() - startTime;
//         clearInterval(intervalId);
//     }
// });
// resetBtn.addEventListener("click", () => {
//     paused = true;
//     clearInterval(intervalId);
//     startTime = 0;
//     elapsedTime = 0;
//     currentTime = 0;
//     hrs = 0;
//     mins = 0;
//     secs = 0;
//     timeDisplay.textContent = "00:00:00";
// });

// function updateTime() {
//     elapsedTime = Date.now() - startTime;

//     secs = Math.floor(elapsedTime / 1000 % 60);
//     mins = Math.floor(elapsedTime / (1000 * 60) % 60);
//     hrs = Math.floor(elapsedTime / (1000 * 60 * 60) % 60);

//     secs = pad(secs);
//     mins = pad(mins);
//     hrs = pad(hrs);

//     timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

//     function pad(unit) {
//         return (("0") + unit).length > 2 ? unit : "0" + unit;
//     }
// }



// rock paper scissors game

// const playerText = document.querySelector("#playerText");
// const computerText = document.querySelector("#computerText");
// const resultText = document.querySelector("#resultText");
// const choiceBtn = document.querySelectorAll(".choiceBtn");
// let player;
// let computer;
// let result;

// choiceBtn.forEach(button => button.addEventListener("click", () => {

//     player = button.textContent;
//     computerTurn();
//     playerText.textContent = `Player: ${player}`;
//     computerText.textContent = `Computer: ${computer}`;
//     resultText.textContent = checkWinner();
// }));

// function computerTurn() {
//     const randNum = Math.floor(Math.random() * 3) + 1;

//     switch (randNum) {
//         case 1:
//             computer = "ROCK";
//             break;
//         case 2:
//             computer = "PAPER";
//             break;
//         case 3:
//             computer = "SCISSORS";
//             break;
//     }
// }

// function checkWinner() {
//     if (player == computer) {
//         return "Draw!";
//     } else if (computer == "ROCK") {
//         return (player == "PAPER") ? "You Win!" : "You Lose!";
//     } else if (computer == "PAPER") {
//         return (player == "SCISSORS") ? "You Win!" : "You Lose!";
//     } else if (computer == "SCISSORS") {
//         return (player == "ROCK") ? "You Win!" : "You Lose!";
//     }
// }



// tictactoe game

// const cells = document.querySelectorAll(".cell");
// const statusText = document.querySelector("#statusText");
// const restartBtn = document.querySelector("#restartBtn");
// const winConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];
// let options = ["", "", "", "", "", "", "", "", ""];
// let currentPlayer = "X";
// let running = false;

// initializeGame();

// function initializeGame() {
//     cells.forEach(cell => cell.addEventListener("click", cellClicked));
//     restartBtn.addEventListener("click", restartGame);
//     statusText.textContent = `${currentPlayer}'s turn`;
//     running = true;
// }

// function cellClicked() {
//     const cellIndex = this.getAttribute("cellIndex");

//     if (options[cellIndex] != "" || !running) {
//         return;
//     }

//     updateCell(this, cellIndex);
//     checkWinner();
// }

// function updateCell(cell, index) {
//     options[index] = currentPlayer;
//     cell.textContent = currentPlayer;
// }

// function changePlayer() {
//     currentPlayer = (currentPlayer == "X") ? "O" : "X";
//     statusText.textContent = `${currentPlayer}'s turn`;
// }

// function checkWinner() {
//     let roundWon = false;

//     for (let i = 0; i < winConditions.length; i++) {
//         const condition = winConditions[i];
//         const cellA = options[condition[0]];
//         const cellB = options[condition[1]];
//         const cellC = options[condition[2]];

//         if (cellA == "" || cellB == "" || cellC == "") {
//             continue;
//         }
//         if (cellA == cellB && cellB == cellC) {
//             roundWon = true;
//             break;
//         }
//     }

//     if (roundWon) {
//         statusText.textContent = `${currentPlayer} wins!`
//         running = false;
//     }
//     else if (!options.includes("")) {
//         statusText.textContent = `Draw!`;
//         running = false
//     }
//     else {
//         changePlayer();
//     }
// }
// function restartGame() {
//     currentPlayer = "X";
//     options = ["", "", "", "", "", "", "", "", ""];
//     statusText.textContent = `${currentPlayer}'s turn`;
//     cells.forEach(cell => cell.textContent = "");
//     running = true;
// }



// snake game

// const gameBoard = document.querySelector("#gameBoard");
// const ctx = gameBoard.getContext("2d");
// const scoreText = document.querySelector("#scoreText");
// const resetBtn = document.querySelector("#resetBtn");
// const gameWidth = gameBoard.width;
// const gameHeight = gameBoard.height;
// const boardBackground = "white";
// const snakeColor = "lightgreen";
// const snakeBorder = "black";
// const foodColor = "red";
// const unitSize = 25;
// let running = false;
// let xVelocity = unitSize;
// let yVelocity = 0;
// let foodX;
// let foodY;
// let score = 0;
// let snake = [
//     { x: unitSize * 4, y: 0 },
//     { x: unitSize * 3, y: 0 },
//     { x: unitSize * 2, y: 0 },
//     { x: unitSize, y: 0 },
//     { x: 0, y: 0 }
// ];

// window.addEventListener("keydown", changeDirection);
// resetBtn.addEventListener("click", resetGame);

// gameStart();

// function gameStart() {
//     running = true;
//     scoreText.textContent = score;
//     createFood();
//     drawFood();
//     nextTick();
// };
// function nextTick() {
//     if (running) {
//         setTimeout(() => {
//             clearBoard();
//             drawFood();
//             moveSnake();
//             drawSanke();
//             checkGameOver();
//             nextTick();
//         }, 75);
//     }
//     else {
//         displayGameOver();
//     }
// };
// function clearBoard() {
//     ctx.fillStyle = boardBackground;
//     ctx.fillRect(0, 0, gameWidth, gameHeight);
// };
// function createFood() {
//     function randomFood(min, max) {
//         const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
//         return randNum;
//     }
//     foodX = randomFood(0, gameWidth - unitSize);
//     foodY = randomFood(0, gameWidth - unitSize);
// };
// function drawFood() {
//     ctx.fillStyle = foodColor;
//     ctx.fillRect(foodX, foodY, unitSize, unitSize);
// };
// function moveSnake() {
//     const head = {
//         x: snake[0].x + xVelocity,
//         y: snake[0].y + yVelocity
//     };

//     snake.unshift(head);
//     // if food is eaten
//     if (snake[0].x == foodX && snake[0].y == foodY) {
//         score += 1;
//         scoreText.textContent = score;
//         createFood();
//     } else {
//         snake.pop();
//     }
// };
// function drawSanke() {
//     ctx.fillStyle = snakeColor;
//     ctx.strokeStyle = snakeBorder;
//     snake.forEach(snakePart => {
//         ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
//         ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
//     })
// };
// function changeDirection(event) {
//     const keyPressed = event.keyCode;
//     const LEFT = 37;
//     const UP = 38;
//     const RIGHT = 39;
//     const DOWN = 40;

//     const goingUp = (yVelocity == -unitSize);
//     const goingDown = (yVelocity == unitSize);
//     const goingRight = (xVelocity == unitSize);
//     const goingLeft = (xVelocity == -unitSize);

//     switch (true) {
//         case (keyPressed == LEFT && !goingRight):
//             xVelocity = -unitSize;
//             yVelocity = 0;
//             break;
//         case (keyPressed == UP && !goingDown):
//             xVelocity = 0;
//             yVelocity = -unitSize;
//             break;
//         case (keyPressed == RIGHT && !goingLeft):
//             xVelocity = unitSize;
//             yVelocity = 0;
//             break;
//         case (keyPressed == DOWN && !goingUp):
//             xVelocity = 0;
//             yVelocity = unitSize;
//             break;
//     }
// };
// function checkGameOver() {
//     switch (true) {
//         case (snake[0].x < 0):
//             running = false;
//             break;
//         case (snake[0].x >= gameWidth):
//             running = false;
//             break;
//         case (snake[0].y < 0):
//             running = false;
//             break;
//         case (snake[0].y >= gameHeight):
//             running = false;
//             break;
//     }
//     for (let i = 1; i < snake.length; i += 1) {
//         if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
//             running = false;
//         }
//     }
// };
// function displayGameOver() {
//     ctx.font = "50px MV Boli";
//     ctx.fillStyle = "black";
//     ctx.textAlign = "center";
//     ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2)
//     running = false;
// };
// function resetGame() { 
//     score = 0;
//     xVelocity = unitSize;
//     yVelocity = 0;
//     snake = [
//         { x: unitSize * 4, y: 0 },
//         { x: unitSize * 3, y: 0 },
//         { x: unitSize * 2, y: 0 },
//         { x: unitSize, y: 0 },
//         { x: 0, y: 0 }
//     ];
//     gameStart();
// };



// pong game

const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "forestgreen";
const paddle1Color = "lightblue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 12.5;
const paddleSpeed = 50;
let intervalID;
let ballSpeed = 1;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddle1 = {
    with: 25,
    height: 100,
    x: 0,
    y: 0
}
let paddle2 = {
    with: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight - 100
};

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart() {
    createBall();
    nextTick();
};
function nextTick() {
    intervalID = setTimeout(() => {
        clearBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX, ballY);
        checkCollision();
        nextTick();
    }, 10)
};
function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function drawPaddles() {
    ctx.strokeStyle = paddleBorder;

    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.with, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.with, paddle1.height);

    ctx.fillStyle = paddle2Color;
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.with, paddle2.height);
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.with, paddle2.height);
};
function createBall() {
    ballSpeed = 1;
    if (Math.round(Math.random()) == 1) {
        ballXDirection = 1;
    } else {
        ballXDirection = -1;
    }
    if (Math.round(Math.random()) == 1) {
        ballYDirection = 1;
    } else {
        ballYDirection = -1;
    }
    ballX = gameWidth / 2;
    ballY = gameHeight / 2;
    drawBall(ballX, ballY);
};
function moveBall() {
    ballX += (ballSpeed * ballXDirection);
    ballY += (ballSpeed * ballYDirection);
};
function drawBall(ballX, ballY) {
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = ballBorderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
};
function checkCollision() {
    if (ballY <= 0 + ballRadius) {
        ballYDirection *= -1;
    }
    if (ballY >= gameHeight - ballRadius) {
        ballYDirection *= -1;
    }
    if (ballX <= 0) {
        player2Score += 1;
        updateScore();
        createBall();
        return;
    }
    if (ballX >= gameWidth) {
        player1Score += 1;
        updateScore();
        createBall();
        return;
    }
    if (ballX <= (paddle1.x + paddle1.with + ballRadius)) {
        if (ballY > paddle1.y && ballY < paddle1.y + paddle1.height) {
            ballX = (paddle1.x + paddle1.with + ballRadius); // if ball gets stuck
            ballXDirection *= -1;
            ballSpeed += 1;
        }
    }
    if (ballX >= (paddle2.x - ballRadius)) {
        if (ballY > paddle2.y && ballY < paddle2.y + paddle2.height) {
            ballX = (paddle2.x - ballRadius); // if ball gets stuck
            ballXDirection *= -1;
            ballSpeed += 1;
        }
    }
};
function changeDirection(event) {
    const ketPressed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;

    switch (ketPressed) {
        case (paddle1Up):
            if (paddle1.y > 0) {
                paddle1.y -= paddleSpeed;
            }
            break;
        case (paddle1Down):
            if (paddle1.y < gameHeight - paddle1.height) {
                paddle1.y += paddleSpeed;
            }
            break;
        case (paddle2Up):
            if (paddle2.y > 0) {
                paddle2.y -= paddleSpeed;
            }
            break;
        case (paddle2Down):
            if (paddle2.y < gameHeight - paddle2.height) {
                paddle2.y += paddleSpeed;
            }
            break;
    }
};
function updateScore() {
    scoreText.textContent = `${player1Score} : ${player2Score}`
};
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    paddle1 = {
        with: 25,
        height: 100,
        x: 0,
        y: 0
    }
    paddle2 = {
        with: 25,
        height: 100,
        x: gameWidth - 25,
        y: gameHeight - 100
    };
    ballX = 0;
    ballY = 0;
    ballXDirection = 0;
    ballYDirection = 0;
    updateScore();
    clearInterval(intervalID);
    gameStart();
};