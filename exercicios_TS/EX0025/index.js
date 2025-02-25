/*
Crie uma função que receba como parâmetro duas matrizes de mesmo tamanho e faça a soma delas. Detalhe, deve haver uma validação para verificar se as matrizes são do mesmo tamanho.
Ex.:
[
    1, 2,
    3, 4
]
    +
[
    5, 6,
    7, 8
]
    =
[
    6, 8,
    10, 12
]
*/
var Matrizes = /** @class */ (function () {
    function Matrizes(matriz01, matriz02) {
        if (matriz01.length !== matriz02.length) {
            throw new Error("As matrizes devem ter o mesmo tamanho!");
        }
        this.matriz1 = matriz01;
        this.matriz2 = matriz02;
    }
    Object.defineProperty(Matrizes.prototype, "getMatriz01", {
        get: function () {
            return this.matriz1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrizes.prototype, "getMatriz02", {
        get: function () {
            return this.matriz2;
        },
        enumerable: false,
        configurable: true
    });
    return Matrizes;
}());
var SomaMatrizes = /** @class */ (function () {
    function SomaMatrizes() {
    }
    SomaMatrizes.somaMatrizes = function (mat01, mat02) {
        if (mat01.length !== mat02.length) {
            throw new Error("As matrizes devem ter o mesmo tamanho!");
        }
        var resultado = [];
        for (var i = 0; i < mat01.length; i++) {
            resultado.push(mat01[i] + mat02[i]);
        }
        return resultado;
    };
    return SomaMatrizes;
}());
var matrizes = new Matrizes([1, 5, 7, 9], [11, 13, 15, 17]);
var m01 = matrizes.getMatriz01;
var m02 = matrizes.getMatriz02;
console.log(SomaMatrizes.somaMatrizes(m01, m02));
