// logical operators
// && any condition is false its give answer false
var num1 = 10;
var num2 = 5;
console.log(num1 == num2 && num2 == 5); // false
var num3 = 10;
var num4 = 5;
console.log(num3 == 10 && num4 == 5); // true
// || if any answer is true its give answer ture
var num5 = 10;
var num6 = 5;
console.log(num5 == 10 || num6 == num5); // true
// ! if answer is true is gives answer false
// ! if answer is false is gives answer true
var num7 = 10;
var num8 = 5;
console.log(!(num7 == num8)); // false  but answer true
// conditional statement
// if condition
var num10 = 10;
if (num10 == 10) {
    console.log("hurray! you print a number 10");
}
else {
    console.log("sorry i cant print number 10");
}
// else condition
var num11 = 10;
if (num11 == 5) {
    console.log("hurray! you print a number 10");
}
else {
    console.log("sorry i cant print number 10");
}
var isRaining = true;
if (isRaining) {
    console.log("wear a raincoat");
}
else {
    console.log("wear a sunglasses");
}
// else if condition use for multiple statements
var num14 = 10;
if (num14 == 6) {
    console.log("number is 6");
}
else if (num14 == 8) {
    console.log("number is 8");
}
else if (num14 == 10) {
    console.log("number is 10");
}
else {
    console.log("number is above");
}
