// Lexical scope (static Scope)
// Global scope -Defined outside of all code blocks
// Local scope  -Defined inside a code blocks 
// in a scope we can access variables defined in that scope ,or any parent/

   //Global scope (varOne)
  //Local scope (varTwo)
  //Local scope (varThree)
  //Local scope (varFour)



let varOne ='varOne'
if (true){

    console.log(varOne)
    let varTwo='varTwo'
    console.log(varTwo)
    let varFour='varFour'
    console.log('varFour')
}
if(true){
    let varThree='varThree'
    console.log(varThree)

}
