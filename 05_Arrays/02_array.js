const marvel_Heros = ["Thor", "IronMan", "Captain America"]
const dc_Heros = ["Superman", "Batman", "Black Adam"]

// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros);
// console.log(marvel_Heros[3][2]); // Accesing the element in the array dc

// Combine two Arrays
// Concat
 const allHero = marvel_Heros.concat(dc_Heros)
//  console.log(allHero)

// Spread Out Operator => Spread the induvuial values 
 const all_new_Heros = [...marvel_Heros, ...dc_Heros]
//  console.log(all_new_Heros)

 const another_arr = [1, 2, 3, [4, 5, 6], 7, [9, 10, [11, 12]]]

 const myArr_Level = another_arr.flat(2); // prefer to give the maximum recursion depth of array here i am jsut give you an example 
 console.log(myArr_Level)
 // Note:- 
 // If you using only flat() it means it is on depth 1
 // In Above Question the depth is 2 so you rather go with 2 or infinity to automatically decide the depth and print the array...

 // checking the input is comming is array or not 
 console.log(Array.isArray("Hitesh")); // false
 // want to convert input to array then
 console.log(Array.from("Rushi")); // ['R', 'u', 's', 'h', 'i'] 

 // Interesting Thing for the Interview
 console.log(Array.from({name: "Hitesh"})) // gives you [] cause you should ensure whcih part to make array either key or value ?

 let socre1 = 100
 let socre2 = 200
 let socre3 = 300

 console.log(Array.of(socre1, socre2, socre3)) // Returns a new array from a set of elements.
// [ 100, 200, 300 

// Summmary of Important Method =>
    /*
    1) isArray() => checks it is array or not
    1) from() => convert incoming input like string to array. In case of key value pair you have to define which arrya you want (from key or from value)
    1) of() => return array from the set of elements or variables..
*/