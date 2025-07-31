// Make a Card of containing the button of follow, photo, Name and folower Number

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    // console.log(typeof res) object dega..
    return res.json(); // but we want the json formate
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("E: ", error);
})