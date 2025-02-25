/*
Crie uma função que retorne o resultado de uma equação do segundo grau
ax² + bx + c = 0
Fórmula de baskara: x= −b± Vb² -4ac / 2a
*/
var EquacaoSegundoGrau = /** @class */ (function () {
    function EquacaoSegundoGrau(a, b, c) {
        this.equacao = "".concat(a.toString(), "x\u00B2 + ").concat(b.toString(), "x + ").concat(c.toString(), " = 0");
    }
    Object.defineProperty(EquacaoSegundoGrau.prototype, "getEquacaoFormatada", {
        get: function () {
            return this.equacao;
        },
        enumerable: false,
        configurable: true
    });
    EquacaoSegundoGrau.prototype.resultadoEquacaoSegundoGrau = function (a, b, c) {
        try {
            if (a === 0) {
                return 'O valor de a não pode ser zero em uma equação do segundo grau.';
            }
            var delta = Math.pow(b, 2) - 4 * a * c;
            if (delta < 0) {
                return 'Não existem raízes reais. As raízes são complexas.';
            }
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return "As ra\u00EDzes da equa\u00E7\u00E3o s\u00E3o: x1 = ".concat(x1.toFixed(2), ", x2 = ").concat(x2.toFixed(2));
        }
        catch (error) {
            console.error("Erro: ".concat(error.message));
            return 'Ocorreu um erro no cálculo.';
        }
    };
    return EquacaoSegundoGrau;
}());
var equacaoSegundo = new EquacaoSegundoGrau(2, 4, 1);
console.log(equacaoSegundo.getEquacaoFormatada); // Exibe a equação formatada
console.log(equacaoSegundo.resultadoEquacaoSegundoGrau(0, 4, 1)); // Exibe as raízes
