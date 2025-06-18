// Iteration = loops

// For
for (let i = 0; i <= 10; i++) {
    const element = i; 
    console.log(element);
}
// ctrl + D => used to craete duplicate instance change at a time in Object/ any..

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for(let j = 1; j <= 10; j++){
        console.log(`Inner loop values: ${j} and outer loop value: ${i}`);
        // The output is first print outer loop thne inner loop executed 5 times then increament in value of i++ then print the statement and again inner loop run 5 times.. 
        // so 0 => 5; 1 => 5; 2 => 5; ....; 10 => 5

        // Print tables from 0 to 10
        console.log(`${i} * ${j} = ${i*j}`) 
        // console.log(i + '*' + j + ' = ' + i*j);
    }   
}


// You can used to access the every element present in the array.. 
let myArr = ["Flash", "Batman", "Superman"]
console.log(myArr.length) // gives you 3
// In array first element is 0 then 1 and 2 so 3 may execed the length tha't why we use the < instead of <=
// if you go outside the array then it will give you undefined cause there is no outOfBound error in the Javascript
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}


// Break and Continue
for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`Detected 5`)
        break; // run till 4 after that at 5 print above statemnet and exit the code
    }
    console.log(`Value of i is ${i}`);
}

for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`Detected 5`)
        continue; // It skip the condition 1 times only..
    }
    console.log(`Value of i is ${i}`);
}
// Difference 
/* Break => It breaks / exit the code when condition gets true
But,
   Continue => It skip that condition 1 times and not execute or print this 5 and still continue the code..
what happen actually (continue)=>
        Value of i is 4
        Detected 5
        Value of i is 6
        .....
Bas wo Value of 5 print nahi karta aur rest code ko execute karne deta hai code exit nahi karta..
*/