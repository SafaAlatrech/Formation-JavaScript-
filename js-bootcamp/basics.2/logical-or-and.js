let temp =30
// logical and operator 
if (temp>=60 && temp<=90){
    console.log('It is pretty nice out')
    } else if (temp<=0 || temp>=120) {
    console.log('It is hot ')
} else {
    console.log('it is very hot temperature ')
}
//challange :
inGuestOneVegan =  true 
inGuestTwoVegan = true  
if (inGuestOneVegan && inGuestTwoVegan) {
    console.log('only offers up dishes')
} else if (inGuestTwoVegan || inGuestTwoVegan){ 
    console.log('Make sure to offer up some vegan options ')
} else {
    console.log('offer up anything on the menue ')
}