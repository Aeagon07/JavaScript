// In Interview => asked for what is call -> call transfer the current execution contest to another function => kind of there is function inside the function..
function setUser(username){
    // complex DB calls
    this.username = username;
    console.log("called!");
}
function createUser(username, email, pass){
    // setUser(username)
    setUser.call(this, username) // but just writting .call() never resolve the problem it just call but never change occur in the object 
    // when you use call() then optinally we can write the this at the start

    // this.username = username; ye mat karo sidha call the setUser
    this.email = email;
    this.pass = pass;

}

const chai = new createUser("Hitesh", "example@google.com", "123");
console.log(chai);
// when you see the output there is no username why?
// did they actualy call the fucntion or not?
// -> Simply, this method is not called,
// -> Technically JS just gives refercence not given the call

// If you see the it calls but not needed call cause there is problem which arieses is it remove callme() and his execustion contest so the varible decalare inside the call is not refer although

// so you have to hold reference no leaving them or removing their EC
// -> we use .call()
