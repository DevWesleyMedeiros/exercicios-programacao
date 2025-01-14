"use strict";
// Base class for Card Payment
class PagamentoComCartão {
    nomeDaConta;
    valorFaturaOuBoleto;
    parcelaAtrasada;
    taxaJuros;
    valorJuros;
    quantidadeDiasAtrasado;
    constructor(nomeConta, valorFaturaOuBoleto, parcelaAtrasada, taxaJuros, quantidadeDiasAtrasados) {
        this.nomeDaConta = nomeConta;
        this.valorFaturaOuBoleto = valorFaturaOuBoleto;
        this.parcelaAtrasada = parcelaAtrasada;
        if (parcelaAtrasada && (taxaJuros === undefined || quantidadeDiasAtrasados === undefined)) {
            throw new Error("Para parcelamento atrasado, taxa de juros e quantidade de dias atrasados devem ser informados.");
        }
        this.taxaJuros = taxaJuros;
        this.quantidadeDiasAtrasado = quantidadeDiasAtrasados;
    }
    verInfoDoPagamento() {
        const info = [
            `Nome da Conta: ${this.nomeDaConta}`,
            `Valor da Fatura ou Boleto: R$${this.valorFaturaOuBoleto}`,
            `Parcela Atrasada: ${this.parcelaAtrasada ? "Sim" : "Não"}`
        ];
        if (this.parcelaAtrasada && this.taxaJuros !== undefined && this.quantidadeDiasAtrasado !== undefined) {
            info.push(`Taxa de Juros: ${this.taxaJuros}% ao dia`);
            info.push(`Quantidade de Dias em Atraso: ${this.quantidadeDiasAtrasado} dias`);
        }
        return info;
    }
    calcularValorFatura() {
        if (this.parcelaAtrasada && this.taxaJuros !== undefined && this.quantidadeDiasAtrasado !== undefined) {
            this.taxaJuros /= 100;
            this.valorJuros = this.valorFaturaOuBoleto * (this.taxaJuros * this.quantidadeDiasAtrasado);
            return this.valorFaturaOuBoleto + this.valorJuros;
        }
        return this.valorFaturaOuBoleto;
    }
}
class PagamentoBoleto extends PagamentoComCartão {
    nomePagador;
    constructor(nomePagador, nomeConta, valorFaturaOuBoleto, parcelaAtrasada, taxaJuros, quantidadeDiasAtrasados) {
        super(nomeConta, valorFaturaOuBoleto, parcelaAtrasada, taxaJuros, quantidadeDiasAtrasados);
        this.nomePagador = nomePagador;
    }
    verInfoDoPagamento() {
        const info = super.verInfoDoPagamento();
        info.push(`Nome do Pagador: ${this.nomePagador}`);
        return info;
    }
}
class CalculoValorBoleto {
    static calcularValorBoleto(pagamentoBoleto) {
        return pagamentoBoleto.calcularValorFatura();
    }
}
// Pagar com o cartão (no atrasado)
const contaEnergia = new PagamentoComCartão("Conta de energia", 200, false); // false - não está atrasada
console.log(contaEnergia.verInfoDoPagamento());
// Pagar com o cartão (atrasado)
const wifi = new PagamentoComCartão("Wi-fi", 150, true, 1, 12);
// 1% de juros ao dia, 12 dias de atraso
console.log(wifi.verInfoDoPagamento());
console.log(wifi.calcularValorFatura());
// Pagar com o boleto
const tenis = new PagamentoBoleto("Wesley", "Tênis", 150, true, 0.05, 5); // 5% de juros ao dia, 5 dias de atraso
console.log(tenis.verInfoDoPagamento());
console.log(CalculoValorBoleto.calcularValorBoleto(tenis));
