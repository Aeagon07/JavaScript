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