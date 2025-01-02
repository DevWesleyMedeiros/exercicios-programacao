"use strict";
class ErroProduto extends Error {
    codigoProduto;
    nomeProduto;
    constructor(mensagem, codigoProduto, nomeProduto) {
        super(mensagem);
        // Propiedade que define um nome para o erro do produto
        this.name = 'ErroProduto';
        this.codigoProduto = codigoProduto;
        this.nomeProduto = nomeProduto;
    }
    exibirDetalhesErroProduto() {
        return `Erro ${this.codigoProduto} no produto ${this.nomeProduto}`;
    }
}
try {
    throw new ErroProduto("Produto não encontrado", "55555", "Camiseta");
}
catch (error) {
    if (error instanceof ErroProduto) {
        console.log(error.exibirDetalhesErroProduto());
    }
    else {
        console.log(`Erro desconhecido`, error);
    }
}
