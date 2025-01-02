var btn = document.getElementById('enviar')
const divContainerResultado = document.querySelector('.container')

btn.addEventListener('click', () => {
    var valor = parseInt(document.getElementById('valor').value);
    var antecessor = valor - 1;
    var sucessor = valor + 1;
    divContainerResultado.innerHTML = `
        <div id="resultado">
    <strong>
        <p>O Antecessor do número ${valor} é ${antecessor}</p>
    </strong>
    <strong>
        <p>O sucessor do número ${valor} é ${sucessor}</p>
    </strong>
    </div>`;
})