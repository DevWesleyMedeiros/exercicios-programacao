const btnSoma = document.getElementById("btn_soma")
const btnSubtracao = document.getElementById("btn_subtracao")
const btnDivisao = document.getElementById("btn_divisao")
const btnMultiplicacao = document.getElementById("btn_multiplicacao")
const res = document.querySelector("#res")

const operacoes = [
    ()=>{
        const valores = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number(valores[0])+Number(valores[1])
    },
    ()=>{
        const valores = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number(valores[0])-Number(valores[1])
    },
    ()=>{
        const valores = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number(valores[0])/Number(valores[1])
    },
    ()=>{
        const valores = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number(valores[0])*Number(valores[1])
    }
]
btnSoma.addEventListener("click", ()=>{operacoes[0]()})
btnSubtracao.addEventListener("click", ()=>{operacoes[1]()})
btnDivisao.addEventListener("click", ()=>{operacoes[2]()})
btnMultiplicacao.addEventListener("click", ()=>{operacoes[3]()})
