import { Pessoa, Estudante } from "./object.js";
const spanNome = document.getElementById("nome");
const spanIdade = document.getElementById("idade");
const spanCurso = document.getElementById("curso");
const inputNome = document.querySelector("#campo_nome");
const inputIdade = document.querySelector("#campo_idade");
const inputCurso = document.querySelector("#campo_curso");
const pSaudacao = document.querySelector("#saudacao");
const btnVerificar = document.querySelector("#btn_verificar");

btnVerificar.addEventListener("click", (evt) =>{
    evt.preventDefault();
    if (inputNome.value == "" || !isNaN(inputNome.value)) {
        alert("O campo 'Nome' está vazio ou incorreto");
    }else if (inputIdade.value == "" || isNaN(inputIdade.value)){
        alert("O campo 'Idade' está vazio ou incorreto");
    }else if(inputCurso.value == "" || !isNaN(inputCurso.value)){
        alert("O campo 'Curso' está vazio ou incorreto");
    }else{
        const pessoa = new Pessoa(inputNome.value, inputIdade.value);
        const estudante = new Estudante(inputNome.value, inputIdade.value, inputCurso.value);

        spanNome.innerHTML = pessoa.nome;
        spanIdade.innerHTML = pessoa.idade;
        spanCurso.innerHTML = estudante.curso;

        pSaudacao.innerHTML = pessoa.comprimentar(inputNome.value);
        pSaudacao.innerHTML += `</br>` + estudante.mostraCurso (inputCurso);
        pSaudacao.innerHTML += `</br>` + estudante.comprimentar();
    }
})


