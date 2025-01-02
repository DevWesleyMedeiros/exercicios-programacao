let somaTotal = document.querySelector('#soma_total');
var itens = [];
let index = 0;

document.querySelector('input[type=submit]').addEventListener("click", (evt)=>{
    var nomeProduto = document.querySelector('input[name=nome]');
    var valorProduto = document.querySelector('input[name=valor]');
    itens.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    });

    let listaProdutos = document.querySelector('.lista_produtos');
    listaProdutos.innerHTML = '';
    itens.map((val, i) => {
        listaProdutos.innerHTML += `
        <div class="produto">
            <h3>${val.nome}</h3>
            <h3 class="preco_produto"><span>R$ ${val.valor}</span></h3>
            <button class="removerItem" data-index="${i}">Remover</button>
        </div>`;
    });

    nomeProduto.value = '';
    nomeProduto.focus();
    valorProduto.value = '';
    somaTotalLista(itens);

    document.querySelectorAll('.removerItem').forEach((btn) => {
        btn.addEventListener("click", (evt) => {
            const removerIndex = evt.target.getAttribute('data-index');
            removerItem(removerIndex);
        });
    });
});

// Itera no meu array de objtos e soma os elementos
const somaTotalLista = (arrayPrecos) => {
    let soma = 0;
    arrayPrecos.forEach(produto => {
        soma += parseFloat(produto.valor);
    });
    somaTotal.innerHTML = `Total: R$${soma.toFixed(2)}`;
};

const removerItem = (indexElemento) => {
    itens.splice(indexElemento, 1);
    let listaProdutos = document.querySelector('.lista_produtos');
    listaProdutos.innerHTML = '';
    itens.map((val, i) => {
        listaProdutos.innerHTML += `
        <div class="produto">
            <h3>${val.nome}</h3>
            <h3 class="preco_produto"><span>R$ ${val.valor}</span></h3>
            <button class="removerItem" data-index="${i}">Remover</button>
        </div>`;
    });
    somaTotalLista(itens);
};
