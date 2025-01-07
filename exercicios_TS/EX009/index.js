"use strict";
// Criar um objeto e retornar sua parte legível. Chame o Objeto JSON e seu método stringfy para converter um objeto {} em uma string legível
class Livro {
    authorName;
    bookTitle;
    constructor(name, title) {
        this.authorName = name;
        this.bookTitle = title;
    }
    get getBookInfo() {
        return `Nome do autor: ${this.authorName} \nNome do Livro: ${this.bookTitle}`;
    }
    objectReadableVersion() {
        return JSON.stringify({ NameAuthor: this.authorName, BookTitle: this.bookTitle }, null, 2);
    }
}
const newBook = new Livro("Napoleão Hill", "Quem Pensa, Enriquece");
console.log(newBook.getBookInfo); // Chama o getter
console.log(newBook.objectReadableVersion()); // Chama o método que retorna o JSON formatado
