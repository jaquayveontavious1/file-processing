// //lesson on JS
// console.log("hello");
// console.log("I like pizza");

// //alerts the user
// // window.alert(`This is an alert`);
// // window.alert(`I like pizza`);

// //This is an comment
// /* this is a comment
// */


// document.getElementById("myh1").textContent = `Hello`;
// document.getElementById("myP").textContent = `I like Pizza`;

// //Javascript Variables
// let x ; //Declaration(must be unique)
// x = 100; //Assignment
// console.log(x);

// let y = 123; //Declaration and Assignment

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;
// console.log(`You are ${age} years old`);
// console.log(`The price is ${price}`);
// console.log(`Your GPA is ${gpa}`);
// console.log(typeof age);

// let firstName = "Kanyingi";
// let email = "email123@.com";
// console.log(typeof firstName);
// console.log(firstName);
// console.log(`Your name is ${firstName}`);
// console.log(`Your email is ${email}`);


// let online = true;
// console.log(typeof online);
// console.log(`Kanyingi is ${online}`);

// let forSale = true;
// console.log(`Is this car for Sale ${forSale}`);
// let isstudent = true;
// console.log(`Enrolled : ${isstudent}`);

// let fullName = "Tiffany Kanyingi";
// let age = 18;
// let student = true;

// document.getElementById("P1").textContent = `Your name is ${fullName}`;
// document.getElementById("P2").textContent = `You are ${age}` ;
// document.getElementById("P3").textContent =  `Enrolled : ${student}`;

//Arithmetic Operators
//operators = +/-*
//operands - these refer to arithmetic values

// let students = 30;
//students = students + 1;(Addition)
// students = students * 2;(Multiply)
//students = students - 1;(Subtraction)
// students = students / 2;(Division)
// students = students **3;//Power to 3
//  let extrastudents = students % 4;

// This is are known as Augmented Assignment Operators
// students += 1;
// students -= 1
// students += 2;
// students -=2;
// students /= 2;
// students *= 3;
// students %= 2;
// students ++;(Increment)
// students--;(Decrement)
// console.log(students);


//Complex Equations

// let result = 0.046875;
// console.log(result); 

//How to accept user input
// 1. EASY WAY = window.prompt
// let username;

// username = window.prompt("Whats your username?");
// console.log(username);

// let username = window.prompt("Whats your username ?");
// console.log(username);
// 2. PROFESSIONAL WAY = HTML TEXTBOX
// document.getElementById("mySubmit").onclick = function () {
//     let username = document.getElementById("mytext").value;
//    document.getElementById("myH1").textContent = `Hello ${username}`

// }


//TYPE CONVERSION - String, Number, Boolean

// let age = window.prompt("How old are you?");
// age = Number(age)
// age+=1;

// console.log(age, typeof age);

// let x ;
// let y ;
// let z ;
// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


let pi = 3.14159;

let circumference;

let radius = window.prompt("What is the Radius of the Circle?");
radius = Number(radius);
circumference = 2 * pi * radius;

console.log(circumference);