// function _ input(argumant),code,output (return value)
let greetUser = function () {
    console.log('welcome user')
}
greetUser()
greetUser()
greetUser() 
greetUser()
let square = function (num)  {
let result=num*num
return result
}
let value = square(3) 
let otherValue= square(10)
console.log(value)
console.log(otherValue)
// Challange area :
// Convert fahrenfeit to celius 
// call a couple of times (32==>8) (60==>20)
// Print the converted values 

let convertFahrenfeitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit-32)* 5/9
    return celsius
}
let tempOne = convertFahrenfeitToCelsius(32)
let tempTwo = convertFahrenfeitToCelsius(60)
console.log(tempOne)
console.log(tempTwo)