const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Chai", password: "123"});
        }else{
            reject('ERROR: Something Went Wrong!')
        }
    }, 1000);
})
// .then() se values and .catch() se error show kar dunga
// const variable = promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// })

// console.log(variable); // ham check kar rahe hai ki ye jo variable kya wo return ki value store karega ki nahi..

// Gives you error so don't do this work

// How we do => Using The Concept Of CHAINING..
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
})
.finally(() => console.log("The Promise either resolved or rejected!!"))
// This above line will always executed after some amount of time 


// Promise not handle only by .then() and .catch() but you also handle them using the async and await 
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "123"});
        }else{
            reject('ERROR: JS Went Wrong!')
        }
    }, 1000);
})

// Promise is object (yeah it is essential to complete object but eventually it is ojbject..)
async function consumePromise() {
    try{
        const response = await promiseFive
        console.log(response); 
    }catch (error){
        console.log(error);
    }
}

consumePromise()

// Dekho if thers is no error in the code then async-await will give you the output 
// but when there is error then async-await could not handle the error so the error 
// shown to us wrpped the block into try-catch..


async function getAllUser() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        console.log(data)
    }catch(e){
        console.log("EL ", e);
    }   
}

getAllUser()
// If you trying to run the code without understanding that conversion of api reponse into json takes time you must use the await infornt of the response.json()

// Same Function in then formate...
fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    // console.log(typeof res) object dega..
    
    return res.json();// but we want the json formate
})
.then((data) => {
    console.log(data); 
})
.catch((error) => {
    console.log("E: ", error);
})