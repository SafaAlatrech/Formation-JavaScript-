// Global scope (convertFahrenheitTocelsius,tempOne,tempOne)
 //local scope (fahrenheit, celsius)
 //local scope (isFreezing)
let convertFahrenfeitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit-32)* 5/9
    if (celsius<=0) {

        let isFreezing=true 

    }

    return celsius
}
let tempOne = convertFahrenfeitToCelsius(32)
let tempTwo = convertFahrenfeitToCelsius(70)
console.log(tempOne)
console.log(tempTwo) 

