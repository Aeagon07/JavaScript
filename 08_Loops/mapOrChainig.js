const numNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = numNumber.map((num) => num + 10)

console.log(newNums);

// Using for-each
let newArr = []
newNums.forEach((nums) => {
    nums + 10;
    newArr.push(nums)
})

console.log(newArr)

// Chaining
const newNumber = numNumber
                    .map((num) => num * 10) // [10, 20, ...]
                    .map((nums) => nums + 1) // [11, 21, ...]
                    .filter((val) => val > 50); // [51, 61, ...]

// Dekhi ye first map ke andar already 1 array create ho gaya hai aur wahi aaray ham next map ke andar de rahe hai 