// Promisess ka matalab wo queue mein to lagega but abi ke abhi uss task ko complete 
// nahi karega 
// Def -> It is object represent the eventual completion of an asyncronous operation 
// and it's resulting value..

// Earlier there is no promises so there is third party librery called Q and BlueBird which allow us to use the fetch() catch() and finally()

const promiseOne = new Promise(function(rsolve, reject){
    // Do an async task
    // DB Calls, cryptography, Network 
    setTimeout(function(){
        console.log('Async task is completed!!')
        rsolve()
    }, 1000)
})

// Must settle the connection of the resolve and then
promiseOne.then(function(){
    console.log("Promise Consumed")
})

// Always the async task will run first then the promise consumed task 

// There is shoeter way to do that,
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2")
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved")
})


// resolve ke anadr ham only object input daal te 
const promieThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Hitesh", email: "chai@example.com"});
    }, 1000)
});

promieThree.then(function(user){
    console.log(user);
})