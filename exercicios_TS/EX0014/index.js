var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PagamentoComCartão = /** @class */ (function () {
    function PagamentoComCartão(nomeConta, valorFaturaOuBoleto, parcelaAtrasada, taxaJuros, quantidadeDiasAtrasados) {
        this.nomeDaConta = nomeConta;
        this.valorFaturaOuBoleto = valorFaturaOuBoleto;
        this.parcelaAtrasada = parcelaAtrasada;
        if (parcelaAtrasada && (taxaJuros === undefined || quantidadeDiasAtrasados === undefined)) {
            throw new Error("Para parcelamento atrasado, taxa de juros e quantidade de dias atrasados devem ser informados.");
        }
        this.taxaJuros = taxaJuros;
        this.quantidadeDiasAtrasado = quantidadeDiasAtrasados;
    }
    PagamentoComCartão.prototype.verInfoDoPagamento = function () {
        var info = [
            "Nome da Conta: ".concat(this.nomeDaConta),
            "Valor da Fatura ou Boleto: R$".concat(this.valorFaturaOuBoleto),
            "Parcela Atrasada: ".concat(this.parcelaAtrasada ? "Sim" : "Não")
        ];
        if (this.parcelaAtrasada && this.taxaJuros !== undefined && this.quantidadeDiasAtrasado !== undefined) {
            info.push("Taxa de Juros: ".concat(this.taxaJuros, "% ao dia"));
            info.push("Quantidade de Dias em Atraso: ".concat(this.quantidadeDiasAtrasado, " dias"));
        }
        return info;
    };
    PagamentoComCartão.prototype.calcularValorFatura = function () {
        if (this.parcelaAtrasada && this.taxaJuros !== undefined && this.quantidadeDiasAtrasado !== undefined) {
            this.taxaJuros /= 100;
            this.valorJuros = this.valorFaturaOuBoleto * (this.taxaJuros * this.quantidadeDiasAtrasado);
            return this.valorFaturaOuBoleto + this.valorJuros;
        }
        return this.valorFaturaOuBoleto;
    };
    return PagamentoComCartão;
}());
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto(nomePagador, nomeConta, valorFaturaOuBoleto, parcelaAtrasada, taxaJuros, quantidadeDiasAtrasados) {
        var _this = _super.call(this, nomeConta, valorFaturaOuBoleto, parcelaAtrasada, taxaJuros, quantidadeDiasAtrasados) || this;
        _this.nomePagador = nomePagador;
        return _this;
    }
    PagamentoBoleto.prototype.verInfoDoPagamento = function () {
        var info = _super.prototype.verInfoDoPagamento.call(this);
        info.push("Nome do Pagador: ".concat(this.nomePagador));
        return info;
    };
    return PagamentoBoleto;
}(PagamentoComCartão));
var CalculoValorBoleto = /** @class */ (function () {
    function CalculoValorBoleto() {
    }
    CalculoValorBoleto.calcularValorBoleto = function (pagamentoBoleto) {
        return pagamentoBoleto.calcularValorFatura();
    };
    return CalculoValorBoleto;
}());
// Pagar com o cartão (no atrasado)
var contaEnergia = new PagamentoComCartão("Conta de energia", 200, false); // false - não está atrasada
console.log(contaEnergia.verInfoDoPagamento());
// Pagar com o cartão (atrasado)
var wifi = new PagamentoComCartão("Wi-fi", 150, true, 1, 12);
// 1% de juros ao dia, 12 dias de atraso
console.log(wifi.verInfoDoPagamento());
console.log(wifi.calcularValorFatura());
// Pagar com o boleto
var tenis = new PagamentoBoleto("Wesley", "Tênis", 150, true, 0.05, 5); // 5% de juros ao dia, 5 dias de atraso
console.log(tenis.verInfoDoPagamento());
console.log(CalculoValorBoleto.calcularValorBoleto(tenis));
