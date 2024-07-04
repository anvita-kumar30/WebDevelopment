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