// Ham kai baar maan lete hai ki ye true hai ya phir ye false hai..
const userEmail = ""

if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Don't have user email")
}

/* "" empty string hai to wo false consider kar rahe hai aur string ke andar kuch likh hai "Rushi" usse ham true consider kar rahe hai..
 */

// Falsy Values
false, 0, -0, BigInt (0n), "", null, undefined, NaN

// Rest all are the truthy value
"0", 'false', " ", [], {}, function(){} 
// above all are very important for iterview perspective

// How to check they are empty or not
if(userEmail.length === 0){
    console.log("Array is Empty")
}

// Object
const myObj = {}

if(Object.keys(myObj).length === 0){
    console.log("Object is Empty.")
}

// Object.keys(myObj) => gives you array
// then .length gives you the size of that array...

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10; 
val1 = null ?? 10; // ye us hota hai agar kisi complex function se value aa rahi hai to wo assign karlo nahi to safty ke liye null ko consider karlo..

val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20;

console.log(val1);

// NCO => It is just fall back operator used when you have to use the dat from the application.. 

// Terniary Operator

