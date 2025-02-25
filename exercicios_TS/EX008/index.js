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
var ErroProduto = /** @class */ (function (_super) {
    __extends(ErroProduto, _super);
    function ErroProduto(mensagem, codigoProduto, nomeProduto) {
        var _this = _super.call(this, mensagem) || this;
        // Propiedade que define um nome para o erro do produto
        _this.name = 'ErroProduto';
        _this.codigoProduto = codigoProduto;
        _this.nomeProduto = nomeProduto;
        return _this;
    }
    ErroProduto.prototype.exibirDetalhesErroProduto = function () {
        return "Erro ".concat(this.codigoProduto, " no produto ").concat(this.nomeProduto);
    };
    return ErroProduto;
}(Error));
try {
    throw new ErroProduto("Produto não encontrado", "55555", "Camiseta");
}
catch (error) {
    if (error instanceof ErroProduto) {
        console.log(error.exibirDetalhesErroProduto());
    }
    else {
        console.log("Erro desconhecido", error);
    }
}
