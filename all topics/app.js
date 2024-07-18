// /* 1: array are containers(They hold multiple pieces and typs of data)
// 2: ordered collection (items in an arrays have a specific order)
// 3: flexible data types(arrsys can hold multiple type of data like numbers string)
// 4: index elemets(each item in an array has an index started from 0)
// 5: dynamic size(arrays can grow and shrink in sizze as needed)
// 6: Accessing elements: (you can access indiviaul items in array using thier index number) */
// // array special variable
// // let carsName = ["Dodge Challenger", "Helicat", "la ferrari" ]
// //                          //0             1           2
// // // array index start 0
// //  console.log(carsName[2]);
// // console.log(carsName[0]);
// // let subjects = ["maths", "urdu", "english", "science"]
// // console.log(subjects[3]);
// // console.log(subjects[0]);
// // console.log(subjects[1]);
// // let counting = [2 , 4 , 6, 8, 10]
// // console.log(counting[4]);
// // console.log(counting[2]);
// // // array methods
// // // push( add element in last )
// // // need to pass argument in pranthesis
// // counting.push(15 , 18 , 20)
// // console.log(counting);
// // // Pop (delete element in last)
// // // no need to pass argements in pranthesis
// // counting.pop()
// // console.log(counting);
// // let freinds =["ali", "maryam", "bisma", "maha", "aqsa", "shiza", "javeria"] 
// // // push( add element in last )
// // freinds.push("mahnoor", "aisha", "hiba", "kiran")
// // // Pop (delete element in last)
// // freinds.pop()
// // console.log(freinds);
// // // unshift (add elemtent in array first index )
// // freinds.unshift("Ramsha", "yusra")
// // // shift (remove elemtent in array first index )
// // freinds.shift()
// // console.log(freinds);
// // // slice
// // // splice
// // // /////////////////////////////////////////loop///////////////////////////////////////////
// // for(let i = 1; i <= 50; i++){
// // console.log("thank you kamran tessori");
// // };
// /////////////////////objects//////////////////////////
// //well structured data
// // const student:{name:string, rollNo:number, class:string, address:string}=  {
// //     name: "maryam",
// //     rollNo:20201,
// //     class:"Eight",
// //     address:"karachi pakistan house#16"
// // }
// // // console.log(student.name);
// // //for dynamically use
// // const userPrompt = "name"
// // console.log(student[userPrompt]);
// // // nested object
// // const myDetails = {
// //     address:{
// //         city:"karachi",
// //         country:"pakistan",
// //         postalCode:12345,
// //     },
// //     name:"maryam",
// //     age:22,
// // }
// // console.log(myDetails.address);
// // console.log(myDetails.address.postalCode);
// // //non structured data
// // // array
// // // const myProperties=["maryam", 20201, "eight" , "karachi"]
// // // console.log(myProperties[1]);
// // //////////////////union literals/////////////////////////////////////
// // let rollno:string | number;
// // rollno="WMA-176176";
// // rollno=12234;
// // // dynamic type
// // // type alyas
// // type IStudentiInformation={
// //     name:string,
// //     cnic:number,
// //     age:number
// // }
// // let myInformation:IStudentiInformation={
// //     name:"maryam",
// //     cnic:123-4456-0,
// //     age:21,
// //  };
// ///////////practice
// //  type IStudent = {
// //     name:string,
// //     class:number,
// //     isMarried:boolean,
// //  }
// //  type ITeacher = {
// //     name:string,
// //     experienced:number
// //  }
// //  let myInfo:IStudent={
// //     name:"maryam",
// //     class:12,
// //     isMarried:true
// //  }
// ///////////////intersection
// //  let OkashaInfo:IStudent & ITeacher = {
// //     name:"maryam",
// //     class:12,
// //     isMarried:false,
// //     experienced:3
// //  }
// // /////////////2 types insected
// //  type intersectedType = IStudent & ITeacher
// //  let OkashaInfo2:intersectedType={
// //     name:"okasha",
// //     class:12,
// //     isMarried:false,
// //     experienced:3
// //  }
// //  console.log(OkashaInfo2);
// ///////////LITERAL TYPING
// type IIceCream = "Strawberry" | "Vanilla" | "blue berry";
// let iceCream: IIceCream = "Vanilla"
// ////////SRUCTURED Typing
// //  let ball = {
// //     diameter:10
// //  }
// //  let sphere = {
// //     diameter:20
// //  }
// // //  ball = sphere
// // //  console.log(ball);
// // //  console.log(sphere);
// // let tube= {
// //     diameter:30,
// //     length:40
// // }
// // ball = tube
// //nominal typing is not assign a object into onther abject
// //  let ball = {
// //     diameter:60
// //  }
// //  let sphere = {
// //     diameter:10
// //  }
// //  let tube = {
// //     diameter:20,
// //     length:10,
// //  }
// //  ball=sphere;
// //  sphere=ball;
// //////////////////////////////////enums
// //  used for stored groups of const
// //  access by value and key and dot notation
// //enum name is preffered in capatilize
// //enum feature is not in javascript
// //  enum Days{
// //    Thursday = "sunny weather",
// //    Monday  = 2,                 //edited numeric value
// //    Tuesday,
// //    Wednesday,
// //  }
// // //  console.log(Days[7]);
// // console.log(Days.Thursday);
// // console.log(Days.Tuesday);
// // console.log(Days.Monday);
// //  console.log(Days["Wednesday"]); 
// //  alternate of enums
// //literal typing 
// //  let days:"monday" | "tuesday"| "wednesday";
// /////////////////data types
// // any and unknown
// /////////////any we  can assign any data type
// // let val:any;
// // val = 2234;
// // val = true;
// // val = "abc";
// // val = undefined;
// /////////////////////unknown like any but 1 thing is better in unknown 
// ////we can change any type into unknown
// // let val2:unknown;
// // val2 = null;
// // val2 = 5;
// // val2 = undefined;
// // let val3:string = val;
// // let val4:string = val2;   ///error
// //////////////infinite loop
// // function abc(){
// //    while(true){
// //    }
// // }
// // abc()
// ///////////////////////type alias
// /////////////never data type
// // type abc = string & number
// //////////////////////type casting
// // when we need to type string to number and number to string we need to first change its type unknown and then change
// // let abc:string = 4 as unknown as string
// // let abcd:string = 5 as string;       ////////error
// // let abcde:boolean = 4 as boolean;    ///////error
// // let data:unknown;
// // let abcdef:boolean = data as boolean;
// ///////////////////////tuples
// ///not in javascript
// ////if we make array with types and legnth fixed we use tuples
// ////we can assign tytpe in array 
// // let trafficLight:string []=
// // ["green", "red", "yellow"]
// // let tuples:[string, boolean, number]=
// // ["maryam", true, 20]
// // tuples.push(12);
// // console.log(tuples);
// // //////////////////////functions parameters
// // /////default parameter
// // function greet(name:string="user"){
// // console.log(`hello ${name}`)
// // };
// // greet() /////////////////////////execute deffault parameter( user);
// // greet("maryam")
// //////////////////optioinal parameter
// // function greet(name?: string){
// //    console.log(`hello ${name}`)
// //    };
// //    greet() /////////////////////////execute deffault parameter( user);
// //    greet("maryam");
// /////////////////////////////////arrow function
// // compact way to written code
// // let name = ()=>{
// //    console.log("hello");
// // };
// // name()
// ///////////////////callback function
// ///pass as a argument in onother function]
// // function greeting(askName:()=>void){
// //    console.log("hello, greed");
// // };
// // function askName(){
// //    console.log("enter your name");
// // };
// // greeting(askName);
// // ///////////////////asycnchronous
// // console.log("first");
// // setTimeout(()=>{
// //    console.log("second");1000}
// // )
// // console.log("third");
// // console.log("first");
// // setTimeout(()=>{
// //    for(let i=0; i<=10000; i++){
// // console.log("abc");
// //    }
// // }
// // )
// // console.log("third");
// ///////////////sir ameen class
// // let makePizza ;
// // makePizza = "your pizza is being prepared";
// // console.log(makePizza);
// // function makeQourma (){
// //     return "qourma"
// // }
// // let dish = makeQourma();
// // console.log(dish);
// //////////////////promise
// // simple function
// // function makePizza (){
// //     return"pizza is being prepared"
// // }
// // let sirashariborder = makePizza(); 
// // console.log(sirashariborder);
// ///////////////// promises
// // 3 states of promises      //pending    //resolves    //reject
// // const helloPromise = new Promise((resolve) => {
// //     setTimeout( ()=> {
// //    resolve("hello world!")}, 10000  )//  after 10sec
// // } )
// // helloPromise.then((message) => console.log(message)
// // );
// // const conditionalPromise = new Promise((resolve, reject) => {
// //     const succes = Math.random() > 0.5;
// //     if (succes) {
// //         resolve("successees")
// //     }
// //     else {
// //         reject(new Error("failure"))
// //     }
// // }
// // );
// // let sirZia = new Promise((res, rej)=>{
// //     return res()
// // }
// // )
// // sirZia
// // .then((status)=>{
// //     console.log(status);
// // })
// // .catch((err)=>{
// //     console.log(err);
// // })
// // sir asharib class
// // OOPs  object oriented programming
// // convention    class name ka firt word capital hoga predefined rule
// // variable change in property
// // function chnge in method
// // type use for all
// // type CarType = {
// //     brand:string
// //     model:string
// //     year:number
// // }
// // interface only use for objects
// // interface CarType {
// //     brand: string
// //     model: string
// //     year: number
// // }
// // class Car implements CarType {
// //     brand = "toyota"
// //     model = "corolla"
// //     year = 2024
// // }
// // let myCar = new Car()
// // // console.log(myCar);
// // class Car1 {
// //     brand = "toyota"
// //     model = "corolla"
// //     year = 2024
// //     displayDetails() {
// //         return `Brand ${this.brand} Model ${this.model} Year ${this.year}`
// //     }
// // }
// // let myCar1 = new Car1()
// // console.log(myCar1.displayDetails());
// // console.log(myCar1);
// // function displayDetails(){
// //     return `Brand ${myCar.brand} Model${myCar["model"]} Year${myCar.year}`
// // }
// //////////////////////////////////sir ubaid class
// // encapsulation
// // class Student1 {
// //    public name2: string
// //     age2: number
// //     constructor(stdName:string,  stdAge:number){
// //        this.name2=stdName
// //        this.age2 = stdAge
// //     }
// //     canProgram(): void {
// //         console.log("this student can programming");
// //     }
// // }
// // let s1:Student1 = new Student1("ali", 20)
// // s1.age2=18
// // s1.name2="ali"
// // s1.canProgram()
// // console.log(s1);
// // abstract class
// // abstract class  takePhoto {
// //     filter:string
// //     brust:number
// //     constructor(filName:string, brustNo:number){
// //         this.filter= filName
// //         this.brust= brustNo
// //     }
// // }
// // // inheritance
// // class Instagram extends takePhoto {
// //     reelTime : number
// //     constructor(filName:string, brustNo:number, rltime:number){
// //         super(filName,brustNo)
// //         this.reelTime = rltime
// //     }
// // }
// // let instaApp: Instagram = new Instagram("whitness", 10, 10);
// // console.log(instaApp);
// // access modifiler/
// // getter setter
// class personData {
//     public name: string
//     private age: number
//     public experience: number
//     constructor(tName: string, tAge: number, tExp: number) {
//         this.name = tName
//         this.age = tAge
//         this.experience = tExp
//     }
//     set updateAge(updAge:number){
// this.age= updAge
//     }
// }
// let tData:personData = new personData("ubaid", 20, 3);
// tData.updateAge=30
// console.log(tData);
// // getter
// class-18
// practice
// // q-2
// var famousPerson:string = "Albert Einstein";
// var qoute:string = "A person who never made a mistake never tried anything new"
// console.log(`"Once ${famousPerson} said: ${qoute}"`);
// // q-3
// var personName:string = "Maryam";
// var title = personName.slice(0 , 1)
// var upper = title.toUpperCase()
// var remain = personName.slice(1)
// var titleCase = upper + remain
// console.log("Title Case: " + titleCase);
// console.log("lower Case: " +personName.toLocaleLowerCase());
// console.log("capital Case: " +personName.toUpperCase());
// // q-3
// var sum:number = 4;
// console.log(sum+sum);
// var sub= 16;
// console.log(sub-8);
// var multi = 4;
// console.log(multi*2);
// var divide = 16;
// console.log(divide/2);
// practice
// write a typescript function that uses async await to wait for 2 sec and then returns a string hello world
// async function greet(){
// await new Promise(resolve => setTimeout(()=>{
// return console.log("hello world");
// },2000))
// }
// greet().then(message=>console.log(message))
// async function greet(sum:number){
// await new Promise(resolve => setTimeout(()=>{
//     return console.log(sum + sum)
// },2000))
// }
// greet(4).then(number=>console.log(number)
// )
// function getNumber(){
//     return new Promise(resolve => setTimeout(()=>{
//         resolve(10)
//     },1000))
// }
// getNumber().then(number=>console.log(number)
// )
// function delaymessage(callback: () => void): void {
//     setTimeout(() => {
//         callback()
//     }, 1000)
// }
// delaymessage(()=>{
//     console.log("hi i am callback");
// })
// function object
// type Tperson ={
//     name:string,
//     age:number,
//     address:string
// }
// const person:Tperson={
//     name:"maryam",
//     age:20,
//     address:"landhi"
// }
// function personAcsses(person:Tperson){
// return person
// }
// console.log(personAcsses(person));
// callback
// function outerFunc(func:()=>void){
// console.log(2+2);
// func()
// }
// function innerFunc(){
//     console.log(4+4);
// }
// outerFunc(innerFunc)
// function outerFunction(callback:(name:string)=> void){
// let name ="ameen alam"
// callback(name)
// }
// outerFunction(function(name){
//     console.log(`hello ${name}`);
// // })
// function outerFunction(callback:(name:string)=> void){
//     callback("ameen")
//     }
//     function innerFunction(name:string){
//     console.log(`hello ${name}`);
//     }
//     outerFunction(innerFunction)
// setTimeout
setTimeout(function () {
    console.log("how are you after 2sec");
}, 2000);
console.log("hello");
setTimeout(function () {
    console.log("bye after 3sec");
}, 3000);
export {};
