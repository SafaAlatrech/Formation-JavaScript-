let myAccount = {
    Name: 'Alatrech Safa',
    expenses: 0, 
    income:1000000000
}
//let otherAccount = myAccount
//otherAccount.expenses =2
//otherAccount.Name = 'Ingénieur Alatresh Safa'

let multipler = function (account, amount) {
   
    account.expenses = account.expenses + amount
    console.log(account)
}

multipler(myAccount,2,80)
console.log(myAccount)

// addIncome 
let addIncome = function (account,amount){
    expenses.income= expenses.income + account
}
let resetAccount = function (account,amount){
    account.expenses=0
    amount.expenses=0
}
let getSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has ${balance}. ${account.income} in income ${acount.expenses} in expenses `
    
}

// addExpenses
// addExpense 
// getAccountSummary  
// resetAccount 
// getAccountSummary 

