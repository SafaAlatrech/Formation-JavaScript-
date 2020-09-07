// Challange Area
// Student scores, Possibles Score 
// 15/20 ------> You got a C (75%)! 
// A 90-100, B 80-89, C 70-79, D 68-69, F 0-59

let gradClc = function (score , total) {
    let percent = (score/total)*100 
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
let result =gradClc(12,20) 
console.log(result)
