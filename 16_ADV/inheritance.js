class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, pass){
        // as we know there is .call() but we don't use them cause there is class syntax,
        super(username)
        this.email = email;
        this.pass = pass;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tea = new Teacher("chai", "chai@example", "123");

tea.addCourse();

const masalaChai = new User("MasalaChai")

masalaChai.logMe()

console.log(tea === masalaChai) // false
console.log(tea === Teacher) // false cause it is instance not they are same

console.log(tea instanceof Teacher) // true
console.log(tea instanceof User) // true (Teacher is instance of User and 
// tea is instance of the Teacher so, tea is instance of User also...)