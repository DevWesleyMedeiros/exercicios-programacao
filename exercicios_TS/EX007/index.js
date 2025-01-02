"use strict";
class Produto {
    products;
    constructor() {
        this.products = [];
    }
    // Apenas gerencia os produtos
    get getProducts() {
        return this.products;
    }
    // Apenas adiciona produtos
    addItems(product) {
        this.products.push(product);
    }
}
class ProductIterator {
    productList;
    constructor(products) {
        this.productList = products;
    }
    *productIterator() {
        for (const product of this.productList) {
            yield product;
        }
    }
}
const productList = new Produto();
productList.addItems({ product: "Computador", price: 5000 });
productList.addItems({ product: "Notebook", price: 2000 });
productList.addItems({ product: "Televisão", price: 3000 });
console.log(productList.getProducts);
// Pegando da lista produto por produto
const productIterator = new ProductIterator(productList.getProducts);
for (const product of productIterator.productIterator()) {
    console.log(product);
}
// Iterador para iterar cada produto. Esse método irá iterar sobre os produtos de forma eficiente. * - indica que se trata de uma função iteradora. yield - retorna os valores da função iteradora de forma sequencial
