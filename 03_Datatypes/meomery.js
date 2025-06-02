// two types of meomery => Stack(primitive) and Heap(non-primitive)

// Stack -> COPY (call by value) changes in copy 
// Heap -> Reference (call by ref.) changes in original value

let myYT = "HiteshChoudary";

let anotherYT = myYT;

anotherYT = "ChaiAurCode";

console.log(myYT)  // ==> "HiteshChoudary"
// it not change the value because it passes the value not ref. so it makes copy instead of that

console.log(anotherYT) // ==> "ChaiAurCode"

// Let see another example 

let userOne = {
    name: "Rushi",
    age: 20,
}
// here userone goes to stack and the data or the key-value pairs goes to the heap sooo..
// userone refere the value from heap (userOne -> heap)

let userTwo = userOne;
// Now you define new userTwo but it also refer to that ref. tooo.. (userTwo -> same heap ref.)
// changing the value
userTwo.name = "Hitesh"

console.log(userOne)
console.log(userTwo)

// You clear seen that changes occurs in both userOne and userTwo...

// This is because of the givinge ref or call by reference....

/** 
***********************************************************************************************************************

********************************************* Summary *****************************************************************
Stack ki andar ham copy banaate hai variables so they have no rights to change in directly in original variable
But,
In Heap, we uses the call by ref. so you ref something and you changed it then it changes in every where cause they don't make copies of variables....

*/ 