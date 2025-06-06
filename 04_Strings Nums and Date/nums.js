const score = 400;
console.log(score)
console.log(typeof(score)) // there is no explicite calling so it gives you Number type

// You can create the Number explecity
const balance = new Number(100);
console.log(typeof(balance))

console.log(balance.toFixed(2)) // used in e-commerse website or in the product price labling
console.log(balance.toString().length)
console.log(balance.toString())
console.log(typeof(balance)) // you calling it so it behave like object

