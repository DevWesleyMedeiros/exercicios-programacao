// Criar um objeto e retornar sua parte legível. Chame o Objeto JSON e seu método stringfy para converter um objeto {} em uma string legível
var Livro = /** @class */ (function () {
    function Livro(name, title) {
        this.authorName = name;
        this.bookTitle = title;
    }
    Object.defineProperty(Livro.prototype, "getBookInfo", {
        get: function () {
            return "Nome do autor: ".concat(this.authorName, " \nNome do Livro: ").concat(this.bookTitle);
        },
        enumerable: false,
        configurable: true
    });
    Livro.prototype.objectReadableVersion = function () {
        return JSON.stringify({ NameAuthor: this.authorName, BookTitle: this.bookTitle }, null, 2);
    };
    return Livro;
}());
var newBook = new Livro("Napoleão Hill", "Quem Pensa, Enriquece");
console.log(newBook.getBookInfo); // Chama o getter
console.log(newBook.objectReadableVersion()); // Chama o método que retorna o JSON formatado
