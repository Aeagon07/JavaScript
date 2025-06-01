let score = 23

// console.log(typeof score);
// console.log(typeof(score));

// To conver this into the string then
let valueInString = String(score)

// console.log(typeof(valueInString))
// console.log(valueInString);

// if you write the some string in it you define like this "23abc" although it conver into type Number but if you want to see it; they appeared as the NAN(NOT A NUMBER) so be carefull while using it..

// Notes 
/* 
(Number Conversion)
"33" => 33
"Hitesh" => NAN
true => 1 and false => 0
null => 0
undefined => NAN
*/

let isLogg = 1

let boolIsLogg = Boolean(isLogg)
// console.log(boolIsLogg);

/**
(Boolean Conversion)
1 => true
0 => false
"" => false
"Rushi" => true
 */

// ****************** OPERATION *************************

let value = 3
let negValue = -value
console.log(negValue)
/**
 2+2 => 4
 2-2 => 0
 2*2 => 4
 2**3 => 8
 2/2 => 1
 3%2 => 1
 */

 let str1 = "Hello";
 let str2 = "Rushikesh";

 let str3 = str1 + str2
 console.log(str3); // Hello Rushikesh

 console.log("1" + 2 + 2); // 122
 // Yaha pe string first hai to sabhi ko string ki tarah treat karenge 
 console.log(1 + 2 + "2"); // 32
 // yaha numeber first hai to sabhi ko number treat karenge then string se bas concate karenge.
 console.log("1" + 2)
 console.log(1 + "2")
 // these type of writing the code is not good please avoid such types of coding practice so your impression not down
 console.log(+true) // not good shows = 1

 // Get some Knowledge on the prefix and postfix operations on the javascript....
