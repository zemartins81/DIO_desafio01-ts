export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log('Depósito realizado com sucesso!')
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance >= value){
      this.balance -= value
      console.log('Saque realizado com sucesso!')
      return
    }
    throw new Error('Saldo insuficiente')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  } 
}
