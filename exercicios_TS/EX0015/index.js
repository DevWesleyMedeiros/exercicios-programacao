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
// // Crie uma classe FiguraGeometrica e subclasses com Circulo e Quadrado. As subclasses devem substituir o comportamento da classe base sem alterar seu funcionamento. 
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica(nomeFigura) {
        this.nomeFigura = nomeFigura;
        this.valorDaArea = 0;
    }
    Object.defineProperty(FiguraGeometrica.prototype, "getValorArea", {
        get: function () {
            return this.valorDaArea;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FiguraGeometrica.prototype, "setValorArea", {
        set: function (valor) {
            this.valorDaArea = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FiguraGeometrica.prototype, "getNomeFigura", {
        get: function () {
            return this.nomeFigura;
        },
        enumerable: false,
        configurable: true
    });
    return FiguraGeometrica;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(nomeFigura, raioCirculo) {
        var _this = _super.call(this, nomeFigura) || this;
        _this.raio = raioCirculo;
        _this.Pi = 3.14;
        return _this;
    }
    Object.defineProperty(Circulo.prototype, "getValorPi", {
        get: function () {
            return this.Pi;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circulo.prototype, "getValorRaio", {
        get: function () {
            return this.raio;
        },
        enumerable: false,
        configurable: true
    });
    return Circulo;
}(FiguraGeometrica));
// ÁreaCirculo = Pi * r²;
var CalcularAreaCirculo = /** @class */ (function () {
    function CalcularAreaCirculo() {
    }
    CalcularAreaCirculo.areaCirculo = function (circulo) {
        var area = circulo.getValorPi * circulo.getValorRaio * circulo.getValorRaio;
        circulo.setValorArea = area; // Usando o setter para modificar a área
        return area;
    };
    return CalcularAreaCirculo;
}());
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(nomeFigura, valorDosLados) {
        var _this = _super.call(this, nomeFigura) || this;
        _this.lados = 4;
        _this.valorDosLados = valorDosLados;
        return _this;
    }
    Object.defineProperty(Quadrado.prototype, "getValorDosLados", {
        get: function () {
            return this.valorDosLados;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadrado.prototype, "getQuantidadeLadosQuadrado", {
        get: function () {
            return this.lados;
        },
        enumerable: false,
        configurable: true
    });
    return Quadrado;
}(FiguraGeometrica));
// ÁreaQuadrado = L²;
var CalcularAreaQuadrado = /** @class */ (function () {
    function CalcularAreaQuadrado() {
    }
    CalcularAreaQuadrado.calcularAreaQuadrado = function (quadrado) {
        var area = quadrado.getValorDosLados * quadrado.getValorDosLados;
        quadrado.setValorArea = area; // Usando o setter para modificar a área
        return area;
    };
    return CalcularAreaQuadrado;
}());
var quadrado1 = new Quadrado("Quadrado", 50);
console.log(quadrado1.getNomeFigura); // Nome da figura pega da classe super
console.log(quadrado1.getQuantidadeLadosQuadrado);
console.log(CalcularAreaQuadrado.calcularAreaQuadrado(quadrado1));
var circulo1 = new Circulo("Círculo", 100);
console.log(CalcularAreaCirculo.areaCirculo(circulo1));
