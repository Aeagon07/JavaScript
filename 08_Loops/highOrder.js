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