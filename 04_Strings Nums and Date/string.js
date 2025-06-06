const name = "Hitesh"
const repoCount = 50

// console.log(name + " Value: " + repoCount); it is not recommanded now days..

console.log(`Hello my name is ${name} and my git repo count is ${repoCount}.`);
// It called string interpretation 

const gameName = new String('HiteshFC')

console.log(gameName[0]); // Gives you the 'H'
console.log(gameName.__proto__); // Ye khali nahi hai usse access kar ne ke liye hame browser pe jana hoga it just gives the different methods..

console.log(gameName.length); // 8
console.log(gameName.toUpperCase()); // 8
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 5);
console.log(newString);
// substring had a range => [start, end). It ignore the negative value

const anotherString = gameName.slice(-7, 5);
console.log(anotherString); // you can use the negative values rest all the range is same 

const newStr = "   Hitesh     "
console.log(newStr);
console.log(newStr.trim()); // It just remove the extra spaces in the string

const url = "https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20', '-')); // => https://hitesh.com/hitesh-choudary

console.log(url.includes("hitesh")) // => gives you true

console.log(gameName.split('-'))