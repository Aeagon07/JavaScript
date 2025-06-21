// Reduce => Method executes a user-supplied "reducer"
// iss ke andar two values hoti hai accumulator and currentValue of the array

const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} and currentValue: ${currVal}`);
    return acc + currVal;
}, 0)

console.log(myTotal);

// Yaha pe jo 0 hai wahi accumulator ki first value hoti hai.. 
// usske baad wo jo return value karta hai ussko as accumulator ki value consider kar ta hai..
/* jaise ki 1st case => acc = 0 and curruntValue of array is 1 => then return is 1
now, 2nd case => here acc = 1 and currentVAlue of array is 2 => then return 3
now, for 3rd case => here acc = 3 and currentValue of array is 3 => then return is 6 and your final ans is also 6
*/

// Writing in Arrow Function
const myTo = myNums.reduce( (acc, currVal) => {
    return acc*2 + currVal;
}, 0)

// advance writing
const myTo2 = myNums.reduce( (acc, currVal) => acc+currVal, 0)
console.log(myTo2)


// This technique widely used in the billing Price..

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 299
    },
    {
        itemName: "Python Devlopment",
        price: 999
    },
    {
        itemName: "Mobile Devlopment",
        price: 2999
    },
    {
        itemName: "Data Science Course",
        price: 10000
    },
    {
        itemName: "Web3 Devlopment Bootcamp",
        price: 25000
    }
]

// hame course add kar ne hai
const price = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0)

// More cleaner version
const price2 = shoppingCart.reduce((acc, item) =>  acc + item.price,0)

console.log(price);
console.log(price2);