// Object using the constructor => Singleton 
const tinderUser = new Object() // Singeton object 
// const tinderUser = {}  yeh bhi same hai but ye non-singleton object hai..

tinderUser.id = "123abc"
tinderUser.name = "Sammay"
tinderUser.isLogged = false
 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname : "Rushikesh",
            lastname : "Godase"
        }
    }
}

console.log(regularUser.fullname.username.firstname)
// There is ? notation used for if value doesn't exit it is used in case of
// the values comming from the api's

// combination of the object 
const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// Assign => It copies all the numberable own properties from one or more 
// source object to the targeted object..
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);
// The { } it is an optional parameter is giving or not doesnot changes the
// output but it is good to gave that { } in the assign 
// Simply the { } => Considered as the target 
// and the other are consider as the source...

// You can use the spread operator
const obj4 = {...obj1, ...obj2}
console.log(obj4)

// HOW Database values come
const user = [
    {
        id: 1,
        email: "someone@gmail.com"
    },
    {
        id: 2,
        email: "someone@gmail.com"
    },
    {
        id: 3,
        email: "someone@gmail.com"
    },
]

user[1].email // gives you email of the first array object of the user

// Intresting Part
console.log(tinderUser)
console.log(Object.keys(tinderUser));
// The intreseting part was the value you get it is in form of an array
// like ['id', 'name', 'isLogged'] as array datatype
// it is very important to use in looping and use in database to 
// It is same goes with value as well
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser)); // array ke andar array bana diya
// jata hai means uss array ka first element ik array hoga uske andar keys
// and value ko array hoga..
// => [ [ 'id', '123abc' ], [ 'name', 'Sammay' ], [ 'isLogged', false ] ]

// Check the property ever exist in the objet
console.log(tinderUser.hasOwnProperty('isLogged')) // gives you boolean responce