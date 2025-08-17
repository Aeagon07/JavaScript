// Closure -> It is combination of a function bundled together(enclosed)
// with ref to it's surrounding state(lexial Env.)...

// lexial Scoping is neccessary to write the closure..

function outer(){
    let username = 'hitesh'
    console.log(secret); // Outer function also don't have access to the inner variable..
    function inner(){
        let secret = "my123"
        console.log("inner", username);
    }
    function inner2(){
        console.log("inner", username); 
        console.log(secret); // no child-child have no access..
    }
    inner()
}

outer()
console.log("TOO OUTER", username);

// If there is function inside the function then the function whitch is 
// inside the or inner has completly access to the outer his outer 
// function's variable..
// the sharing only happen with the parent and child no same level relation 
// or bhai-bhai relation works..

// Lexial Scoping Done..


// Closure ->
function makeFun(){
    const name = "Mozilla"
    function displayName(){
        console.log(name);
    }
    return displayName
}
const func = makeFun(); // when you decalre it outer function scope is gone from the execution contest then the question aries how now lexical scoping happen?
// -> yaha hame ne displayName ko return kiya hai to bas displayName nahi nahi jayega uska outer function if it exist uska bhi scope jayega
func();

// Uska pura lexical Scope jayega so you can use the name variable in the func()
//so, puri meomery share hoti hai na ki execution contest only of that inner fucntion
// In Int.-> bas uska execuation contest ja raha hai => No,
// pura lexical Scope Ja raha hai..

// closure -> jab bhi ham function return karte hai to uska pura scope return hota hai i.e., lexial Scope

// Practical Use Case =>
// here in HTML File it explain..