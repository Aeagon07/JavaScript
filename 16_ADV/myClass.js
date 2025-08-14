// Nowdays Version of the JS -> ES^6

class User {
    constructor(username, email, pass){
        this.username = username;
        this.email = email;
        this.pass = pass;
    }

    encryptPassword(){
        return `${this.pass}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("chai", "chai@example", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function User1(username, email, pass){
    this.username = username;
    this.email = email;
    this.pass = pass;
}

User1.prototype.encryptPassword = function(){
    return `${this.pass}abc`;
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const newChai = new User1("Hitesh", "hitesh@google.com", "123");

console.log(newChai.encryptPassword());
console.log(newChai.changeUsername());