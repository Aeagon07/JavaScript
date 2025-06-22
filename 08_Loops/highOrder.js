// for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}
// ye ham string or arrays ya phir object ke upper bhi use kar sakte hai..
// jaha par bhi iterate karna ho to

const greetings = "Hello World";
for(const greet of greetings){
    console.log(`Each Element is ${greet}`);
}

// Maps
const map = new Map();
// Map holds the key-value pairs anr remembers the original inseration 
// order of keys means insertion ke andar order important hai..

// In Map, values are unique duplicy is not allowed..
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('EU', "European Union")

console.log(map);

// loop on map
for (const [keys, value] of map) {
    console.log(keys); // It priniting the whole arrays like ['IN', 'India']
    // But we don't want like that, they must print as the key-value pair
    
    // So after [keys, vlaue] you can easily access them as key-value pair
    console.log(keys, ':-', value);
    // gives you IN :- 'India';
}

// Could it iterate in the object ?
const myObj = {
    game1: 'BGMI',
    game2: 'COD'
}
for (const [game, name] of myObj) {
    console.log(game, ":-", name);
    // Gives you TypeError cause Object is not iterable in for of
}

// Is Map uses for-in loop ?
for (const key in map) {
    console.log(key)
    // It will print nothing cause => Maps are not iterable..
}

// Commonly Use case of the for-each

const myCoding = [
    {
        langague : "JavScript",
        fileExtention: "js"
    },
    {
        langague : "Python",
        fileExtention: "py"
    },
    {
        langague : "Rust",
        fileExtention: "rs"
    }
]

myCoding.forEach((val) =>{
    console.log(val.langague);
    // val => iterate throught multiple object like obj1, obj2, obj3
    // Then .key name will print the that keys value through all the object.
})