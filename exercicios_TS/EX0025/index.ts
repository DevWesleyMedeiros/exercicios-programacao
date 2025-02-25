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

class Matrizes {
    private matriz1: number[];
    private matriz2: number[];

    constructor(matriz01: number[], matriz02: number[]) {
        if (matriz01.length !== matriz02.length) {
            throw new Error("As matrizes devem ter o mesmo tamanho!");
        }
        this.matriz1 = matriz01;
        this.matriz2 = matriz02;
    }

    get getMatriz01(): number[] {
        return this.matriz1;
    }

    get getMatriz02(): number[] {
        return this.matriz2;
    }
}

class SomaMatrizes {
    static somaMatrizes(mat01: number[], mat02: number[]): number[] {
        if (mat01.length !== mat02.length) {
            throw new Error("As matrizes devem ter o mesmo tamanho!");
        }

        let resultado: number[] = [];
        for (let i = 0; i < mat01.length; i++) {
            resultado.push(mat01[i] + mat02[i]);
        }
        return resultado;
    }
}

const matrizes = new Matrizes([1, 5, 7, 9], [11, 13, 15, 17]);

const m01 = matrizes.getMatriz01;
const m02 = matrizes.getMatriz02;

console.log(SomaMatrizes.somaMatrizes(m01, m02));
