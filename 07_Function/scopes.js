// { } inne hi scope kehate hai jo if-else/ function ke sath aate hai..
// objects & scopes are different concepts..

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
/*
To ye three if ke scope ke andar define hai to wo scope ke bahar accessable nahi hone chaiye? Right?
*/
console.log(a) // => Not Accessible
console.log(b) // => Not Accessible
console.log(c)
// // => You access c outside the scope also..It will prict the value 30.

// agar aap ne var ko globally declare kiya aur ik block scope like if ka 
// scope similar like above uss ke andar jake changes kiye to jab aap var 
// ka variable jab print karoge to wo apni block scope andar ki chnage hui 
// value ko print karega..
// Ex.,
/* 
var c = 300
if(true){
    var c = 40;
}
console.log(c) => Gives you 40 not the 300 which you define globally..
 */
// That's why we not use the var as much..

// Let =>
let l = 500
if(true){
    let l = 34;
    console.log("Inner: ", l);
}
console.log(l);
// That is block scope => the value of l is blocked as 34 for that scope..

// IQ => Jo ham browser pe global scope hai aur jo node se terminal run kar te hai wo jo globa scope hota hai wo alag hote hai..
// **************************************************************************
// Scope Levels =>

function one(){
    const username = "Hitesh"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    console.log(website); //gives you error cause two scopes is ended so you don't allow to access the website outside the two..

    two() // Ye execute hoga aur Hitesh print karega 
    // Cause bahar waala function andar executable hai but andar ka bahar execute nahi hoga.. 
}
one()
// Concept => chote bacche badon ki ice-cream le sakte hai but bade choton ki ice-cream nahi le sakte so..

// Ik function ke andar dusare sub function ko call ka alag se ik call 
// satck banata hai => jaise two ko call kiya na usska alag se call satck 
// bana hoga (or) alag scope bana hoga..

// Find Errors =>
if(true){
    const username = "Hitesh";
    if(username == "Hitesh"){
        const webstite = " Youtube";
        console.log(username + website); // Hitesh Youtube
    }
    console.log(website) // Error
}
console.log(username); // Error 

// Why Error => Because all the console.log() variable are scoped inside that particural scope so they are not allow to access outside the scope...

// ******************* Interesting ***********************************

console.log(one(6));
 // => It is completly fine it will execute the code and print also..
function one(num){
    return num + 1;
}
one(5)

const secFunction = function(num){
    return num + 1;
}
secFunction(5)  // It also execute the function as same as they execute

// ##########################

// But if you did something like this

addTwo(6) // => Then It gives you reference error cause the addTwo variable or reference is not created yet it created down so..
const addTwo = function(num){
    return num + 1;
}
// Variable in JS can hold function too...

// => This concept is used in hosting.......