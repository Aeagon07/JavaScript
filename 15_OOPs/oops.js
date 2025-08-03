// Object literal  -> Simply an Object
const user = {
    username: "Hitesh",
    loginCount : 8,
    isLogged : true,

    getUserDetails : function(){
        // console.log("Got user details hide form you!")
        console.log(`Username: ${this.username}`)
        // if we not use it it 
        // give me an error cause fucntion don't kown what user name is 
        // although it is define in the scope but it cannont accessing 
        // that's why we use the this
        console.log(this) // shows you the current constest or the current object user which is pointed by the this 
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

// This keyword => it is basically a current contest in the scope
// you konw that writing this in the global give you empty or in browser gives you the window object  

// Constructor Function  

function UserOne(username, loginCount, isLogged){
    // this is used with the variable
    this.username = username;
    this.loginCount = loginCount;
    this.isLogged = isLogged
    
    return this
    // return nahi bhi hoga to bhi ye return to hoga cause return is  implecity define
}

const user1 = UserOne("Hietsh", 12, true);
// const user2 = UserOne("Chai Aur Code", 11, false) // It overwrite the values that is not the good thing in the code ...
console.log(user1) // it will show you but, 

// constructor function ik function ki copy deta hai ik instance deta hai uss ka use kar ke duasre koi usse affect nahi hote  
const user3 = new UserOne("JS", 23, true)
console.log(user3);

// new working -> if you use new keyword then there is creation of empty object called instance
// 2) then, construction function call hota hai new keyword ke wajah se ye aapke jitn bhi argument ko wrap karte hai object ke andar
// 3) this keyword ke andar argument inject ho jate hai 

console.log(UserOne.constructor)
// it is nothing but the self reference of the any function

// instanceOf 
console.log(user1 instanceof UserOne) // False -> cause we don't use the new so it not create the instance of the object..
console.log(user3 instanceof UserOne) // True
console.log(user3 instanceof Object)  // True