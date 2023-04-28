import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  private validateStatusCompanyAccount = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
 
  getLoan = (value: number): void => {
    if(this.validateStatusCompanyAccount()){
      this.balance += value
      console.log('Emprestimo realizado com sucesso!')
    }
  }
}
