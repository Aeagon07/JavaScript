// Flow Control In Javascript..
const isLogged = true;

if(2 === '2'){
    console.log("executed")
}else{
    console.log("This message always print")
}

// <, >, <=, >=, ==, !=, ===

// = => Use to assign value
// == => Used to check the vlaues are correct or not
// === (Strict Equal)=> it is used to compare same data type means 2 === '2' is give you false 

// Scope ke andar ka koi bhi variable bahar accesseable nahi hota.. 
// That's why in scope we not use the var 

// parallel writing avoid kare cause it is not readable
const hasCedit = true;
const debitCart = true;

if(hasCedit && debitCart || 2==3){
    console.log("Allow to buy course");
}

// && => AND    
// || => OR


// Switch Sytax =>
    
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const mounth = 3
switch (mounth) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("Default Value")
        break;
}