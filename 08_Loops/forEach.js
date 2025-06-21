// For-each

const coding = ["JS", "PY", "JDK", "G++", "RS"]

coding.forEach(function (val) {
    // this is a callBack funtion
    console.log(val);
})

// But Usually most used callBack Function => Arrow
coding.forEach((items) => {
    console.log(items);
})

// Function in for-each
function prinitMe(items){
    console.log(items)
}
coding.forEach(prinitMe) 
// Hamesha function ka refernce dena for-each ke andar ussko sidha execute mat karna..

coding.forEach((items, index, arr) => {
    console.log(index, index, arr);
})