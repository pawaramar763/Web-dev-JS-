// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score =100;
const marks = 20.3;

const isLoggedIn = true;
const outSideTemp = null;
let userId ;

const id = Symbol('123');
const uuid = Symbol('123');

console.log(id===uuid);


//Dynamic type langauage

//reference type / non primitive

//Array, Objects,  Functions

const heros = ["Hulk","Iron man", "Thor"];

const student ={
    studentId :14,
    sName: "Sk",
    city:"Pune"
}

const myFunction = function(){
    console.log(`Hello World`);
}
myFunction()



let myYoutube = "MyYo";

let anotherName = myYoutube;

 anotherName = "mi and you" 

console.log(anotherName);
console.log(myYoutube);


let user = {
    email: "user@gmail.com",
    age :30
}

let userTwo = user;

userTwo.age = 40;

console.log(user.age);
console.log(userTwo.age);
