const f_militar = document.querySelector("#f_tipoMilitar")
const f_normal = document.querySelector("#f_tipoNormal")
const f_municao = document.querySelector("#f_municao")
const f_blindagem = document.querySelector("#f_blindagem")
const carros = document.querySelector(".carros")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const btn_addCarros = document.querySelector("#btn_addCarro")

const arrayCarros = []

const removerCarro = (quem)=>{
    arrayCarros = arrayCarros.filter((el)=>{
        return el.nome != quem
    })
}
f_militar.addEventListener("click", ()=>{
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})
f_normal.addEventListener("click", ()=>{
    f_blindagem.style.cursor = "not-allowed"
    f_municao.style.cursor = "not-allowed"
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
})
const gerenciarExibicaoCarros = ()=>{
    carros.innerHTML = ""
    arrayCarros.forEach((carro)=>{
        let div = document.createElement("div")
        let button = document.createElement("button")
        button.innerHTML = "Remover"
        button.addEventListener("click", (evento)=>{
            let quemRemover = evento.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibicaoCarros()
        })
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", carro.nome)
        div.innerHTML = `Nome: ${carro.nome}</br>`
        div.innerHTML += `Portas: ${carro.portas}</br>`
        div.innerHTML += `Blindagem: ${carro.blindagem}</br>`
        div.innerHTML += `Munição: ${carro.municao}`
        div.appendChild(button)
        carros.appendChild(div)
    })
}
btn_addCarros.addEventListener("click", ()=>{
    if(f_normal.checked && f_portas.value >= 2){
        const carro = new Carro(f_nome.value, f_portas.value)
        arrayCarros.push(carro)
        f_nome.value = ""
        f_nome.focus()
        f_portas.value = 0
    }else if(f_normal.checked && f_portas.value < 2){
        alert(`Não existe carro com ${f_portas.value} porta(s)`)
    }else if(f_militar.checked && f_portas.value >= 1){
        const carroMilitar = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        arrayCarros.push(carroMilitar)
        f_nome.value = ""
        f_nome.focus()
        f_blindagem.value = ""
        f_municao.value = 0
        f_portas.value = 0
    }else if(f_militar.checked && f_portas.value < 1){
        alert(`Não existe este veículo com ${f_portas.value} porta(s)`)
    }
    gerenciarExibicaoCarros()
})
document.addEventListener("DOMContentLoaded", ()=>{
    f_nome.value = ""
    f_nome.focus()
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value
})
class Carro{
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.velocidade = 0
        this.cor = undefined 
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.desligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}
class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("verde")
    }
    atirar = function(){
        if(municao > 0){
            this.municao--
        }
    }
}