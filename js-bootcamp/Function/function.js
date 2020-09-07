// Function input , code , outpout 
let greetUser = function () {
    console.log('welcome user!')
}
greetUser()
greetUser()
greetUser()
let greetSquare = function (num) {
return num*num
}

     let value  =greetSquare(3)
     let otherValue =greetSquare(10)
     console.log(value)
     console.log(otherValue)

     //Challange Area : 
     // ConvertFahrenheitToCelsius 
     // Call a couple times (32==>0) (68====>28)
     // Print the converted values


let ConvertFahrenheitToCelsius = function (fahrenheit) {
    let result = (fahrenheit-32)* 5/9
     return result 
}
let valeur = ConvertFahrenheitToCelsius(32)
let autreValeur=ConvertFahrenheitToCelsius(68)
console.log(valeur)
console.log(autreValeur) 