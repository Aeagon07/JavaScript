/* 
XMl HttpRequest is heavily used in the past although nowdays there is a 
fetch request but earlier it is used in the AJAX Programming..

AJAX => Async JavaScript and XML programming

Overview -> 
There is readyState in XMLHttpRequest which contain 5 steps 
0 -> UNSENT => Client has been created open() not called
1 -> OPENED => open() has called
2 -> HEADERS_RECEIVED => send() has been called and headers and status are available 
3 -> LOADING => Downloading resposnseText holds partial data 
4 -> DONE => operation is completed


Let's Talk About the Consoloe.log and V8 Engine..
console.log or the document (DOM) is not the part of core Javascript

Javascript is the wrapper on the CPP that's why the implementation of the console.log is written in the cpp 

there is writeFile jaise ham printf se ham screen pe likh te hai same so ye engine 
pura browser ke upper jata hai aur directly nahi likh ta they give dev tool space 
inspect element ke anadr console mein to waha jake iss ko likho 

That's how the console.log written on the console 

in sab ke liye there is namespace called as the D8Console used in the repo or code
*/
