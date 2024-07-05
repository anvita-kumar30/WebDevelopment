// var x;
// var y=15;
// var z=x+y;
// console.log(z);
// console.log(x)
// x="Anvita"
// console.log(x)
// x=15.51
// console.log(x);

// var name="Anvita"
// console.log(name.length);

// var isTrue = true;
// console.log(isTrue);

// if (x<=7) {
//     if (x>2) {
//         console.log("Inside nested if");
//     } else {
//         console.log("Inside nested else");
//     }
// } else if (x>12) {
//     console.log("Inside else if block");
// } else if (x<15) {
    
// } else {
//     console.log("Inside else block");
// }

// var x = prompt("Enter a number from 1-3: ");
// console.log(typeof(x)); 
// var y = parseInt(x);
// console.log(typeof(y)); 
// switch (y) {
//     case 1:
//         console.log("1st case is executed");
//         break;
//     case 2:
//         console.log("2nd case is executed");
//         break;
//     case 3:
//         console.log("3rd case is executed");
//         break;
//     default:
//         console.log("Enter a value from 1-3");
//         break;
// }

// Immutable Strings
// var name = "Anvita";
// name[0] = "S";
// console.log(name[0]);


// for (var x=0; x<=10; x++) {
//     console.log(x = x+1);
// }

// while(x<=10) {
//     console.log(x);
// }

// do {
//     console.log(x);
//     x++
// } while (x>=10);

// var car = {
//     name: "Alto",
//     yearOfManufacturing: 2019,
//     airbags: false,
//     brandName: "Maruti Suzuki",
//     noOfSeats: function seats() {
//         return 5;
//     },
//     obj: {
//         name: "Mano",
//         age: 25,
//     },
// };
// console.log(car.obj);

// var car = {
//     name: "Alto",
//     yearOfManufacturing: 2019,
//     airbags: false,
//     brandName: "Maruti Suzuki",
// }
// car.noOfSeats = 4;
// car.cityOfManu = "Pune";
// console.log(car);

// delete car.airbags;
// delete car.noOfSeats;

// car.brandName = "Tata"
// console.log(car.brandName);

// var arr = [100, 200, 548, 846,5487, 1472];
// arr[0] = 150;
// arr.pop()  //pops out the last element
// arr.shift() //removes the first element
// arr.push(46)  //pushes the element to the last place
// arr.unshift(46) //pushes the element to the first place
// console.log(arr)
// for (var i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// var heading = document.getElementById("heading");

// var btn = document.getElementById("btn");
// btn.addEventListener("focus", function() {
//     heading.style.color = "red";
// });

//var x=15;  //global variables
// var y=20;
// var a=45;
// function add (first, second, q) {
//     var z = first+second;
//     console.log(z);
//     console.log(q);
// }
// add((x=10), (y=20));
// add(x, y, a);

// var btn = document.getElementById("btn");
// btn.addEventListener("focus", color);
    
// function color() {
//     heading.style.color = "red";
// }

// var btn = document.getElementById("btn");
// btn.addEventListener("focus", () => {
//     heading.style.color = "red";
// });


// function add() {
//     return function ret() {
//         console.log("returned");
//     };
// };
// var x = add();
// x();

// setTimeout( function () {
//     console.log("Set Timeout Running");
// }, 5000); 


//ES6 concepts

//Arrow Function 

// var x = () => {
//     console.log("Arrow function");
// };
// x();

//Template Literal

// var firstName = "Anvita"
// var lastName = "Kumar"
// console.log(firstName, lastName);

// var name = `My name is ${firstName} ${lastName} and my age is ${15 + 5}`;
// console.log(name);

//Destructuring

// var arr = [100, 200];
// var[first, second] = arr;
// console.log(second, first);

// For of loop

// var arr = [100, 200, 300, 400, 500];
// var total;
// for (var item of arr) {
//     total = total + item
//     console.log(total);
// }
// console.log(total);

// let a = 10; 
// console.log(a);
// {
//     let b = 40;  //block scope {}
//     console.log(b);
//     let a = 50;
//     console.log(a);
//     let a = 30  //cannot declare the same variable twice in a block
// }
// console.log(b);

// const a = 45;
// a = 100 //Will not change its value under any circumstances
// console.log(a);
// {
//     const b = 45;
//     console.log(b);
// }
// console.log(b);

//Hoisting - can access varibales and functions even before initializing it

// let a;
// console.log(a);
// a = 100;

// var a;
// console.log(a);
// a = 100;

// console.log(a);
// let a;
// a = 100;

// console.log(a);
// var a;
// a = 100;

// const a;
// a = 100;

// x = 100;
// console.log(x);
// let x;

// add(10, 15);
// function add (x, y) {
//     console.log(x + y);
// }

// add(10, 15);
// var fun = function add (x, y) {
//     console.log(x + y);
// }

// var fun = function add (x, y) {
//     console.log(x + y);
// };
// fun(10, 15);

fun(10, 15);
console.log(fun);
var fun = function add (x, y) {
    console.log(x + y);
};