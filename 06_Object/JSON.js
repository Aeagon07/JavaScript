// Object De-structuring

const course = {
    coursename : "JS In Hindi",
    price : 999,
    courseInstructor: "Hitesh"
} 

// You want to extract the value then 
// course.coursename

// also
const {courseInstructor: instructor} = course // the name is too big then you can compress it => called as de-structure
console.log(instructor); // Hitesh

// In react the de-structuring is the most common method :-
// const navbar = ({company}) => {
// The { } shows that there is de-structuring happen
// }
// navbar(company = "Rushi")

// Eariler the vlues comes from backend is in form of XML nowdays, they comes in the JSON Format
/*{
    "name" :  "Hitesh",
    "coursename" : "JS in Hindi",
    "price" : "free"
}*/

// Another data will get like in form of array that we seen in object_singleton
/*
    [
        {

        },
        {},
        {},
    ]
*/