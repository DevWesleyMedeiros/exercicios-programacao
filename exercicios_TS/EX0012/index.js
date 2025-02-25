var BankingAccount = /** @class */ (function () {
    function BankingAccount(saldo) {
        this.saldo = saldo;
    }
    Object.defineProperty(BankingAccount.prototype, "getBalance", {
        // Getter para o saldo
        get: function () {
            return this.saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankingAccount.prototype, "setNewDeposit", {
        // Setter para novo depósito
        set: function (novoSaldo) {
            try {
                if (novoSaldo > 0) {
                    this.saldo += novoSaldo;
                    console.log("Seu saldo atual \u00E9 de ".concat(this.saldo));
                }
                else {
                    throw new Error("O valor do depósito deve ser maior que zero");
                }
            }
            catch (error) {
                console.error(error.message);
            }
            finally {
                console.log("Operação de depósito finalizada");
            }
        },
        enumerable: false,
        configurable: true
    });
    // Método de retirada
    BankingAccount.prototype.withdraw = function (retirada) {
        try {
            if (retirada <= 0) {
                throw new Error("O valor da retirada deve ser maior que zero");
            }
            if (retirada > this.saldo) {
                throw new Error("Saldo insuficiente");
            }
            this.saldo -= retirada;
        }
        catch (error) {
            console.error(error.message);
        }
        finally {
            console.log("Operação de retirada finalizada");
        }
    };
    return BankingAccount;
}());
var myAccount = new BankingAccount(1518);
console.log("Meu saldo inicial: " + myAccount.getBalance);
myAccount.setNewDeposit = 1000;
console.log("Meu saldo inicial mais o depósito: " + myAccount.getBalance);
myAccount.withdraw(500);
console.log("Meu saldo após a retirada: " + myAccount.getBalance);
