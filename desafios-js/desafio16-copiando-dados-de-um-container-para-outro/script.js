const divPrincipal = document.querySelector('div#div_principal') 
const divResultado = document.querySelector('div#div_resultado') 
const btnBotao = document.querySelector('button#ibtn')
const todosFilhos = [...document.querySelectorAll('.son')]
todosFilhos.map((elemento) => {
    elemento.addEventListener('click', (evento) => {
        const eventos = evento.target
        eventos.classList.toggle("selecionado")
        console.log(eventos)
    })
})
btnBotao.addEventListener('click', () => {
    const botoesSelecionados = [...document.querySelectorAll('.selecionado')]
    const botoesNaoSelecioando = [...document.querySelectorAll('.son:not(.selecionado)')]
    botoesSelecionados.map((elemento) => {
        divResultado.appendChild(elemento)
    })
    botoesNaoSelecioando.map((elemento) => {
        divPrincipal.appendChild(elemento)
    })
})






