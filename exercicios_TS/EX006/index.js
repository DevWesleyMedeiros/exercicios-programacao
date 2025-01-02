"use strict";
class Carro {
    marca;
    modelo;
    ano;
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    get carInfo() {
        return [this.marca, this.modelo, this.ano.toString()];
    }
    set newCarYear(newYear) {
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
            console.error(`Erro ao cadastrar novo ano: ${error.message}`);
        }
    }
}
const golzinho = new Carro("Gol", "G5", 2012);
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
