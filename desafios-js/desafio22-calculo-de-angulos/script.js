var resultado = document.getElementById('resposta')
var enviar = document.getElementById('enviar')

enviar.addEventListener('click', () => {
    var numero = parseFloat(document.getElementById('Number').value);

    if (!(isNaN(numero))) {
        let seno = Math.sin(numero * Math.PI / 180)
        let cosseno = Math.cos(numero * Math.PI / 180)
        let tangente = Math.tan(numero * Math.PI / 180)
        resultado.style.width = '400px'
        resultado.style.height = '300px'
        resultado.style.color = 'white'
        resultado.style.backgroundColor = 'black'
        resultado.style.marginLeft = '35%'
        var mensagem = `Seno de ${numero} vale ${seno}\n`
        mensagem += `Cosseno de ${numero} vale ${cosseno}\n`
        mensagem += `Tangente de ${numero} vale ${tangente}`
        resultado.innerText = mensagem
    } else {
        alert("Por favor, digite um valor")
    }
})
