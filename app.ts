import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(50)

console.log("peopleAccount")
peopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)

console.log("companyAccount")
companyAccount.getBalance()

companyAccount.withdraw(10)

console.log("companyAccount")
companyAccount.getBalance()

const specialAccount = new SpecialAccount('DIO', 30)
specialAccount.deposit(50)
specialAccount.deposit(50)

console.log("specialAccount")
specialAccount.getBalance()