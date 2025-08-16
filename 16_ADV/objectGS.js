// Object Based Getter-Setter..
const User =  {
    _email: 'r@rg.com',
    _pass: "abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    },

    get pass(){
        return this._pass.toLocaleUpperCase();
    },

    set pass(value){
        this._pass = value;
    }
}

// But this sysntax is not used nowdays...
console.log(User.email);

// Now there is intresting fact
// you can use the factory fucntion
const tea = Object.create(User);
console.log(tea.email); // gives you correct output as you expect
// but,
console.log(tea._email); // you directly acces the keys in the object User 
// which are private so it not goes to the get-set it directly gives you 
// output of -> 'r@rg.com'

// get-set ko properties private hai ya usse matalab nahi hai, it just override the process meomery se le ke aana aur usse meomery ke andar deke aana.. 
// so jo email dikh raha wo method nahi balki ik proprty hai so user don't need to check weather it is _email or just email..
// getter-setter is special method put on the properties..


// For Private Properties -> New Proposal

// In ES22 -> you use the # instead of _ for better code..