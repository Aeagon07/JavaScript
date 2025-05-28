const accountId = 13456
let accountEmail = "godaserushikesh07@gmail.com"
var accoundPassword = "12345"
accountCity = "Jaipur"

// accountId = 23 Gives you TypeError cause it is not allowed to change the const varible value.

accountEmail = "rg@gmail.com"
accoundPassword = "23435"
accountCity = "Bengaluru" // JS allows these type of declaration but it is suggestion that you not write like that

console.log(accountId);

// Want to print multiple variables then we can use the table 

console.table([accountEmail, accoundPassword, accountCity])

// Javascript ke andar variables declare karne ke 2 tarike hai let nd var { Scope }

/*
NOTE :- You Never use the var for defining the variables cuase if you use it is not scoped so if you change the value it changes every where so..(issues in the block and functional scope)
*/

let accountState;
// it gives you undefined 