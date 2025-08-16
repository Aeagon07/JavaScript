// Older Syntax of defining getter and setter using the properties..

function User(email, pass){
    this._email = email; // you have to private them
    this._pass = pass;
    // if you not define like this it will print the error...

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })

    Object.defineProperty(this, 'pass', {
        get: function(){
            return this._pass.toUpperCase();
        },
        set: function(value){
            this._pass = value;
        }
    })
}

const cust = new User("h@hitesh.ai", "abc");
console.log(cust.email);
console.log(cust.pass);
