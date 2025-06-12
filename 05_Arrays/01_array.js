// Array => It is collection of multiple datatypes under single variable . In JS The arrays are resizeable....

const myArr = [1, 2, 4, "True", "Rushi"]

const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)

console.log(myArr[0])

// Array-copy operator makes the shallow copies

// Shallow Copy => it is an object is a copy whose properties share the same reference...(Dependent on the original & every changes refrect in the original)
// Deep Copy => It is an object is a copy whose properties do not share the same ref..(Independent of original & Changes do not show in the Original)

// Arrays ke andar bbhi prototype hota hai aur ik .length bhi usske sath hoti hai jab ham usse console pe likhe to 

myArr.push(6)
console.log(myArr);
myArr.pop() // just pop the last element in the array
myArr.unshift(10) // add the element at the starting of the array
myArr.shift() // just like pop it delet the element at the starting of array
console.log(myArr);

console.log(myArr.includes(9)); // gives Bool Value True if it is present
console.log(myArr.indexOf(9)); // gives index of number if it is not present then (-1)

const newArr = myArr.join() // Adds all the elements of an array into a string
console.log(myArr);
console.log(newArr); // Typeof => String

// Slice, Splice 

// Slice => it include the starting index till go to end index but not include te end index
// Spice => Just it include both the starting and end index in the array

console.log("A ", myArr)

const mya1 = myArr.slice(1, 3);
console.log("B ", myArr)
console.log(mya1)

const mya2 = myArr.splice(1, 3);
console.log("C ", myArr)
console.log(mya2)
// Key Difference between the slice and spice is;
// In Slice it just copy the array it not manipulate anything but in splice if you written (1,3) then 1 to 3 elements are deleted from the original array and they are just now in the spliced arry..

/*
Ex;
arrry = [1, 2, 3, 4, 5]
slice(0, 3) => sliceArray = [1, 2, 3] & OriginalArray = [1, 2, 3, 4, 5]
**** NO Array Manupulation Occurs *****
splice(1, 3) => spliceArray = [2, 3] & OriginalArray = [1, 4, 5]
**** There is Array Manupulation Occurs ****
*/