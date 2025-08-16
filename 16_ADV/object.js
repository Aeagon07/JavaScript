// In Interview we gave Math.pie value is something you have to convert it into 4 how can you do? is it possible or not?

// console.log(Math.PI);
Math.PI = 5;
// console.log(Math.PI); // there is no change in value, SO that's our Task

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") 
// gives some hidden properties of the object.. 
// console.log(descriptor)

// as you see the you got some value but the implemnetation of core 
// javascript engine so how many times you trying to overide the value 
// nothing willl happen..

// Even through they are very hard coded you can not turn false into true..

// That's why you cannot change the value of pi or it is constant also(every Math keys).. 

const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvailable: true,

    orderchai: function(){
        console.log("Code Discard HO GAYA!")
    }
}
 // can this object also hidden prop or not?
// console.log(Object.getOwnPropertyDescriptor(chai)) 
// -> gives you undefine cause the there is no property or key you define 
// here just give the object..

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// control using the define 
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// looping -> When you define that object is no enumerable

for (let [key, value] of Object.entries(chai)) {
    // check if there is function present
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}
// In Output you see the name property never gets printed because of the enumerable: fasle
