import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    validate = (): boolean => {
        if (this.status) {
            return this.status
        }
        throw new Error('Conta inválida')
    }

    deposit = (value: number) => {
        if(this.validate()){
            this.balance += value + 10
            console.log('Depósito realizado com sucesso!')
        }
    }
}