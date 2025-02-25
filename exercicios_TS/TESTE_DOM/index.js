var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Capiturando os botões para eventos
var sumBotton = document.querySelector("#sum");
var subtrationButton = document.querySelector("#subtration");
var divideButton = document.querySelector("#divide");
var multiplicationButton = document.querySelector("#multiplication");
var squereButton = document.querySelector("#square");
var expoButton = document.querySelector("#exponentiation");
var closeWindowResult = document.querySelector(".close_result");
// Div que mostra os resultados
var Resultados = document.querySelector(".result");
var containerResult = document.querySelector(".container-result");
var containerMathOperation = document.querySelector(".container_math-operation");
// Linha que pega elementos do DOM e converte para um array, extraindo os valores numéricos
var somadores = Array.from(document.querySelectorAll(".input-sum"));
var subtradores = Array.from(document.querySelectorAll(".input-subtration"));
var divisores = Array.from(document.querySelectorAll(".input-division"));
var multiplicadores = Array.from(document.querySelectorAll(".input-multi"));
var squareRoot = Array.from(document.querySelectorAll(".input-square"));
var exponentiation = Array.from(document.querySelectorAll(".input-exponentiation"));
var ShowResult = /** @class */ (function () {
    function ShowResult() {
    }
    ShowResult.mostrarResultadoOperacao = function (operacao) {
        // Exibindo o resultado
        if (operacao) {
            containerMathOperation.style.opacity = "30%";
            containerResult.style.visibility = "visible";
            Resultados.textContent = "Resultado: ".concat(operacao);
        }
    };
    return ShowResult;
}());
var CloseResult = /** @class */ (function () {
    function CloseResult() {
    }
    CloseResult.closeModalResult = function () {
        closeWindowResult.addEventListener("click", function (evt) {
            containerResult.style.visibility = "hidden";
        });
    };
    return CloseResult;
}());
var Sum = /** @class */ (function () {
    function Sum() {
        var valores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valores[_i] = arguments[_i];
        }
        this.valores = valores;
    }
    Object.defineProperty(Sum.prototype, "getResult", {
        get: function () {
            return this.valores.reduce(function (acumulador, valorAtual) { return acumulador + valorAtual; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    return Sum;
}());
var Subtraction = /** @class */ (function () {
    function Subtraction() {
        var valores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valores[_i] = arguments[_i];
        }
        this.subtrador = valores;
    }
    Object.defineProperty(Subtraction.prototype, "resultSubtration", {
        get: function () {
            var _a = this.subtrador, minuendo = _a[0], resto = _a.slice(1);
            // this.subtrador = minuendo, ou seja, um array [10, 5] this.subtrador será 10 e resto será 5. Após nós reduzirmos - reduce do resto - 5, portanto ficará 5 - 0 para o somaResto, pois não há mais valores para somar com o 5 e o 10 já é do this.subtrador. No final, então será minuendo, 10 - resto, 5 = 10
            var somaResto = resto.reduce(function (subtrador, subtraendo) { return subtrador + subtraendo; }, 0);
            return minuendo - somaResto;
        },
        enumerable: false,
        configurable: true
    });
    return Subtraction;
}());
var Division = /** @class */ (function () {
    function Division() {
        var valores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valores[_i] = arguments[_i];
        }
        this.divisao = valores;
    }
    Object.defineProperty(Division.prototype, "getDivisionResult", {
        get: function () {
            var _a = this.divisao, dividendo = _a[0], divisor = _a[1];
            if (divisor === 0) {
                throw new Error("Divisão por zero!");
            }
            return parseFloat((dividendo / divisor).toFixed(2));
        },
        enumerable: false,
        configurable: true
    });
    return Division;
}());
var Multi = /** @class */ (function () {
    function Multi() {
        var valores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valores[_i] = arguments[_i];
        }
        this.multiplicador = valores;
    }
    Object.defineProperty(Multi.prototype, "getMultiplicationResult", {
        get: function () {
            if (this.multiplicador[0] === 0) {
                this.multiplicador[0] = 1;
                multiplicadores[0].value = "1";
            }
            if (this.multiplicador[1] === 0) {
                this.multiplicador[1] = 1;
                multiplicadores[1].value = "1";
            }
            return this.multiplicador[0] * this.multiplicador[1];
        },
        enumerable: false,
        configurable: true
    });
    return Multi;
}());
var Square = /** @class */ (function () {
    function Square() {
        var valores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valores[_i] = arguments[_i];
        }
        this.raiz = valores[0];
        this.index = valores[1];
    }
    Object.defineProperty(Square.prototype, "getSquereRootResult", {
        get: function () {
            if (this.raiz === 0) {
                this.raiz = 0;
            }
            if (this.index === 1 || this.index === 0) {
                this.index = 2;
                squareRoot[1].value = "2";
            }
            return Math.pow(this.raiz, (1 / this.index));
        },
        enumerable: false,
        configurable: true
    });
    return Square;
}());
var Expo = /** @class */ (function () {
    function Expo() {
        var valores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valores[_i] = arguments[_i];
        }
        this.base = valores[0];
        this.expo = valores[1];
        this.resultado = 0;
    }
    Object.defineProperty(Expo.prototype, "getExpoResult", {
        get: function () {
            if (this.base !== 0 && this.expo === 0) {
                return this.resultado = 1;
            }
            if (this.base !== 0 && this.expo === 1) {
                this.resultado = this.base;
                return this.resultado;
            }
            this.resultado = Math.pow(this.base, this.expo);
            return this.resultado;
        },
        enumerable: false,
        configurable: true
    });
    return Expo;
}());
// Eventos
document.addEventListener("DOMContentLoaded", function () {
    try {
        // Evento de soma
        if (sumBotton) {
            sumBotton.addEventListener("click", function (evt) {
                var valores = somadores.map(function (input) { return parseFloat(input.value); }).filter(function (val) { return !isNaN(val); });
                var soma = new (Sum.bind.apply(Sum, __spreadArray([void 0], valores, false)))();
                ShowResult.mostrarResultadoOperacao(soma.getResult);
                CloseResult.closeModalResult();
            });
        }
        // Evento de subtração
        if (subtrationButton) {
            subtrationButton.addEventListener("click", function (evt) {
                var valoresSubtration = subtradores.map(function (input) { return parseFloat(input.value); }).filter(function (val) { return !isNaN(val); });
                var subtrair = new (Subtraction.bind.apply(Subtraction, __spreadArray([void 0], valoresSubtration, false)))();
                ShowResult.mostrarResultadoOperacao(subtrair.resultSubtration);
            });
        }
        if (divideButton) {
            divideButton.addEventListener("click", function (evt) {
                var valoresDividir = divisores.map(function (input) { return parseFloat(input.value); }).filter(function (val) { return !isNaN(val); });
                var dividir = new (Division.bind.apply(Division, __spreadArray([void 0], valoresDividir, false)))();
                ShowResult.mostrarResultadoOperacao(dividir.getDivisionResult);
            });
        }
        if (multiplicationButton) {
            multiplicationButton.addEventListener("click", function (evt) {
                var valoresMultiplicar = multiplicadores.map(function (input) { return parseFloat(input.value); }).filter(function (valor) { return !isNaN(valor); });
                var multiplicar = new (Multi.bind.apply(Multi, __spreadArray([void 0], valoresMultiplicar, false)))();
                ShowResult.mostrarResultadoOperacao(multiplicar.getMultiplicationResult);
            });
        }
        if (squereButton) {
            squereButton.addEventListener("click", function (evt) {
                var valoresRaiz = squareRoot.map(function (input) { return parseFloat(input.value); }).filter(function (valor) { return !isNaN(valor); });
                var raizQuadrada = new (Square.bind.apply(Square, __spreadArray([void 0], valoresRaiz, false)))();
                ShowResult.mostrarResultadoOperacao(raizQuadrada.getSquereRootResult);
            });
        }
        if (expoButton) {
            expoButton.addEventListener("click", function (evt) {
                var valoresExpo = exponentiation.map(function (input) { return parseFloat(input.value); }).filter(function (valor) { return !isNaN(valor); });
                var potencia = new (Expo.bind.apply(Expo, __spreadArray([void 0], valoresExpo, false)))();
                ShowResult.mostrarResultadoOperacao(potencia.getExpoResult);
            });
        }
        // Adicione outros eventos para multiplicação, divisão, etc, caso necessário
    }
    catch (error) {
        console.error("Erro ao configurar os eventos:", error);
    }
});
