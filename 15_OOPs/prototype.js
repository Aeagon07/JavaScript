// GOAL ->
// let myName = "hitesh    ";
// let mychannel = "chai  ";

// console.log(myName.truelength) // aisa method


// Factory function is nothing but the function that is used to create the object called a factory function..
let myHeros = ["Thor", "Spider-man"];

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Factory Fucntion => .create
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all Object!`)
}

heroPower.hitesh(); // now hitesh is presen in the prototype

// now check array also contain or not the hitesh
myHeros.hitesh()
// Yes, Array also access the this hitesh prototype

// But here you inject or add property to direct object but, what happen when you add this to the array
Array.prototype.heyHitesh() = function(){
    console.log(`Hitesh Says Hello!`);
}
// techniqualy myHero which is an array have access to heyHisteh but the 
// heroPower which is object does not have an access of heyHitesh
myHeros.heyHitesh() // -> Arrays has power, Yes
// heroPower.heyHitesh() -> Correct, it doesn't has access to it.. gives you error..


// inheritance

const User = {
    name: 'chai',
    email: 'chai@google.com'
}
const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User // This is Prototypial Inheritance..
// Kisi Aur ki properties ko ham kaise access kar sakte hai isse hai 
// prototypial inheritance bol te hai...

// Modern Approach
Object.setPrototypeOf(TeachingSupport, Teacher);

// Now GOAL =>
let myName = "ChaiAurCode   ";

String.prototype.truelength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`) iss ka access nahi hai hamare pass old 
    // code mein hota tha ab nahi hota 
    console.log(`True Length is: ${this.trim().length}`)
}
myName.truelength()

"Hitesh  ".truelength()
"iceTea".truelength()