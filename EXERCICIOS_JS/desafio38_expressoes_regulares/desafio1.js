/*
Dada uma lista de endereços de e-mail, crie uma expressão regular que valide se todos os endereços estão no formato correto, ou seja, seguindo as regras básicas de um e-mail válido.
*/
const btnEnviar = document.querySelector("#btn_cadastrarEmail");
const btnCadastrarTelefone = document.querySelector("#btn_cadastrarTelefone");
const inputEmail = document.querySelector("#Email");
const divForm = document.querySelector("#div_form");
const inputTelefone = document.getElementById("Telefone");

const validarEmail = (str) => {
    if (/\s/g.test(str) || !/^[^\s@%]+@[^\s@%]+\.[^\s@%]+$/ig.test(str)) {
        inputEmail.classList.add("cor_alerta");
        let texto = document.createElement("p");
        texto.innerHTML = `O endereço ${str} não é válido`;
        divForm.appendChild(texto);
    } else {
        inputEmail.value = "";
        alert("Email cadastrado com sucesso!!");
    }
}

const validarTelefone = (str) => {
    if (/\s/g.test(str) || !/^\d{11}$/.test(str)) {
        inputTelefone.classList.add("cor_alerta");
        let texto = document.createElement("p");
        texto.innerHTML = `O número de telefone ${str} não é válido`;
        divForm.appendChild(texto);
    } else {
        inputTelefone.value = "";
        alert("Telefone cadastrado com sucesso!!");
    }
}
btnEnviar.addEventListener("click", () => {
    if (inputEmail.value == "") {
        alert("Campo de email está vazio");
        inputEmail.focus();
    } else if (inputTelefone.value == "") {
        alert("Campo de Telefone está vazio");
        inputTelefone.focus();
    } else {
        validarEmail(inputEmail.value);
        inputEmail.focus();
    }
})
btnCadastrarTelefone.addEventListener("click", () => {
    if (inputTelefone.value == "") {
        alert("Digite um Telefone");
        inputTelefone.focus();
    } else if (inputEmail.value == "") {
        alert("Digite um Email");
        inputEmail.focus();
    } else {
        validarTelefone(inputTelefone.value);
        inputTelefone.focus();
    }
})
