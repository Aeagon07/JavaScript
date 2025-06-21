const coding = ["js", "cpp", "py", "rs"]

const values = coding.forEach((item) => {
    console.log(item)
    return item;
})

console.log(values) // For each loop not return the value **

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let ansNum = nums.filter((num) => num > 4) // It return the values 
console.log(ansNum);
// Jab bhi ham filter use karate hai tab wo call back fucntion leta hai jo each vaules ko access karega uske baad hame condition deni hoti hai agar wo condition satisfised hogi tabi wo kuch return karega..

// jab bhi filter ke andar scope start ho tab you must write the return
// let ansNum = nums.filter((num) => {
//     return num > 4;
// })

// How you use the foreach
const newNums = []
nums.forEach((num) => {
    if(num > 4){ 
        newNums.push(num);
    }
})
console.log(newNums);

// Both can you use it's on you ..

const book = [
    {title: 'Book 1', genre: 'Science', publish: 1981, edition: 1989},
    {title: 'Book 2', genre: 'History', publish: 1992, edition: 1998},
    {title: 'Book 3', genre: 'Non-Fiction', publish: 1999, edition: 2004},
    {title: 'Book 4', genre: 'Fiction', publish: 1997, edition: 2003},
    {title: 'Book 5', genre: 'History', publish: 1991, edition: 1996},
    {title: 'Book 6', genre: 'Fiction', publish: 2000, edition: 2005},
    {title: 'Book 7', genre: 'Science', publish: 2007, edition: 2011},
    {title: 'Book 8', genre: 'Non-Fiction', publish: 2010, edition: 2015}
];

let userBook = book.filter( (bk) => bk.genre === 'History');

userBook = book.forEach( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'Fiction';
})

console.log(userBook);