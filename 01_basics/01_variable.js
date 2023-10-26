const accountId = 144553
let accountEmail = "samiran2334@gmail"
var accountPassword = "12345"
accountCity = "Jaipur" // it is possible to declare a variable with out let var const but it is not recomended

let accountState

// accountId = 2 // const can't be changed it will throw TypeError

accountEmail = "setua2000@gmail.com"
accountPassword = "2563738"
accountCity = "Delhi"

console.log(accountId);

/*
These days it is prefered not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // console.table prints multiple variables in tabular format