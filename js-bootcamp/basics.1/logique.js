let temp = 55
// Operator AND logical - True if both sides are true . False otherwise
// Operator OR logical . True if at least one side is true . False otherwise

if (temp>=60 && temp<=90) {
    console.log('It is pretty nice out ')
} else if (temp <=0 || temp >=120) {
    console.log('Do no go out outside')
}
else {
    console.log('Eh , Do what you want')
} 
// challange area 
let isGuestOneVegan =false
let isGuestTwovegan = false

// Are both vegan? Only offer up vegan dishes.
if (isGuestOneVegan  && isGuestTwovegan  ) {
    console.log('Only offer up vegan dishes')
}
// At least one vegan? Make sure to offer up some vegan options.
else if (isGuestOneVegan || isGuestTwovegan){
    console.log('Make sure to offer up some vegan options')
}
// Else , Offer up anything on the menue
else {
    console.log('Offer up anything on the menue ')
}
