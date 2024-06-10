
/* 1: array are containers(They hold multiple pieces and typs of data)
2: ordered collection (items in an arrays have a specific order)
3: flexible data types(arrsys can hold multiple type of data like numbers string)
4: index elemets(each item in an array has an index started from 0)
5: dynamic size(arrays can grow and shrink in sizze as needed)
6: Accessing elements: (you can access indiviaul items in array using thier index number) */



// array special variable

// let carsName = ["Dodge Challenger", "Helicat", "la ferrari" ]

//                          //0             1           2
// // array index start 0

//  console.log(carsName[2]);
// console.log(carsName[0]);



// let subjects = ["maths", "urdu", "english", "science"]

// console.log(subjects[3]);
// console.log(subjects[0]);
// console.log(subjects[1]);






// let counting = [2 , 4 , 6, 8, 10]

// console.log(counting[4]);
// console.log(counting[2]);


// // array methods

// // push( add element in last )

// // need to pass argument in pranthesis

// counting.push(15 , 18 , 20)
// console.log(counting);



// // Pop (delete element in last)

// // no need to pass argements in pranthesis
// counting.pop()
// console.log(counting);





// let freinds =["ali", "maryam", "bisma", "maha", "aqsa", "shiza", "javeria"] 


// // push( add element in last )
// freinds.push("mahnoor", "aisha", "hiba", "kiran")


// // Pop (delete element in last)
// freinds.pop()

// console.log(freinds);


// // unshift (add elemtent in array first index )


// freinds.unshift("Ramsha", "yusra")


// // shift (remove elemtent in array first index )

// freinds.shift()


// console.log(freinds);


// // slice

// // splice










// // /////////////////////////////////////////loop///////////////////////////////////////////


// for(let i = 1; i <= 50; i++){
// console.log("thank you kamran tessori");

// };




/////////////////////objects//////////////////////////
//well structured data

// const student:{name:string, rollNo:number, class:string, address:string}=  {
//     name: "maryam",
//     rollNo:20201,
//     class:"Eight",
//     address:"karachi pakistan house#16"
// }


// // console.log(student.name);

// //for dynamically use
// const userPrompt = "name"
// console.log(student[userPrompt]);




// // nested object

// const myDetails = {
//     address:{
//         city:"karachi",
//         country:"pakistan",
//         postalCode:12345,
//     },

//     name:"maryam",
//     age:22,

// }

// console.log(myDetails.address);
// console.log(myDetails.address.postalCode);



// //non structured data

// // array

// // const myProperties=["maryam", 20201, "eight" , "karachi"]

// // console.log(myProperties[1]);




// //////////////////union literals/////////////////////////////////////

// let rollno:string | number;
// rollno="WMA-176176";
// rollno=12234;





// // dynamic type
// // type alyas
// type IStudentiInformation={
//     name:string,
//     cnic:number,
//     age:number
// }

// let myInformation:IStudentiInformation={
//     name:"maryam",
//     cnic:123-4456-0,
//     age:21,
//  };





///////////practice

//  type IStudent = {
//     name:string,
//     class:number,
//     isMarried:boolean,
//  }

//  type ITeacher = {
//     name:string,
//     experienced:number
//  }

//  let myInfo:IStudent={
//     name:"maryam",
//     class:12,
//     isMarried:true
//  }



///////////////intersection
//  let OkashaInfo:IStudent & ITeacher = {
//     name:"maryam",
//     class:12,
//     isMarried:false,
//     experienced:3
//  }


// /////////////2 types insected

//  type intersectedType = IStudent & ITeacher

//  let OkashaInfo2:intersectedType={
//     name:"okasha",
//     class:12,
//     isMarried:false,
//     experienced:3
//  }

//  console.log(OkashaInfo2);

///////////LITERAL TYPING

type IIceCream = "Strawberry" | "Vanilla" | "blue berry";

let iceCream: IIceCream = "Vanilla"



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
// let trafficLight:string []=
// ["green", "red", "yellow"]


// let tuples:[string, boolean, number]=
// ["maryam", true, 20]

// tuples.push(12);

// console.log(tuples);








// //////////////////////functions parameters
// /////default parameter

// function greet(name:string="user"){
// console.log(`hello ${name}`)

// };


// greet() /////////////////////////execute deffault parameter( user);
// greet("maryam")





//////////////////optioinal parameter

// function greet(name?: string){
//    console.log(`hello ${name}`)

//    };


//    greet() /////////////////////////execute deffault parameter( user);
//    greet("maryam");






/////////////////////////////////arrow function

// compact way to written code

// let name = ()=>{
//    console.log("hello");

// };

// name()



///////////////////callback function
///pass as a argument in onother function]
// function greeting(askName:()=>void){
//    console.log("hello, greed");

// };

// function askName(){
//    console.log("enter your name");

// };


// greeting(askName);


// ///////////////////asycnchronous

// console.log("first");

// setTimeout(()=>{
//    console.log("second");1000}

// )

// console.log("third");











// console.log("first");

// setTimeout(()=>{
//    for(let i=0; i<=10000; i++){
// console.log("abc");

//    }
// }
// )

// console.log("third");





///////////////sir ameen class

// let makePizza ;
// makePizza = "your pizza is being prepared";

// console.log(makePizza);
// function makeQourma (){
//     return "qourma"
// }

// let dish = makeQourma();
// console.log(dish);






//////////////////promise
// simple function

// function makePizza (){
//     return"pizza is being prepared"
// }
// let sirashariborder = makePizza(); 
// console.log(sirashariborder);




///////////////// promises
// 3 states of promises      //pending    //resolves    //reject

// const helloPromise = new Promise((resolve) => {
//     setTimeout( ()=> {
//    resolve("hello world!")}, 10000  )//  after 10sec
// } )

// helloPromise.then((message) => console.log(message)
// );


// const conditionalPromise = new Promise((resolve, reject) => {
//     const succes = Math.random() > 0.5;
//     if (succes) {
//         resolve("successees")
//     }
//     else {
//         reject(new Error("failure"))

//     }
// }
// );


