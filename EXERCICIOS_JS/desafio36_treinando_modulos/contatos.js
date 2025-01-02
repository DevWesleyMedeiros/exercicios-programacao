import { contatos } from "./bancoContatos.js";

const btnRemover = document.querySelector(".btnRemover");

let contato = {
    obterTodosContatos: function(){
        return contatos;
    },
    obterUmContato: function(index){
        return contatos[index];
    },
    adicionarContato: function(novoContato, destinoDOM){
        const cont = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email,
        }
        contatos.push(cont)
        destinoDOM.innerHTML = "";
        contatos.forEach((c)=>{
            const div = document.createElement("div");
            const botao = document.createElement("button");
            botao.setAttribute("class", "botoes btnRemover");
            botao.innerHTML = "Remover";
            div.setAttribute("class", "contato");
            const p_nome = document.createElement("p");
            p_nome.innerHTML = c.nome;
            const p_telefone = document.createElement("p");
            p_telefone.innerHTML = c.telefone;
            const p_email = document.createElement("p");
            p_email.innerHTML = c.email;
            div.appendChild(p_nome);
            div.appendChild(p_telefone);
            div.appendChild(p_email);
            div.appendChild(botao);
            destinoDOM.appendChild(div);
        })
    }
}
btnRemover.addEventListener("click", function () {
    const nomeContato = cont.nome;
    removerElemento(nomeContato);
    this.parentNode.remove();
});
export default contato;