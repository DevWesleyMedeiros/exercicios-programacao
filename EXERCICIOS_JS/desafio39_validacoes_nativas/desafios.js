const inputEmail = document.querySelector("#Email");
const inputNumber = document.querySelector("#Number");
const inputPassword = document.querySelector("#Password");

function validarEmail(email) {
    inputEmail.classList.remove("cor_vermelha");
    inputEmail.setAttribute("placeholder", "Digite seu email");
    const regexEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[com]+$/;
    if (!/\d/.test(email) || !regexEmail.test(email)) {
        inputEmail.classList.add("cor_vermelha");
        inputEmail.setAttribute("placeholder", "Seu email está inválido");
    } else {
        alert("Email cadastrado com sucesso");
        inputEmail.value = "";
        inputEmail.focus();
    }
}

function verificarNumero(numero) {
    if (numero < 0 && numero % 2 === 0) {
        console.log(`Número ${numero} é inteiro e negativo`);
    } else if (numero > 0 && numero % 2 === 0) {
        console.log(`Número ${numero} é inteiro e positivo`);
    }
}

function verificarSenhaForte(senha) {
    let textoSenha = document.getElementById("texto_senha");
    textoSenha.innerHTML = "";
    let mensagemTamanho = null;
    if (!senha.match(/^[a-zA-Z0-9@#$%&]+$/) || !inputPassword.checkValidity()) {
        mensagemTamanho = inputPassword.validationMessage;
        mensagemTamanho += "Sua senha não contém os caracteres corretos"
        textoSenha.innerHTML = mensagemTamanho;
    } else {
        alert("Senha cadastrada com sucesso!");
        inputPassword.value = "";
    }
}

document.getElementById("btn_verificar").addEventListener("click", (evt) => {
    if (inputEmail) {
        validarEmail(inputEmail.value);
    }
    if (inputNumber) {
        verificarNumero(inputNumber.value);
    }
    if (inputPassword) {
        verificarSenhaForte(inputPassword.value);
    }
    evt.preventDefault();
});
