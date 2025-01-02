class Produto {

    protected products: { product: string, price: number }[];

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
class ProductIterator{

    private productList:{product:string, price:number}[];

    constructor(products:{product:string, price:number}[]){
        this.productList = products;
    }
    *productIterator(){
        for (const product of this.productList) {
            yield product;
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
