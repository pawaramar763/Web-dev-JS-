let score = "3n";
console.log(typeof score);

let valueInNumber = Number (score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(`--------------------------`);

let num = null;
console.log(typeof null);

let nullType =  Number(num)
console.log(nullType);
console.log(`----------------------------`);

// "33"  =>  33
// "33abc" => NaN
// true => 1   false => 0


let isLogIn = true;

let booleanLogIn = Number (isLogIn);
console.log( typeof booleanLogIn);
console.log(`-------------------------------`);

let digit = 55;
let stringDigit = String(digit);

console.log(stringDigit);
console.log(typeof stringDigit);




let str1 =  "hello";
let str2 = " good morning";

console.log(str1+str2);


console.log(1+2+"3");
console.log("3"+6+8);

let counter = 100;
counter++;
console.log(counter);
