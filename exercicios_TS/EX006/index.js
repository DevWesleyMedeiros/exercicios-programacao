var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Object.defineProperty(Carro.prototype, "carInfo", {
        get: function () {
            return [this.marca, this.modelo, this.ano.toString()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "newCarYear", {
        set: function (newYear) {
            try {
                // Verificar se o tipo é 'number' e se é um valor inteiro válido
                if (typeof newYear !== 'number') {
                    throw new Error('O ano deve ser um número.');
                }
                if (!Number.isInteger(newYear)) {
                    throw new Error('O ano deve ser um número inteiro.');
                }
                if (newYear <= 0) {
                    throw new Error('O ano não pode ser negativo ou zero.');
                }
                this.ano = newYear;
            }
            catch (error) {
                // Aqui o erro capturado terá mais informações sobre a natureza do erro
                console.error("Erro ao cadastrar novo ano: ".concat(error.message));
            }
        },
        enumerable: false,
        configurable: true
    });
    return Carro;
}());
var golzinho = new Carro("Gol", "G5", 2012);
console.log(golzinho.carInfo);
console.log("------------------------------------------------------");
console.log("Alterando o ano do golzinho: ");
golzinho.newCarYear = 2015; // Ano válido
console.log(golzinho.carInfo);
console.log("------------------------------------------------------");
console.log("Tentando alterar o ano para um valor inválido: ");
golzinho.newCarYear = "2015"; // Valor inválido (string)
console.log(golzinho.carInfo);
console.log("------------------------------------------------------");
console.log("Tentando alterar o ano para um valor negativo: ");
golzinho.newCarYear = -1; // valor inválido negativo
console.log(golzinho.carInfo);
