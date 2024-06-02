/* 1: array are containers(They hold multiple pieces and typs of data)
2: ordered collection (items in an arrays have a specific order)
3: flexible data types(arrsys can hold multiple type of data like numbers string)
4: index elemets(each item in an array has an index started from 0)
5: dynamic size(arrays can grow and shrink in sizze as needed)
6: Accessing elements: (you can access indiviaul items in array using thier index number) */
var iceCream = "Vanilla";
////////SRUCTURED Typing
//  let ball = {
//     diameter:10
//  }
//  let sphere = {
//     diameter:20
//  }
// //  ball = sphere
// //  console.log(ball);
// //  console.log(sphere);
// let tube= {
//     diameter:30,
//     length:40
// }
// ball = tube
//nominal typing is not assign a object into onther abject
//  let ball = {
//     diameter:60
//  }
//  let sphere = {
//     diameter:10
//  }
//  let tube = {
//     diameter:20,
//     length:10,
//  }
//  ball=sphere;
//  sphere=ball;
//////////////////////////////////enums
//  used for stored groups of const
//  access by value and key and dot notation
//enum name is preffered in capatilize
//enum feature is not in javascript
//  enum Days{
//    Thursday = "sunny weather",
//    Monday  = 2,                 //edited numeric value
//    Tuesday,
//    Wednesday,
//  }
// //  console.log(Days[7]);
// console.log(Days.Thursday);
// console.log(Days.Tuesday);
// console.log(Days.Monday);
//  console.log(Days["Wednesday"]); 
//  alternate of enums
//literal typing 
//  let days:"monday" | "tuesday"| "wednesday";
/////////////////data types
// any and unknown
/////////////any we  can assign any data type
// let val:any;
// val = 2234;
// val = true;
// val = "abc";
// val = undefined;
/////////////////////unknown like any but 1 thing is better in unknown 
////we can change any type into unknown
// let val2:unknown;
// val2 = null;
// val2 = 5;
// val2 = undefined;
// let val3:string = val;
// let val4:string = val2;   ///error
//////////////infinite loop
// function abc(){
//    while(true){
//    }
// }
// abc()
///////////////////////type alias
/////////////never data type
// type abc = string & number
//////////////////////type casting
// when we need to type string to number and number to string we need to first change its type unknown and then change
// let abc:string = 4 as unknown as string
// let abcd:string = 5 as string;       ////////error
// let abcde:boolean = 4 as boolean;    ///////error
// let data:unknown;
// let abcdef:boolean = data as boolean;
///////////////////////tuples
///not in javascript
////if we make array with types and legnth fixed we use tuples
////we can assign tytpe in array 
var trafficLight = ["green", "red", "yellow"];
var tuples = ["maryam", true, 20];
tuples.push(12);
console.log(tuples);
//////////////////////functions parameters
/////default parameter
function greet(name) {
    if (name === void 0) { name = "user"; }
    console.log("hello ".concat(name));
}
;
greet();
greet("maryam");
