let score = 23

console.log(typeof score);
console.log(typeof(score));

// To conver this into the string then
let valueInString = String(score)

console.log(typeof(valueInString))
console.log(valueInString);

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
console.log(boolIsLogg);

/**
(Boolean Conversion)
1 => true
0 => false
"" => false
"Rushi" => true
 */
