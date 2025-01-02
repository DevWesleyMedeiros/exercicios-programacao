const botaoEnviar = document.querySelector('#submeterResultado');


function palpiteCPU(){
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let numeroCPU = numeroAleatorio;
    return numeroCPU;
}

function winner(){
    const opcaoJogador = parseInt(document.getElementById('numeroJogador').value);
    const divRespostaJogador = document.querySelector('.respostaDoJogador');
    let numeroEscolhidoCPU = palpiteCPU();
    if(opcaoJogador === numeroEscolhidoCPU){
        divRespostaJogador.innerHTML = `<p>PARABÉNS!! você conseguiu adivinhar meu número</p>`;
    }else{
        divRespostaJogador.innerHTML = `<p>PARAMAUS!! você não conseguiu adivinhar o meu número</p>`;
    }
    document.getElementById('numeroJogador').value = '';
}

botaoEnviar.addEventListener('click',()=>{
    winner();
});
