class Produto {

    protected products: { product: string, price: number }[];  //[{}, {}, {}]

    constructor() {
        this.products = [];
    }

    // Apenas gerencia os produtos
    get getProducts(): { product: string, price: number }[] {
        return this.products
    }

    // Apenas adiciona produtos
    addItems(product: { product: string, price: number }) {
        this.products.push(product);
    }
}
class ProductIterator {
  private productList: { product: string; price: number }[]

  constructor(products: { product: string; price: number }[]) {
    this.productList = products
  }

  // sinal de * indica que é um generator, ou seja, uma função que pode ser pausada e retomada. Yield é usado para pausar a função e retornar um valor, e quando a função é retomada, ela continua a partir do ponto onde foi pausada.
  *productIterator() {
    for (const product of this.productList) {
      yield product
    }
  }
}
const productList = new Produto();
productList.addItems({ product: "Computador", price: 5000 });
productList.addItems({ product: "Notebook", price: 2000});
productList.addItems({ product: "Televisão", price: 3000});

console.log(productList.getProducts);

// Pegando da lista produto por produto
const productIterator = new ProductIterator(productList.getProducts);
for (const product of productIterator.productIterator()) {
    console.log(product)
}
