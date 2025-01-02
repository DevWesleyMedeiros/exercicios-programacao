import c from "./contatos.js"

const listaContatos = document.getElementById("lista_contatos");
const btnGravar = document.querySelector("#gravar");

btnGravar.addEventListener("click", (evt)=>{
    const cont = {
        nome: document.getElementById("f_nome").value,
        telefone: document.getElementById("f_telefone").value,
        email: document.getElementById("f_email").value,
    }
    c.adicionarContato(cont, listaContatos);
})
function removerElemento(nomeContato) {
    contatos = contatos.filter((elemento) => {
        return elemento.nome !== nomeContato;
    });
}