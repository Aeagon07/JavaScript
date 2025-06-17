// Immediate Invoked Function Expressions (IIFE)

// Regular Function
function chai(){
    console.log(`DB Connected`)
};
// IIFE is used when jab global scope se things polute honi start ho..
// Global scope ke andar kabhi polution ho jata hai usse problem hoti hai 
// to jo bhi uske variables hai ya function hai uske polution ko hatane ke 
// liye use hota hai..

chai() // Typo Error => Not a function

// Syntax => (function writing) (Execution)
(function tea(){
    console.log(`New DB Connect`)
})();

(function chai(){
    // named IIFE
    console.log(`DB Connected`)
})();

/* If you have to succesive aur any iife present in your code then must ensure that the first iife ends ther is ; written on the last 
so writting (); done the second iife expresionalso mey now work*/

// Why ? => Because the JS don't konw ki kaha tak immediate invoke karana hai ..

chai() // If there is iife in your code then isure it define at the top 
// cause you don't do that then they gives you error cause other function call is above them that's why chai is declared below..


// You can use the arrow function in it also..
(function newFun(){
    console.log("New Connect")
})();

(() => {
    // Simple IIFE
    console.log("Another Connect")
})();
// Successfully execute the code..

// How can you pass the attribute 
((name) => {
    console.log(`DB Connected To ${name}`)
})("Hitesh");
// => DB Connected Two Hitesh