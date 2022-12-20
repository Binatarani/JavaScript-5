// Ternery operator

// // 1.if else exmampl

// let age = 10;
// if (age >= 18) {
//   console.log("You are full age!");
// } else {
//   console.log("You are not full age!");
// }

// //Ternery operator

// //Example 1

// let age = 10;
// age >= 18
//   ? console.log("You are full age!")
//   : console.log("You are not full age!");

// Example 2

// let age = 5;
// if (age > 12) {
//   food = "Chicken";
// } else {
//   food = "Ice Cream";
// }
// console.log(food);

// let age = 15;
// if (age > 12) {
//   food = "Chicken";
// } else {
//   food = "Ice Cream";
// }
// console.log(food);

// let age = 15;
// let food;
// if (age > 12) {
//   food = "Chicken";
// } else {
//   food = "Ice Cream";
// }
// console.log(food);
// console.log(`He like to eat ${food}`);
// console.log(`He like to eat ${age > 12 ? "Chicken" : "Ice Cream"}`); //Ternery operator

// // 2.  JavaScript Function
// example 1
function showText() {
  console.log("Some text!");
}
showText();
showText();

// example 2

function showName(name) {
  console.log(name);
}
showName("Amit");

// example 3
function firstName(name) {
  console.log(name);
}
firstName("Adri");
firstName("Mrinmoye");

// example 4

function birthYear(year) {
  console.log(year);
}
birthYear(2019);

// example 5

function showCountry(name) {
  console.log(name);
}
showCountry("Bangladesh");

// // example 6

// function calculateNumber(n1, n2) {
//   console.log(n1 + n2);
// }
// calculateNumber(15, 5);

// // example 7

// function calculateNumber(n1, n2, n3, n4, n5) {
//   console.log(n1 + n2 + n3 + n4 + n5);
// }
// calculateNumber(15, 5, 8, 9, 12);

// // example 8

// function calculateNumber(n1, n2, n3) {
//   console.log(n1 * n2 * n3);
// }
// calculateNumber(15, 5, 6);

// // example 9

// function calculateNumber(n1, n2) {
//   console.log(n1 / n2);
// }
// calculateNumber(15, 5);

// // example 10

// function averagMark(s1, s2, s3, s4, s5) {
//   console.log((s1 + s2 + s3 + s4 + s5) / 5);
// }
// averagMark(80, 90, 88, 77, 56);

// // example 11

// function averagMark(s1, s2, s3, s4, s5) {
//   const average = (s1 + s2 + s3 + s4 + s5) / 5;
//   return average;
// }
// // A mark
// const aAverageMark = averagMark(80, 90, 88, 77, 56);
// console.log(aAverageMark);

// //B mark
// const bAverageMark = averagMark(88, 70, 88, 79, 96);
// console.log(bAverageMark);
// console.log(aAverageMark, bAverageMark);
