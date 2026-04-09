/* Vamos criar um sistema para analise de churrasco. Ele será capaz de calcular a quantidade de carne necessária com base no número de convidados e o custo total do evento. */
// Consumo padrão 400g por pessoa
// Preço da carne: considere $R$82,40 por kg
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.MEAT_PER_PERSON = 0.4; // 400g por pessoa convertido para kg ou 400 / 1000
    Constants.PRICE_PER_KG = 82.4; // preço por kg
    return Constants;
}());
var MeatCostsCalculatorPerPerson = /** @class */ (function () {
    function MeatCostsCalculatorPerPerson() {
    }
    MeatCostsCalculatorPerPerson.calculateMeatAmount = function (people) {
        if (people <= 0) {
            throw new Error('O número de pessoas deve ser maior que zero.');
            // quando eu lanço um erro, a execução do código é interrompida e a mensagem de erro é exibida. Isso é útil para evitar cálculos inválidos e garantir que o número de pessoas seja positivo.
        }
        return people * Constants.MEAT_PER_PERSON;
    };
    return MeatCostsCalculatorPerPerson;
}());
var TotalCostCalculator = /** @class */ (function () {
    function TotalCostCalculator() {
    }
    TotalCostCalculator.calculateTotalCost = function (amountOfMeat, pricePerKg) {
        if (amountOfMeat < 0 || pricePerKg < 0) {
            throw new Error('A quantidade de carne e o preço por kg devem ser maiores ou iguais a zero.');
        }
        return amountOfMeat * pricePerKg;
    };
    TotalCostCalculator.calculateCostPerPerson = function (totalCost, people) {
        if (people <= 0) {
            throw new Error('O número de pessoas deve ser maior que zero.');
        }
        return totalCost / people;
    };
    return TotalCostCalculator;
}());
var Barbecue = /** @class */ (function () {
    function Barbecue(title, people) {
        this.barbecueTitle = title;
        this.peopleComing = people;
        this.meatPrice = Constants.PRICE_PER_KG; // Permite mudar o preço para um churrasco específico, se quiser
    }
    Barbecue.prototype.showTotalCost = function () {
        throw new Error('Método ainda não implementado.');
        // isso serve para indicar que o método showTotalCost ainda não foi implementado, mas é esperado que seja implementado no futuro. Isso é útil para evitar erros de execução caso alguém tente chamar esse método antes de ele ser implementado.
    };
    //'shows' em um único relatório para evitar recalcular a mesma coisa várias vezes
    Barbecue.prototype.showFullReport = function () {
        console.log("\n--- Analisando: ".concat(this.barbecueTitle, " ---"));
        console.log("Convidados: ".concat(this.peopleComing, " pessoas"));
        // Calculamos tudo de uma vez aqui dentro do método
        var meatAmount = MeatCostsCalculatorPerPerson.calculateMeatAmount(this.peopleComing);
        var totalCost = TotalCostCalculator.calculateTotalCost(meatAmount, this.meatPrice);
        var costPerPerson = TotalCostCalculator.calculateCostPerPerson(totalCost, this.peopleComing);
        console.log("Carne necess\u00E1ria: ".concat(meatAmount.toFixed(2), "kg"));
        console.log("Custo total: R$".concat(totalCost.toFixed(2)));
        console.log("Custo por pessoa: R$".concat(costPerPerson.toFixed(2)));
    };
    return Barbecue;
}());
var myBarbecue = new Barbecue('Churras dos amigos', 20);
myBarbecue.showFullReport();
// myBarbecue.showTotalCost() // Isso vai lançar um erro porque o método showTotalCost ainda não foi implementado.
