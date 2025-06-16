// function sum(num1, num2){
//     console.log(num1 + num2)
// }
function sum(num1, num2){
    // let res = num1 + num2
    // return res;
    return num1 + num2;
}
const result = sum(5, 7)
// agar hum ne string ya phir ik integer and string as argument pass kiya to js apna dimag lagake uss ko concate kar deta hai..
// So checking of argument is very neccessary..
console.log("Result: ", result)
// by defination function ka ik rule hota hai ki return ke baad ka kuch bhi 
// code wo execute nahi karta...    

function loginUser(username){
    if(!username){
        return `Please Enter Username`
    }else{
        return `${username} just logged in`
    }
}

console.log(loginUser("Hitesh"))
// if you just execute the function then it will never print it because you 
// never say to print them that's why you not get the output...
console.log(loginUser());
// if you not pass anything then it gives you undefined cause aap ne usse 
// define hi nahi kiya.. 
// ****************************************************************************
// If you want more price should display in the cart then how can you do it?
// => REST Operator(the syntax is similar like the spread operator)
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(199, 399, 499, 299)) 
// If you want this all items will print by the function...

// The rest operator convert these price values into the array.
// IQ =>
function interviewQuestion(val1, val2, ...num1){
    return num1;
}
console.log(interviewQuestion(342, 667, 900, 100, 499))
// val1 => 342; val2 => 667; & num1 => [900, 100, 499]
// ##########################################################################
// Passing an Objet in the function
const user = {
    username: "Hitesh",
    price: 199,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}
handleObject(user)
// To if you doing such things then you have to take of the type safty of 
// keys if not then there is null or undefined message you saw to print.
// Iss liye prefer typescript ko karte hai cause uske andar type checking ho jati hai..

// OR => You can diretly pass the object in it
handleObject({
    username: "Sam",
    price: 399,
})

// Passing of array in the function
const newArray = [200, 300, 400, 500]

// Return 2nd value of the array 
function returnArray(getArray){
    return getArray[1];
}

console.log(returnArray(newArray));
// same you can directly pass also
console.log(returnArray([199, 299, 399, 499]))