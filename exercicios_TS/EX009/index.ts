// Criar um objeto e retornar sua parte legível. Chame o Objeto JSON e seu método stringfy para converter um objeto {} em uma string legível

class Livro {

    private authorName: string;
    private bookTitle: string;

    constructor(name: string, title: string) {
        this.authorName = name;
        this.bookTitle = title;
    }
    get getBookInfo(): string {
        return `Nome do autor: ${this.authorName} \nNome do Livro: ${this.bookTitle}`;
    }
    objectReadableVersion(): string {
        return JSON.stringify(
            { NameAuthor: this.authorName, BookTitle: this.bookTitle }, null, 2
        );
    }
}

const newBook = new Livro("Napoleão Hill", "Quem Pensa, Enriquece");

console.log(newBook.getBookInfo); // Chama o getter
console.log(newBook.objectReadableVersion()); // Chama o método que retorna o JSON formatado
