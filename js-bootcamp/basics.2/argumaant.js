// Multiplay argumant :
let add = function (a,b,c) {
    return a+b+c
}

let result  = add (10,1,8) 
console.log(result) 
// Default argumants :
let getScoreText = function (name='Eline', score=110){
   return 'name: '  + name + ' -score: ' + score
}
let scoreText=getScoreText()
console.log(scoreText)


// Challange area : 
// Total, tip percent .2
let getTip= function (total, tipPercent= .3){
return total*tipPercent
}
let tip=getTip(1000)
console.log(tip) 

let name = 'safa'
let age = 12
console.log(`Hey, my name is ${ name }, My age is ${age}`) 

//let result = getScoreText (Eline,99) 
    //console.log(result)




