// prop are nothing but the properties...

// when in corporation world you don;t want to give access to all of all fucntion you written in the code for example you don't want to give access of users id then you use the static key word with function ..

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static craeteId(){
        return `123`
    }
    // As I disscuss we don't want to give acces to every object which is instantead by the same class.. so use the static
}

const hitesh = new User("hitesh");
// console.log(hitesh.craeteId()) gives you error cause we denined the access

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "ip@phone");
iphone.logMe();

console.log(iphone.craeteId()); // also denined the access to the child whos trying to inherite...