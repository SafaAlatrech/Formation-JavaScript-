let num =   103.394
console.log(num.toFixed(10))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max-min+1)) + min
console.log(randomNum)

// challange Area : 
// 1 _ 5 _ True if correct _ false if not correct 
let inf = 0
let sup = 1
let makeGuess = function (inf , sup  ) {
    let randomNum = Math.floor(Math.random() * (sup-inf+1)) + inf
    if (randomNum>=1 || randomNum<=5 ) { 
        return true 
    } else { 
        return false 
    }
}
console.log(makeGuess(1))
