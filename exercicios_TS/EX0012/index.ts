class BankingAccount {

    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    // Getter para o saldo
    get getBalance(): number {
        return this.saldo;
    }

    // Setter para novo depósito
    set setNewDeposit(novoSaldo: number) {
        try {
            if (novoSaldo > 0) {
                this.saldo += novoSaldo;
                console.log(`Seu saldo atual é de ${this.saldo}`);
            } else {
                throw new Error("O valor do depósito deve ser maior que zero");
            }
        } catch (error) {
            console.error(error.message);
        } finally {
            console.log("Operação de depósito finalizada");
        }
    }

    // Método de retirada
    withdraw(retirada: number): void {
        try {
            if (retirada <= 0) {
                throw new Error("O valor da retirada deve ser maior que zero");
            }

            if (retirada > this.saldo) {
                throw new Error("Saldo insuficiente");
            }

            this.saldo -= retirada;
        } catch (error) {
            console.error(error.message);
        } finally {
            console.log("Operação de retirada finalizada");
        }
    }
}
const myAccount = new BankingAccount(1518);
console.log("Meu saldo inicial: " + myAccount.getBalance);

myAccount.setNewDeposit = 1000;
console.log("Meu saldo inicial mais o depósito: " + myAccount.getBalance);

myAccount.withdraw(500);
console.log("Meu saldo após a retirada: " + myAccount.getBalance);
