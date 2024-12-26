const accountId = 891992
let accountEmail = "sakpal.vaibhav92@gmail.com"
var accountPassword = "12345"
accountCity = "Thane"
let accountState;

// accountId = 2 // not allowed 


accountEmail = "abc@xyz.com"
accountPassword = "22222222"
accountCity = "japan"

console.log(accountId);

/*
prefer not to use var 
beacause of issue in block code and function code
*/


console.table([accountId, accountPassword, accountCity, accountEmail, accountState])