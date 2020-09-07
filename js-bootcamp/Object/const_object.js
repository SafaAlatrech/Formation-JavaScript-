//const isRaining = true 
//console.log(isRaining)

const person = {
    age: 23
}
person.age= 24
console.log(person) 

// Challange Area : 
const gradClc = function (score , total) {
    const percent = (score/total)*100 
    let letterGrade = ''
  if (percent>=90) {
      letterGrade='A'
  } else if (percent>=80) {
      LetterGrade ='B'
  } else if (percent>=70) {
    LetterGrade ='C' 
  } else if (percent>=60) {
    LetterGrade ='D' 
  } else {
      letterGrade ='F'
  } 
  return `You got a ${letterGrade} (${percent}%) `

}
const result =gradClc(12,20) 
console.log(result)