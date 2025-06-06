const score = 400;
// console.log(score)
// console.log(typeof(score)) // there is no explicite calling so it gives you Number type

// You can create the Number explecity
const balance = new Number(100);
// console.log(typeof(balance))

// console.log(balance.toFixed(2)) // used in e-commerse website or in the product price labling
// console.log(balance.toString().length)
// console.log(balance.toString())
// console.log(typeof(balance)) // you calling it so it behave like object

const otherNumber = 1231.354
// console.log(otherNumber.toPrecision(4))

const hunder = 1000000
// console.log(hunder.toLocaleString('en-IN')); // It's Defalut is US Standar(1,000,000) but you can change it 

// JS ke andar min_value, max_value, casefinite epslon values bahut saare method hai jo ham use kar sakte hai 

// ****************************** MATH **********************************************

// console.log(Math);
// console.log(Math.abs(-4)); // just convert negative value to positive
// console.log(Math.round(4.6)); // rounding off (5)
// console.log(Math.ceil(4.2)); // gives you upper value i.e., 5
// console.log(Math.floor(4.7)); // gives you lower value i.e., 4

// console.log(Math.random()); // Isski value hamesha 0 to 1 ke bitch mein hogi..[0, 1]

// console.log((Math.random()*10) + 1); // so any value is > 1

// if you want integer values and also the lower value you prefered then you use like
// console.log(Math.floor((Math.random()*10) + 1));

const min = 10;
const max = 20;

// Hame in ke bitch ki integer values chaiye to ham
console.log(Math.floor(Math.random() * (max - min)) + min);
// BreakDown => 
// max - min => to iss ke bitch waale numbers milenge.
// then usse hame ne random jo ki [0, 1] ke bitch ke number deta hai usse multiply kiya to decimal integer number milrnge.. like 5.345332 or 3.24629 like that
// ab inko pure Integer number milnege  4, 5 like you use ceil/floor as your wish
// after all the number is wirtten then you just add min value cause number should greater than min. number soo..
// finally we got what we want... 