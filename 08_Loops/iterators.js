// While

let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`)
    index += 2;
}

let myArr = ["Flash", "Batman", "Superman"]
let arrIndex = 0;
while(arrIndex < myArr.length){
    console.log(`Value of array is: ${myArr[arrIndex]}`);
    arrIndex += 1;
}


// Do-While
let score = 1;
do {
    console.log(`Score is : ${score}`)
    score++;
} while (score <= 10);
// The concept in the do-while is whatever the condition weather it is true or false the do loop executed atleast 1 time so

// Case=>
let marks = 10;
// do {
//     console.log(`My Marks is : ${marks}`)
//     marks++;
// } while (marks < 10);
// It print the My Marks is 10 and stop 
// Also;
do {
    console.log(`My Marks is : ${marks}`)
    marks++;
} while (marks <= 10);
// In this case you got My Marks is 10 and stop
// Case first the do loop executed then while loop execute so in do marks value is increased tha't why while loop is not executed..

// work flow => do -> while(True) -> do