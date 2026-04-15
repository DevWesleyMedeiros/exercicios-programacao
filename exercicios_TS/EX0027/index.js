/*
chamada para função construtora
l1 = new Livro(título: "Quem Pensa Enriquece", autor: "Napoleon Hill", páginas: 200)

mostrar os livros criados no console.log(l1) e console.log(l2)
l1.avançarPagina() // avançar para a próxima página
l1.voltarPagina() // voltar para a página anterior
l1.avançarPagina(10) // avançar 10 páginas
l1.voltarPagina(10) // voltar 10 páginas
l1.irParaPagina(50) // ir para a página 50
l1.irParaPagina(250) // erro, pois o livro tem apenas 200 páginas
l1.irParaPagina(-10 | 0) // erro, pois a página não pode ser negativa ou zero

console:
você acabou de abrir o livro: "Quem Pensa Enriquece" do autor "Napoleon Hill" e ele tem 200 páginas no total
Você está agora na página 1
Você avançou 10 páginas, agora você está na página 11
Você voltou 10 páginas, agora você está na página 1
Você avançou para a página 50, do seu liv
*/
var ConsoleNotifier = /** @class */ (function () {
    function ConsoleNotifier() {
    }
    ConsoleNotifier.prototype.notify = function (message) {
        console.log(message);
    };
    return ConsoleNotifier;
}());
/**
 * Classe de dados (Entidade).
 * Focada apenas em representar o que é um Livro.
 */
var Book = /** @class */ (function () {
    function Book(title, author, totalPages) {
        this.title = title;
        this.author = author;
        this.totalPages = totalPages;
    }
    return Book;
}());
/**
 * Navegador de Livros (Serviço).
 * Centraliza a lógica de negócio e validação.
 */
var BookNavigator = /** @class */ (function () {
    function BookNavigator(book, notifier) {
        this.book = book;
        this.notifier = notifier;
        this.currentPage = 1;
        this.notifier.notify("Livro aberto: \"".concat(book.title.trim(), "\" - ").concat(book.author.trim(), ". Total: ").concat(book.totalPages, " p\u00E1ginas."));
    }
    BookNavigator.prototype.advance = function (pages) {
        var target = this.currentPage + pages;
        if (target > this.book.totalPages) {
            this.notifier.notify("Erro: O livro tem apenas ".concat(this.book.totalPages, " p\u00E1ginas."));
            return;
        }
        this.updateCurrentPage(target, "Avan\u00E7ou ".concat(pages, " p\u00E1ginas."));
    };
    BookNavigator.prototype.goBack = function (pages) {
        var target = this.currentPage - pages;
        if (target < 1) {
            this.notifier.notify("Erro: P\u00E1gina m\u00EDnima \u00E9 1.");
            return;
        }
        this.updateCurrentPage(target, "Voltou ".concat(pages, " p\u00E1ginas."));
    };
    BookNavigator.prototype.goTo = function (page) {
        if (page < 1 || page > this.book.totalPages) {
            this.notifier.notify("Erro: P\u00E1gina ".concat(page, " inv\u00E1lida."));
            return;
        }
        this.updateCurrentPage(page, "Pulou para a p\u00E1gina ".concat(page, "."));
    };
    BookNavigator.prototype.updateCurrentPage = function (page, action) {
        this.currentPage = page;
        this.notifier.notify("".concat(action, " Agora voc\u00EA est\u00E1 na p\u00E1gina ").concat(this.currentPage, "."));
    };
    return BookNavigator;
}());
// --- Execução ---
var myBook = new Book('Engenharia de Software', 'Roger S. Pressman', 1175);
var notifier = new ConsoleNotifier();
var navigator = new BookNavigator(myBook, notifier);
navigator.goTo(30);
navigator.advance(10);
navigator.goBack(20);
navigator.goTo(0);
