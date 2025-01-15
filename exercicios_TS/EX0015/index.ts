// // Crie uma classe FiguraGeometrica e subclasses com Circulo e Quadrado. As subclasses devem substituir o comportamento da classe base sem alterar seu funcionamento. 
class FiguraGeometrica {
    protected nomeFigura: string;
    private valorDaArea: number;

    constructor(nomeFigura: string) {
        this.nomeFigura = nomeFigura;
        this.valorDaArea = 0;
    }

    get getValorArea(): number {
        return this.valorDaArea;
    }

    set setValorArea(valor: number) {
        this.valorDaArea = valor;
    }

    get getNomeFigura(): string {
        return this.nomeFigura;
    }
}
class Circulo extends FiguraGeometrica {
    private Pi: number;
    private raio: number;

    constructor(nomeFigura: string, raioCirculo: number) {
        super(nomeFigura);
        this.raio = raioCirculo;
        this.Pi = 3.14;
    }
    get getValorPi(): number {
        return this.Pi;
    }
    get getValorRaio(): number {
        return this.raio;
    }
}

// ÁreaCirculo = Pi * r²;
class CalcularAreaCirculo {
    static areaCirculo(circulo: Circulo): number {
        const area: number = circulo.getValorPi * circulo.getValorRaio * circulo.getValorRaio;
        circulo.setValorArea = area; // Usando o setter para modificar a área
        return area;
    }
}
class Quadrado extends FiguraGeometrica {
    private lados: number;
    private valorDosLados:number;

    constructor(nomeFigura: string, valorDosLados: number) {
        super(nomeFigura);
        this.lados = 4;
        this.valorDosLados = valorDosLados;
    }

    get getValorDosLados(): number {
        return this.valorDosLados;
    }

    get getQuantidadeLadosQuadrado(): number {
        return this.lados;
    }
}

// ÁreaQuadrado = L²;
class CalcularAreaQuadrado {
    static calcularAreaQuadrado(quadrado: Quadrado): number {
        const area:number = quadrado.getValorDosLados * quadrado.getValorDosLados;
        quadrado.setValorArea = area; // Usando o setter para modificar a área
        return area;
    }
}

const quadrado1 = new Quadrado("Quadrado", 50);
console.log(quadrado1.getNomeFigura);  // Nome da figura pega da classe super
console.log(quadrado1.getQuantidadeLadosQuadrado);
console.log(CalcularAreaQuadrado.calcularAreaQuadrado(quadrado1));

const circulo1 = new Circulo("Círculo", 100);
console.log(CalcularAreaCirculo.areaCirculo(circulo1));
