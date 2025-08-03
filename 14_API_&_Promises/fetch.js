fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data); 
})
.catch((error) => {
    console.log("E: ", error);
})

// What exactly fetch is => fetch() is the global method to start the 
// process  of fetching  aresource  from  the network.

// Returing a promise which is fulfilled once the response is available..

// **IVQ
// if you request to the promises and there is an error code 404 then this 
// code where you get in resolve or in reject?
// => it alway give you as response cause it is not error because when 
// broswer fail to request then we get error in case the browser never 
// request...

// how we send the particular thing through api
/* => const headers = {
        'C ontent-Type': 'text/xml',
        'Breaking-Bad': '<3',
};
fetch('https://example.com/', { headers });

fetch('https://example.com/', {
    method: 'GET',
    body: new FormData(),
});
*/


// What actually happen is as you know there are fucntion like setTimeout 
// after calling them they generate a task queue which store the function 
// to be executed next and to top of the global..

// but, in fetch it also called then generate the queue but this time it g
// enerate the queue called Micro Task Queue which is priority queue so 
// that it execute before the task queue fucntions...


// Working ->
/*
response = fetch('something') The response goes to two ways first in meomery to create some space or some variables to store and second goes to web browser or node.
At web browser we get the network request then there is two part either 
request goes to network succuessfully or not, the successfull network 
request goes to onFulfill array which is created at time of space creation 
and unsuccessfull network access goes to onRejection array which also 
created at that time..
basically resolve have onfullfill[] and reject have onReject[] and your 404 error is also goes to onfullfill[]..
Now, there is data a private variable intially there is no value or it is undefined it define when onfullfill[] and onReject[] they give response filled in data variable..
then, data variable is responsible to fullfill the response in global meomery..
*/
