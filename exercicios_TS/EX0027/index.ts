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

// classe que possui o método avançar página, voltar página e ir para página

/**
 * Interface para abstrair como as mensagens são exibidas.
 * Isso permite que futuramente você troque o console.log por um alerta no browser
 * ou logs em um arquivo sem mexer na lógica de navegação.
 */
interface INotifier {
  notify(message: string): void
}

class ConsoleNotifier implements INotifier {
  notify(message: string): void {
    console.log(message)
  }
}

/**
 * Classe de dados (Entidade).
 * Focada apenas em representar o que é um Livro.
 */
class Book {
  constructor(
    public readonly title: string,
    public readonly author: string,
    public readonly totalPages: number,
  ) {}
}

/**
 * Navegador de Livros (Serviço).
 * Centraliza a lógica de negócio e validação.
 */
class BookNavigator {
  private currentPage: number = 1

  constructor(
    private book: Book,
    private notifier: INotifier,
  ) {
    this.notifier.notify(
      `Livro aberto: "${book.title.trim()}" - ${book.author.trim()}. Total: ${book.totalPages} páginas.`,
    )
  }

  // método da classe BookNavegator que avança para uma determinada página
  advance(pages: number): void {
    const target = this.currentPage + pages
    if (target > this.book.totalPages) {
      this.notifier.notify(`Erro: O livro tem apenas ${this.book.totalPages} páginas.`)
      return
    }
    this.updateCurrentPage(target, `Avançou ${pages} páginas.`)
  }

  // método da classe BookNavegator que volta para uma determinada página
  goBack(pages: number): void {
    const target = this.currentPage - pages
    if (target < 1) {
      this.notifier.notify(`Erro: Página mínima é 1.`)
      return
    }
    this.updateCurrentPage(target, `Voltou ${pages} páginas.`)
  }

  // método da classe BookNavegator que vai para uma determinada página
  goTo(page: number): void {
    if (page < 1 || page > this.book.totalPages) {
      this.notifier.notify(`Erro: Página ${page} inválida.`)
      return
    }
    this.updateCurrentPage(page, `Pulou para a página ${page}.`)
  }

  private updateCurrentPage(page: number, action: string): void {
    this.currentPage = page
    this.notifier.notify(`${action} Agora você está na página ${this.currentPage}.`)
  }
}

// --- Execução ---

const myBook = new Book('Engenharia de Software', 'Roger S. Pressman', 1175)
const notifier = new ConsoleNotifier()
const navigator = new BookNavigator(myBook, notifier)

navigator.goTo(30)
navigator.advance(10)
navigator.goBack(20)
navigator.goTo(0)
