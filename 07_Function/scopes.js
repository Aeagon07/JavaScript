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
// console.log(a) // => Not Accessible
// console.log(b) // => Not Accessible
console.log(c) // => You access c outside the scope also..It will prict the value 30.

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