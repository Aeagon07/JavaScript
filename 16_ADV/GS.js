// Getter and Setter
class User {
    constructor(email, pass){
        this.email = email;
        this.pass = pass;
    }
    // hame koi things hide karni hai ya phir we want set something -> Getter-Setter
    // Always if you defien get you must define set also, They occurs in the pair

    // Get -> Class ke bahar se koi value get kar na hai 
    // Set -> CLass ke andar value set karna chahate ho

    // get pass(){
    //     return this.pass.toUpperCase();
    // }

    get pass(){
        return `${this._pass}svjf`;
        // jo output mein milega wo UPPERCLASS hoga 
        // Iss se kya hoga jo bhi pass access kar na chah ta hai usse 
        // original data base ke nadar ki value kya thi wo nahi smje ga or 
        // we add some restriction so who want the pass they don't get the 
        // original one...
    }

    set pass(value){
        this._pass = value;
        // data base ke andar value to same hi set hogi but koin value ko le raha hai usse UPPERCASE value milegi..

    }

    // set pass(value){
    //     this.pass = value;
    // }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
}
const hitesh = new User("h@hitesh.ai", "123");
console.log(hitesh.pass);
// But, here you use multiple this calls -> you get the error of Maximum Call Stack Size Exceeds...

// -> actually aap value set to kar rahe ho but wo baar baar call ho rah hai iss liye iss keandar error aa raha hai..
