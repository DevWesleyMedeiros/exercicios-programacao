"use strict";
// // Crie uma classe FiguraGeometrica e subclasses com Circulo e Quadrado. As subclasses devem substituir o comportamento da classe base sem alterar seu funcionamento. 
class FiguraGeometrica {
    nomeFigura;
    valorDaArea;
    constructor(nomeFigura) {
        this.nomeFigura = nomeFigura;
        this.valorDaArea = 0;
    }
    get getValorArea() {
        return this.valorDaArea;
    }
    set setValorArea(valor) {
        this.valorDaArea = valor;
    }
    get getNomeFigura() {
        return this.nomeFigura;
    }
}
class Circulo extends FiguraGeometrica {
    Pi;
    raio;
    constructor(nomeFigura, raioCirculo) {
        super(nomeFigura);
        this.raio = raioCirculo;
        this.Pi = 3.14;
    }
    get getValorPi() {
        return this.Pi;
    }
    get getValorRaio() {
        return this.raio;
    }
}
// ÁreaCirculo = Pi * r²;
class CalcularAreaCirculo {
    static areaCirculo(circulo) {
        const area = circulo.getValorPi * circulo.getValorRaio * circulo.getValorRaio;
        circulo.setValorArea = area; // Usando o setter para modificar a área
        return area;
    }
}
class Quadrado extends FiguraGeometrica {
    lados;
    valorDosLados;
    constructor(nomeFigura, valorDosLados) {
        super(nomeFigura);
        this.lados = 4;
        this.valorDosLados = valorDosLados;
    }
    get getValorDosLados() {
        return this.valorDosLados;
    }
    get getQuantidadeLadosQuadrado() {
        return this.lados;
    }
}
// ÁreaQuadrado = L²;
class CalcularAreaQuadrado {
    static calcularAreaQuadrado(quadrado) {
        const area = quadrado.getValorDosLados * quadrado.getValorDosLados;
        quadrado.setValorArea = area; // Usando o setter para modificar a área
        return area;
    }
}
const quadrado1 = new Quadrado("Quadrado", 50);
console.log(quadrado1.getNomeFigura); // Nome da figura pega da classe super
console.log(quadrado1.getQuantidadeLadosQuadrado);
console.log(CalcularAreaQuadrado.calcularAreaQuadrado(quadrado1));
const circulo1 = new Circulo("Círculo", 100);
console.log(CalcularAreaCirculo.areaCirculo(circulo1));
