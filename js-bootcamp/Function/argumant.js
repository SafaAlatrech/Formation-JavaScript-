// Multiple argumant : 
let safa = function iline (a,b,c){ 
    return a*b*c
}
let result = safa(2,2,2)
console.log(result)

// Defaults argumant 

let safsoufaAl = function ALATRECH (name='Safa',score=100) { 
    return 'Nom: ' + name+ ' ' + 'Score:' + score 
}
let scoreText=safsoufaAl() 
console.log(scoreText)
// Challange area : 
// total , tipPercent 

let java = function script (total , tipPercent = .2 ) {
    let percent = tipPercent*100
    let tip= percent*tipPercent
 return `A ${percent} % tip on ${total} `
}
let street = java (100)
console.log(street)
let name ='Aylan'
console.log(`Hey, My name is ${name}`)