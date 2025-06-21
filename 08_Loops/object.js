const obj = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

// For object iteration we have => For-in

for (const key in obj) {
    console.log(key); 
    // for geting the value of the keys you must use like this
    console.log(`${key} shorcut of langague ${obj[key]}`);
}

// Can we iterate Array?
const programming = ["Java", "CPP", "Rust", "Javascript", "Go", "Ruby"]

for (const lang in programming) {
    console.log(lang); // it gives you only keys
    console.log(programming[lang]);
}

// why => Cause in the for-in it will print the keys directly like console log keys but in other loop like for-of it direclty print the value of the keys specially see in the array..

// Array you can iterate using the both for-in & for-of ***