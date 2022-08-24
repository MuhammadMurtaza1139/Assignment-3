/********** prompt() or windows.prompt() *********/
var question = "What is your name?";
var defaultAnswer = "Rizwan";
var name = prompt(question, defaultAnswer);
console.log("Name = "+ name);

var question = "What is your age?";
var age = prompt(question);// Assuming input 12
var newAge = age + 5; // It will concatenate
console.log("New Age = "+ newAge); //result 125


/********** The Confirm() method *********/
let deletePost = confirm("Do you really want todelete this post?");
console.log(deletePost);

/********** Convert String to Interger *********/
var value1 = "3";
var value2 = "5";
var value3 = value1+value2;
console.log(value3);// result, 35

//Assuming we will provide value 5 in input
var age = prompt("What is your age");
var num = 4;
var sum = age + num;
console.log(sum); // result

//parseInt function to convert String to integer
var age = parseInt(prompt("What is your age"));//input 5
var num = 4;
var sum = age + num;
console.log(sum); // result, 9

//example 2
var usdollar=parseInt(prompt("Plz enter an amount in dollars"));
var riyal=parseInt(prompt("Plz enter amount in saudi riyal"));
document.write("<br>");
document.write("Amount of in PKR is :",((usdollar*177)+(riyal*48)));


//parseFloat function to convert String to float
var age = prompt("What is your age");//input 5.5
var num = 4;
var sum = parseFloat(age) + num;
console.log(sum); // result, 9.5



/********** Convert String to Number using Number() *********/
var age = prompt("What is your age");//input 5.5
var num = 4;
var sum = age + Number(num);
console.log(sum); // result, 9.5

//examples
var a = Number(true); //returns 1
var b = Number(false); //returns 0
var c = Number("999"); //returns 999
var d = Number("999 888"); //returns NAN
var e = Number("Hello"); //returns NAN


/********** Format a number to a specified length toPrecision() ***********/
let num = 25.3852;
let a = num.toPrecision();
let b = num.toPrecision(2);
let c = num.toPrecision(3);
let d = num.toPrecision(10);
let n = a + "<br>" + b + "<br>" + c + "<br>" + d;
document.write(n);



/********** Comparsion Operator ***********/
var a = 3;
console.log(a == 6); //return false
console.log(a === 6); //return false
console.log(a != 6); //return true
console.log(a !== 6); //return true
console.log(a > 6); //return false
console.log(a < 6); //return true
console.log(a >= 6); //return false
console.log(a <= 6); //return true

//example
var a = 3;
console.log(a == 3); //return true
console.log(a == "3"); //return true
console.log(a == 6); //return false
console.log(a === 3); //return true
console.log(a === "3"); //return false
console.log(a === 6); //return false


/********** && logical operator *********/
alert( true && true ); // true
alert( false&& true ); // false
alert( true && false ); // false
alert( false&& false ); // false
//example
var a = 60;
var b = a > 50 && a < 70;
alert(b); // return true
var c = 80;
var d = c > 50 && c < 70;
alert(d); // return false


/********** || logical operator *********/
alert( true || true ); // true
alert( false|| true ); // true
alert( true || false ); // true
alert( false|| false ); // false
//example
var a = 60;
var b = a < 50 || a > 70;
alert(b); // return false
var c = 80;
var d = c < 50 || c > 70;
alert(d); // return true



/********** ! logical operator *********/
alert( !true ); // false
alert( !false ); // true
//example
var a=60;
var b= !(a < 50);

alert(b); // return true
var c=80;
var d=!(c > 50);
alert(d); // return false



/********** Double NOT(!!) *********/
alert( !!1 ); // true
alert( !!0); // true