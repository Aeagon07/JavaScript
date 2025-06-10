// Date

const myDate = new Date();
// console.log(myDate); // The given object is not readable so our task to convert it into readable format

// console.log(myDate.toString()); 
// console.log(myDate.toDateString()); // Gives you day month date nd year
// console.log(myDate.toISOString());
// console.log(new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })) // MM/DD/YYYY, Timezone
// console.log(myDate.toLocaleDateString()); // MM/DD/YYYY
// console.log(myDate.toJSON()); // The ISOString and JSON are similar output

// console.log(typeof myDate); // Object cause we create a instance 


// Created Date 
let myCreate = new Date(2023, 0, 7)
// console.log(myCreate.toDateString())
// Date(YYYY, MM, DD, Num, hr, sec) and month will start from 0 (i.e., 0 = Jan)
myCreate = new Date(2024, 4, 27, 10, 30, 20)
// console.log(myCreate.toLocaleString()); // 5/27/2024, 10:30:20

myCreate = new Date("2026-01-27") // YYYY/MM/DD
// console.log(myCreate.toLocaleString()); // Yaha Jan is 1 st month

myCreate - new Date("01-14-2025") // Prefered => MM/DD/YYYY

// TimeStamp
// We use this concept in booking rooms in hotel or specially booking clones like Airbnb
let myTime = Date.now()
// console.log(myTime); // to ye ik value dega aur wo hame compare karenge mydate se for example
// console.log(myDate.getTime()); 
// Date se timestamp nikala hai..
// So ham unn date ke timestamp se compare karke booking proccess kar sakhe.
// Ye saara comparison mini sec mein hota hai..

// To hame sec mein vale chaiye uss ke liye 1000 se divide karenge 
// console.log(Math.floor(Date.now()/1000));

let newDay = new Date()
console.log(newDay.getMonth() + 1) // ususally to avoid confusion


// You can do customzation in the localString 
newDay.toLocaleString('default', {
    weekday : "long"
})
// Just like that.....