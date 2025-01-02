function clicado() {
    let numero = window.document.getElementById('inumero').value
    let tabuada = window.document.getElementById('resultado')
    tabuada.innerHTML = ''
    for(let valor = 0; valor <= 10; valor++ ) {
        let resultado = numero * valor
        tabuada.innerHTML += `<p><strong>${numero} X ${valor} = ${resultado}</strong></p>`
    }
}
function apagar() {
    let btn_apagar = window.document.querySelector('input#apagar_conteudo').value
    
}