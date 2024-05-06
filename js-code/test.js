const accountId = 12345
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

// console.log(accountId);
// console.table([accountId,accountEmail,accountPassword,accountCity])

// assingned in memory like accountId is the memory name

/*
prefer not to use var
because of issue in block scope and functional scope
after variable declare we not assigned any value to variable so it show undefined
let accountState; shows undefined
Q- null and undefined difference
Q-const let var difference
Q-why do we do not use var nowdays
Q-what if we not assign variable to name
*/
let score ="Name";
console.log(typeof score)  //string
let age =33
console.log(typeof age)    //number
let check ="33abc" 
console.log(typeof check)  //string

let checkNumber = Number(score)
console.log(typeof checkNumber) //number

let isLoggedIn ="Name"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)  //true

let nextIsLoggedIn =""
let nextBooleanIsLoggedIn = Boolean(nextIsLoggedIn)
console.log(nextBooleanIsLoggedIn)  //false
/*
Datatypes-
number 
bigint
string =""
boolean = true/false
null = standalone value
undefined 
symbol = unique

object
console.log(typeof age) //number
console.log(typeof undefined) undefined

datatype conversion-
let score ="Name";
console.log(typeof score) = string name
let age ="33"
console.log(typeof age) = number 33
let check ="33abc" = NaN
console.log(typeof checkNumber) Not a Number

let checkNumber = Number(score)
console.log(typeof checkNumber) string name

let isLoggedIn ="Name "
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) true

let isLoggedIn =" "
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) false when value is empty

"33"=33
"33abc"=Nan
true= 1;false=0

*/
