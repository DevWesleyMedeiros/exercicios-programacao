// Capiturando os botões para eventos
const sumBotton: HTMLButtonElement = document.querySelector("#sum") as HTMLButtonElement;
const subtrationButton: HTMLButtonElement = document.querySelector("#subtration") as HTMLButtonElement;
const divideButton: HTMLButtonElement = document.querySelector("#divide") as HTMLButtonElement;
const multiplicationButton: HTMLButtonElement = document.querySelector("#multiplication") as HTMLButtonElement;
const squereButton:HTMLButtonElement = document.querySelector("#square") as HTMLButtonElement;
const expoButton:HTMLButtonElement = document.querySelector("#exponentiation") as HTMLButtonElement;
const closeWindowResult:HTMLButtonElement = document.querySelector(".close_result") as HTMLButtonElement

// Div que mostra os resultados
const Resultados: HTMLDivElement = document.querySelector(".result") as HTMLDivElement;
const containerResult:HTMLDivElement = document.querySelector(".container-result") as HTMLDivElement
const containerMathOperation: HTMLDivElement = document.querySelector(".container_math-operation") as HTMLDivElement;

// Linha que pega elementos do DOM e converte para um array, extraindo os valores numéricos
const somadores: HTMLInputElement[] = Array.from(document.querySelectorAll(".input-sum"));
const subtradores: HTMLInputElement[] = Array.from(document.querySelectorAll(".input-subtration"));
const divisores: HTMLInputElement[] = Array.from(document.querySelectorAll(".input-division"));
const multiplicadores:HTMLInputElement[] = Array.from(document.querySelectorAll(".input-multi"));
const squareRoot: HTMLInputElement[] = Array.from(document.querySelectorAll(".input-square"));
const exponentiation: HTMLInputElement[] = Array.from(document.querySelectorAll(".input-exponentiation"));

class ShowResult {
    static mostrarResultadoOperacao(operacao: number): void {
        // Exibindo o resultado
        if (operacao) {
            containerMathOperation.style.opacity = "30%";
            containerResult.style.visibility = "visible";
            Resultados.textContent = `Resultado: ${operacao}`;
        }
    }
}
class CloseResult{
    static closeModalResult():void{
        closeWindowResult.addEventListener("click", (evt)=>{
            containerResult.style.visibility = "hidden";
        })
    }
}

class Sum {
    private valores: number[];
    constructor(...valores: number[]) {
        this.valores = valores;
    }
    get getResult(): number {
        return this.valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    }
}

class Subtraction {
    private subtrador: number[];
    constructor(...valores: number[]) {
        this.subtrador = valores;
    }
    get resultSubtration(): number {
        const [minuendo, ...resto] = this.subtrador; 
        // this.subtrador = minuendo, ou seja, um array [10, 5] this.subtrador será 10 e resto será 5. Após nós reduzirmos - reduce do resto - 5, portanto ficará 5 - 0 para o somaResto, pois não há mais valores para somar com o 5 e o 10 já é do this.subtrador. No final, então será minuendo, 10 - resto, 5 = 10
        const somaResto = resto.reduce((subtrador, subtraendo) => subtrador + subtraendo, 0);
        return minuendo - somaResto;
    }
}
class Division{
    private divisao:number[];
    constructor(...valores:number[]){
        this.divisao = valores;
    }
    get getDivisionResult():number{
        const [dividendo, divisor] = this.divisao;
        if (divisor === 0) {
            throw new Error("Divisão por zero!");
        }
        return parseFloat((dividendo / divisor).toFixed(2));
    }
}
class Multi{
    private multiplicador:number[];
    constructor(...valores:number[]){
        this.multiplicador = valores;
    }
    get getMultiplicationResult():number{
        if (this.multiplicador[0] === 0) {
            this.multiplicador[0] = 1;
            multiplicadores[0].value = "1";
        }
        if (this.multiplicador[1] === 0) {
            this.multiplicador[1] = 1;
            multiplicadores[1].value = "1";
        }
        return this.multiplicador[0] * this.multiplicador[1];
    }
}
class Square{
    private raiz:number;
    private index:number;
    constructor(...valores:number[]){
        this.raiz = valores[0];
        this.index = valores[1]
    }
    get getSquereRootResult():number{
        if (this.raiz === 0) {
            this.raiz = 0;
        }
        if (this.index === 1 || this.index === 0) {
            this.index = 2;
            squareRoot[1].value = "2";
        }
        return this.raiz ** (1 / this.index);
    }
}
class Expo{
    private base:number;
    private expo:number;
    private resultado:number;
    constructor(...valores:number[]){
        this.base = valores[0];
        this.expo = valores[1];
        this.resultado = 0;
    }
    get getExpoResult():number{
        if (this.base !== 0 && this.expo === 0) {
            return this.resultado = 1
        }
        if (this.base !== 0 && this.expo === 1) {
            this.resultado = this.base;
            return this.resultado;
        }
        this.resultado = Math.pow(this.base, this.expo);
        return this.resultado;
    }
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
    try {
        // Evento de soma
        if (sumBotton) {
            sumBotton.addEventListener("click", (evt) => {
                const valores = somadores.map(input => parseFloat(input.value)).filter(val => !isNaN(val));
                const soma = new Sum(...valores);
                ShowResult.mostrarResultadoOperacao(soma.getResult);
                CloseResult.closeModalResult();
            });
        }

        // Evento de subtração
        if (subtrationButton) {
            subtrationButton.addEventListener("click", (evt) => {
                const valoresSubtration = subtradores.map(input => parseFloat(input.value)).filter(val => !isNaN(val));
                const subtrair = new Subtraction(...valoresSubtration);
                ShowResult.mostrarResultadoOperacao(subtrair.resultSubtration);
            });
        }
        if (divideButton) {
            divideButton.addEventListener("click", (evt)=>{
                const valoresDividir = divisores.map(input => parseFloat(input.value)).filter(val => !isNaN(val));
                const dividir = new Division(...valoresDividir);
                ShowResult.mostrarResultadoOperacao(dividir.getDivisionResult);
            })
        }
        if (multiplicationButton) {
            multiplicationButton.addEventListener("click", (evt)=>{
                const valoresMultiplicar = multiplicadores.map(input => parseFloat(input.value)).filter(valor => !isNaN(valor));
                const multiplicar = new Multi(...valoresMultiplicar);
                ShowResult.mostrarResultadoOperacao(multiplicar.getMultiplicationResult);
            })
        }
        if (squereButton) {
            squereButton.addEventListener("click", (evt)=>{
                const valoresRaiz = squareRoot.map(input => parseFloat(input.value)).filter(valor => !isNaN(valor));
                const raizQuadrada = new Square(...valoresRaiz);
                ShowResult.mostrarResultadoOperacao(raizQuadrada.getSquereRootResult);
            })
        }
        if (expoButton) {
            expoButton.addEventListener("click", (evt)=>{
                const valoresExpo = exponentiation.map(input => parseFloat(input.value)).filter(valor => !isNaN(valor));
                const potencia = new Expo(...valoresExpo);
                ShowResult.mostrarResultadoOperacao(potencia.getExpoResult);
            })
        }
        // Adicione outros eventos para multiplicação, divisão, etc, caso necessário
        
    } catch (error: any) {
        console.error("Erro ao configurar os eventos:", error);
    }
});
