function setUser(username){
    // complex DB calls
    this.username = username;
}
function createUser(username, email, pass){
    setUser(username)
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
