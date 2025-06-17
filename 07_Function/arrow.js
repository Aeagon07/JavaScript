// This => Used to refere the current context of that scope 
const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to Website`) // refering the current key in the object scope...
        console.log(this); // Gives you current contest means all the keys with their value..
    }
}

user.welcomeMessage(); // Print the Hitesh
user.username = "Sam";
user.welcomeMessage(); // Now, it chnages to Sam
// cause we not given the hardcore value of user it just we used this so 
// what ever value comes in that object as the username it will print that.

// IQ => what refers this in node envirment or outside any scope ?
console.log(this) // Dekhe ham jab node envirment ke andar hote hai tab jo 
// this empty { } object ko refer karata hai... 

// ************** Importanat **********************
// Their is catch in it => This ob browser runs completly differently;
console.log(this) 
/*
IN the Browser it will print like => Window{0: global, 1: Window} like that;
why this happen => Because window is the global object in the browser but 
in node there is no gloal object that's why in node envirment it give you 
{} but in window it gives you contest considering the window as global 
object...
*/
// *************************************************

// If :
function chai(){
    let username = "Hitesh"
    console.log(this.username) // Gives you undefined
    // Ham Function ke andar jake this keyword ko use nahi karate..
}
chai()
/* To Node Envirement ke andar hamare pass bahut saari vlaues aati hai cuase this are define inside the chai function..*/

const chai = function(){
    let username = "Hitesh"
    console.log(this.username);
}
chai() // It still gives you undefined

// Arrow Function
const chai = () =>{
    let username = "Hitesh";
    console.log(this.username) // Gives you undefined 
    console.log(this) // It gives you empty { } 
}
// In only diff is in arrow function you get empty { } when you try to 
// print this but in other function they gave you lots of contest or 
// reference attached with this like performance, 
chai()

// Key Note => 
// 1) In arrow function you still define this keyword but it gives you empty { }..
// 2) But In Regular function they gave you refernce values or contest in the node..
// 3) Even though this is not used in any type of function because it can not run this property in the function...

// AF in Depth => Syntax
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4))
// In Arrow Funtion you can implicitly returning the values so..
const sum = (num1, num2) => num1 + num2

const sum = (num1, num2) => (num1 + num2)

console.log(sum(3, 4))

// If you write { } brases then you have to give return but you not use them or use of bracket ( ) then there is no need to write the return..

// Kyun aise hai reason => 
    // Q) How will you writen the object in this that's why you use the bracket for return the object..
const sum2 = (num1, num2) => ({username: "Hitesh"})

// You cannot write like this => const sum = (num1) => {username: "Hitesh"}
// It will gives you undefined..
