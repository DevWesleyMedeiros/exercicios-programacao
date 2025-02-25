// Crie um sistema de pedidos onde as classes pedidos, produto e cliente têm responsabilidades bem definidas
/*
Pedido: 279801 - PC gamer
Pedido: 259801 - Notebook Acer
Pedido: 179801 - phone
*/
var Pedido = /** @class */ (function () {
    function Pedido(pedidoId, produto) {
        this.pedidoId = pedidoId;
        this.produto = produto;
    }
    Object.defineProperty(Pedido.prototype, "getDetalhes", {
        get: function () {
            return "Pedido: ".concat(this.pedidoId, " \n- Produto: ").concat(this.produto);
        },
        enumerable: false,
        configurable: true
    });
    return Pedido;
}());
var Produtos = /** @class */ (function () {
    function Produtos() {
        this.produtosDisponiveis = ["PC gamer", "Notebook", "iPhone"];
    }
    // Método para associar um produto ao pedido, caso seja válido
    Produtos.prototype.associarProdutoAoPedido = function (pedido) {
        if (this.produtosDisponiveis.includes(pedido['produto'])) {
            return true;
        }
        return false;
    };
    return Produtos;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome) {
        this.pedidos = [];
        this.nome = nome;
    }
    // Método para associar um pedido a um cliente
    Cliente.prototype.associarPedidoAoCliente = function (pedido) {
        this.pedidos.push(pedido);
    };
    // Método para listar todos os pedidos de um cliente
    Cliente.prototype.listarPedidos = function () {
        console.log("Pedidos do cliente ".concat(this.nome, ":"));
        this.pedidos.forEach(function (pedido) {
            console.log(pedido.getDetalhes);
        });
    };
    return Cliente;
}());
var pedido1 = new Pedido(279801, "PC gamer");
var pedido2 = new Pedido(259801, "Notebook");
var pedido3 = new Pedido(179801, "iPhone");
// Criando um cliente
var cliente = new Cliente("João");
// Criando instância de Produto
var produto = new Produtos();
// Verificando se o produto está disponível e associando o pedido ao cliente
if (produto.associarProdutoAoPedido(pedido1)) {
    cliente.associarPedidoAoCliente(pedido1);
}
if (produto.associarProdutoAoPedido(pedido2)) {
    cliente.associarPedidoAoCliente(pedido2);
}
if (produto.associarProdutoAoPedido(pedido3)) {
    cliente.associarPedidoAoCliente(pedido3);
}
// Listando os pedidos do cliente
cliente.listarPedidos();
