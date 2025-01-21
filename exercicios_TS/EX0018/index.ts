/*
Crie uma Factory para instanciar diferentes tipos de Produto com base no tipo de produto escolhido. Por exemplo, Livro ou Livro eletrônico. 

O Factory deve criar instâncias de produtos sem que o cliente precise saber a classe exata

COMO FUNCIONA O FACTORY PATTERN:
é um padrão de projeto, mais especificamente, um padrão de criação. Ele fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objeto que será criado.

Como funciona o Factory Pattern:
O padrão de fábrica permite que o cliente crie objetos sem precisar conhecer a classe exata que será instanciada. Em vez de chamar diretamente o construtor da classe, o cliente chama um método de fábrica, que pode retornar diferentes tipos de objetos dependendo da implementação. 

QUANDO EU DEVO USÁ-LO: este padrão é útil quando a criação de um objeto é complexa ou quando você não sabe de antemão qual classe deverá ser instanciada.

*/

interface Livros {
    selecionarLivro(): string;
}

class LivrosEmPapel implements Livros {
    selecionarLivro(): string {
        return "Livro em papel escolhido";
    }
}

class LivroDigital implements Livros {
    selecionarLivro(): string {
        return "Livro digital escolhido";
    }
}

class LivroEmAudio implements Livros {
    selecionarLivro(): string {
        return "Livro em áudio escolhido";
    }
}

class FactoryLivros {
    static escolherTipoLivro(tipo: string): Livros {
        tipo = tipo.toLocaleUpperCase().trim();

        if (tipo === "") {
            throw new Error("Tipo de livro não selecionado");
        }

        switch (tipo) {
            case "LIVRO EM PAPEL":
                return new LivrosEmPapel();
            case "LIVRO DIGITAL EM PDF":
                return new LivroDigital();
            case "LIVRO EM AUDIO":
                return new LivroEmAudio();
            default:
                throw new Error("Tipo de livro desconhecido");
        }
    }
}

enum TiposDeLivro {
    LivroEmPapel = "Livro em papel",
    LivroDigital = "Livro Digital em PDF",
    LivroEmAudio = "Livro em áudio"
}

try {
    // A string precisa ser compatível com os tipos do enum TiposDeLivro
    const tipoLivroEscolhido = TiposDeLivro.LivroDigital; // Ou qualquer outro valor do enum
    const meuLivro = FactoryLivros.escolherTipoLivro(tipoLivroEscolhido);
    console.log(meuLivro.selecionarLivro());
} catch (error: any) {
    console.error(`Erro: ${error.message}`);
}
