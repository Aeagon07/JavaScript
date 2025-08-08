// Behaviour of the Javascript..
// JS has Protypal Behaviour it cheking from child if not found goes to parent then grand-parent untill he got NULL value

// May be reason behind we cannot use this in the arrow function

// Protype is the only whi give you access to new keyword, classes, this keyword or protypial inheritance or inheritance it also due to prototype

// In JS end of the day everything is object and this object indicate the null..

function multiply5(num){
    return num*5;
}

multiply5.power = 2;

console.log(multiply5(5)) // 25
console.log(multiply5.power)  // 2
console.log(multiply5.prototype) // {}

// In JS, function is fucntion and object to we can use it like a object too in our code
// In Prototype all his own properties + context of this keyword also stored in the prototype

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++; // this means jis (jis ne bhi bulaya hai usska kam kar do)
}
createUser.prototype.printme = function(){
    console.log(`price is ${this.score}`);
}

const chai = createUser("chai", 25)
// console.log(chai);
const tea = createUser("tea", 250)

// myArray.prototype.map() -> we are not declare like this
// myArray.map() -> correct

// chai.printme() -> It gives you error and here the new key word is important..
// we add the value to the variable is fine but it shows you undefine cause we never define that additional properties which createUser hold variable we just transfer the values in it..

const newchai = new createUser("chai", 30);

newchai.printme()

// NOTES =>
    
/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/