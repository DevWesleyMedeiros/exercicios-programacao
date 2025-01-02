var enviar = document.getElementById('submit')
var divTexto = document.querySelector('.texto')
var nome = document.getElementById('text')

enviar.addEventListener('click', ()=>{
    var novoConteudo = document.createElement('div')
    novoConteudo.setAttribute('class', 'elemento-criado')
    novoConteudo.textContent = `Olá Muito prazer ${nome.value}`
    divTexto.appendChild(novoConteudo)
})
