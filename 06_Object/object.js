// In JavaScript you declare Object in two ways 1) as Literal 2) as Constructor

Object.create // Singleton formation => declare as the Literal

// Object by Iterals
const JsUser = {
    name : "Rushi",
    "full Name" : "Rushikesh Godase.",
    age : 21,
    email : "rushi2google.com",
    isLogged : false,
    lastLoginDay : ["Monday", "Saturday"],
}
console.log(JsUser.email) // This way to access is good but you try;
console.log(JsUser["email"])

// why we prepfer it if you want to access the full name then you could not done with . you must use the []
console.log(JsUser["full Name"])
// console.log(JsUser.full Name) => They are not execute because of the gap between the word full & Name.

const mySimby = Symbol("Key1");
// IQ => How you can declare the symbol as key in Object
// const myObj = {
//     name : "Hitesh",
//     age : 18,
//     mySimby : "Key1",
// }
// But here you can clear seen the typeof(mySimby) => string not symbol
const myObj = {
    name : "Hitesh",
    age : 18,
    [mySimby] : "myKey1",
}
console.log(typeof(myObj[mySimby])) // gives you after all it is sring
console.log(typeof myObj.mySimby) // gives you after all it is undefined

// Just remember the synatxt how you represent the symbole in the object or jab hame symbole ki tarah represent karana chahate tab [use them] otherwise just write as normal

// Inserting & Freezing
myObj.name = "Hitesh Choudhary"
console.log(myObj);
Object.freeze(myObj)
myObj.name = "Rushikesh Godase"
console.log(myObj); // due to freeze the object it cannot refrect the changes you made..

// Adding Function
myObj.greeting = function(){
    console.log("Hello myObj")
}
// passing the object keys into the function 
myObj.greetingTwo = function(){
    console.log(`Hello ${myObj.name}`)
    console.log(`Hello ${this.name}`) // jo bhi hamara object hai uss ke andhar ki saari value ko wo this refer karega just like myObj an object name did..
}
console.log(myObj.greeting) // => Gives you functions refernece but not execute the function
console.log(myObj.greeting()) // => Executed the funtion along with undefined 
console.log(myObj.greetingTwo()) 


// Write a summary in the notebook..   