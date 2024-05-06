console.log(2>1);

console.log(null>0)     //false
console.log(null==0);   //false
console.log(null>=0);    //true
/*
The reason is that an equality check == and comparisons > <
>= <= work differently.
comparisons convert null to a number,treating it as 0.
Thats why(3) null >=0 is true and (1) null>0 is false.
*/

//strict check ===

console.log("2" ===2); //strictly check that both are string or bith or number
/*
Datatypes-

primitive(call by value)
string,Number,Boolean,null,undefined,symbol,Bigint
Number-
const score =100
const scoreValue=100.3

String-
const name="check";

Boolean-
const isLoggedIn=false
const isLogged=true

Null
const outsideTemp=null  //object

undefined-
const userEmail;

symbol-
const id = Symbol('123')

Bigint-
const bigNumber =234577798876554355n  //undefined


Non-primitive(reference)
array,objects,functions

Array-
const heros=["shaktiman","doga"]

objects-
let heros={
    name:"shaktiman",
    age:22
}
Functions-
const myFunction = function(){
console.log("check function");      //function
}
//function always return a function (object funcion)

js is a dynamically typed language
const score = 100;
const score ="name"
variables are determined at runtime.datatype will automatically
assigned at the time of complilation or code execution.



*/