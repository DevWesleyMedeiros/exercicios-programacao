// Crie um sistema de pedidos onde as classes pedidos, produto e cliente têm responsabilidades bem definidas
/* 
Pedido: 279801 - PC gamer
Pedido: 259801 - Notebook Acer
Pedido: 179801 - phone
*/ 

class Pedido {
    protected pedidoId: number;
    protected produto: string;

    constructor(pedidoId: number, produto: string) {
        this.pedidoId = pedidoId;
        this.produto = produto;
    }

    get getDetalhes(): string {
        return `Pedido: ${this.pedidoId} \n- Produto: ${this.produto}`;
    }
}

class Produtos {
    protected produtosDisponiveis: string[] = ["PC gamer", "Notebook", "iPhone"];
    
    // Método para associar um produto ao pedido, caso seja válido
    associarProdutoAoPedido(pedido: Pedido): boolean {
        if (this.produtosDisponiveis.includes(pedido['produto'])) {
            return true;
        }
        return false;
    }
}

class Cliente {
    private nome: string;
    private pedidos: Pedido[] = [];

    constructor(nome: string) {
        this.nome = nome;
    }

    // Método para associar um pedido a um cliente
    associarPedidoAoCliente(pedido: Pedido): void {
        this.pedidos.push(pedido);
    }

    // Método para listar todos os pedidos de um cliente
    listarPedidos(): void {
        console.log(`Pedidos do cliente ${this.nome}:`);
        this.pedidos.forEach(pedido => {
            console.log(pedido.getDetalhes);
        });
    }
}

let pedido1 = new Pedido(279801, "PC gamer");
let pedido2 = new Pedido(259801, "Notebook");
let pedido3 = new Pedido(179801, "iPhone");

// Criando um cliente
let cliente = new Cliente("João");

// Criando instância de Produto
let produto = new Produtos();

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
