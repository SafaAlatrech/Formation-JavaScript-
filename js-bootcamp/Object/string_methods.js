let name = '  Alatresh Safa        '

// length property 
console.log(name.length)
// convert upper case 
console.log(name.toUpperCase())
// convert lower case 
console.log(name.toLowerCase())
// includes methods 
let password = 'abcdefghijklmnopasswordqrstuwxyz'
console.log(password.includes('password')) 
// Trim 
console.log(name.trim())
// challange Area : 
// isValidPassword
// length is more than 8 _ and it dosen't contain the word password 

let isValidPassword = function (password) {
    if (password.length>8 && !password.includes('password')) {
        return true 
    } else {
        return false 
    }
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('asdfp@@hhdkaohekd,'))
console.log(isValidPassword('password'))

