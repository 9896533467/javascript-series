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

//Datatypes-
