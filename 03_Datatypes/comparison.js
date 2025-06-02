// Typescript not allow us to comapare with different data types
// we not get the predictable result when you compare

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/**
 Notes =>
    The reason is that an equality check == and comparisions > < >= <= work differently.
 Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and null > 0 is false

 i.e., if you uses compare like < > <= >= then it simply convert it into the null to 0 but in equality == it consider null as NAN....
 */

 // == and === are different from each other
 // == => used to just check the equality 
 // === => first check the datatype and then it's equality (Used as Strict Checking)

 console.log("2" === 2); // false (two different data types)

 // So Avoid as much as you can this types of comparison and write the clean code 

 let scorevalue = 10.4
 console.log(typeof scorevalue)