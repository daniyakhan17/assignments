console.log('hello world! 1');
if (10 < 5) {
    console.log('if chal raha hy');
}
// else {
//     console.log('else chal raha hy');
// }
// if (15 < 5) {
//     console.log('done');
// }
// else {
//     console.log('not done')
// }

// var city = prompt("enter your city name");
// if(city === "karachi"){
//     console.log ('you live on the safest city');
// }
// else{
//     console.log ("karachi ajao");
// }
// var country = prompt("enter country name");
// if(country === "pakistan"){
//     console.log ('you live in the pakistan');
// }
// else{
//     console.log ('pakistan ajao')
// }

var num = 2;

if (num >= 20) {
    console.log("number bara hy");
}
else if (num < 15) {
    console.log("number bara hy 15 se");
}
else {
    console.log("else chal raha hy")
}


var grade = 89;
if (grade >= 80) {
    console.log("A+");
}

if (grade >= 70) {
    console.log("A");
}
if (grade >= 60) {
    console.log("B");
}
else if (grade >= 50) {
    console.log("C");
}
else {
    console.log("fail hogaya bhai");
}


if (10 > 5) {
    console.log("if chal raha hy");
}
if (20 < 50) {
    console.log("nested if");
}
else {
    console.log("else chal rha hy");
}

var age = 18;
if (age < 15 || age > 50) {
    console.log("admission nahi hoga");
}
else if (age <= 15) {
    console.log("admission miljayga");
}
else {
    console.log("500 zyada do or admission loo");
}

// var num1 = +prompt("enter number 1");
// var num2 = Number(prompt("enter number 2"));
// console.log(num1 + num2);


// var userInput = +prompt("enter number");
// if(userInput > 10){
//     console.log ("10 se chota number doooo");
// }
// else if (userInput === 7){
//     console.log("tum jeet gay ho ...");
// }
// else if (userInput === 6 || userInput === 8){
//     console.log("areeb kareeb ho")
// }
// else{
//     console.log ("har gay ho");
// }


// char subjects k marks lenay hy 


// var total = 400;
// var chemMarks = 92;
// var engMarks = 85;
// var urduMarks = 88;
// var phyMarks = 78;

// var obtaindMarks = chemMarks + engMarks + urduMarks + phyMarks ;

// var percentage = obtaindMarks / total * 100;

// console.log ("you got" + percentage + "%");


// FUNCTIONS

function hello() {
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
}

hello();
hello();

function greetuser(username) {
    console.log("hello" + username);
}

greetuser('abdullah');
greetuser("daniya");
greetuser("baba");
greetuser();

function sum(num1, num2) {
    console.log(num1 + num2);
}
sum("20", "20");

function greetuser(username) {
    console.log("hello" + username);
    return "abc"
}

// hello kuch bhi nhi

console.log(greetuser("a"));

// var username = prompt("enter your name");
// console.log(username);

var greet = "20";
console.log(greet);

function addition(num1, num2) {
    return num1 + num2;
}

var result = addition(20, 80);
console.log(result);

function calculatepercentage(num1, num2, num3, num4) {
    var obtainedMarks = num1 + num2 + num3 + num4;
    var percentage = obtainedMarks / 400 * 100;
    return percentage;
}

console.log(calculatepercentage(20, 30, 40, 100));

var head = document.querySelector("#head");
head.innerHTML = "change by me";

// var para = document.querySelector("#para");
// var div = document.querySelector("div")

// para.innerHTML = "Lorem ipsum, <br/> dolor sit amet consectetur adipisicing elit. Consectetur, harum."


// var para = document.querySelector ("#para");

// function change para () {
//     if (para.innerHTML === "hello world"){
//         para.innerHTML = "hello para"
//     }else{
//         para.innerHTML = "hello world"
//     }
// }

