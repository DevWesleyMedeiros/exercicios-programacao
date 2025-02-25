/*
Crie uma função que receba um parâmetro texto e dele retirar o sub-texto da frase, retornando somente o texto
Ex.: "A criança beijou sua mãe". 
Retorno: A criança beijou
Ex.:2 "Eu tenho um PC"
Retorno: Eu tenho

splice - dividir texto
substring - substring de uma string
join - juntar
*/ 
class SubtextWraper {
    private word: string;

    constructor(word: string) {
        this.word = word.trim();
    }

    get getWord(): string {
        return this.word;
    }

    // A criança beijou sua mãe - ["A", "criança", "beijou", "sua", "mãe"];
    subtextWraper(text: string): string {
        let arraySubText:string[] = text.split(" ");
        let meio:number = Math.ceil(arraySubText.length / 2);
        let subTextSlice = arraySubText.slice(0, meio);

        return subTextSlice.join(" ");
    }
}

const word = new SubtextWraper("O menino abraçou muito sua mãe");
console.log(word.subtextWraper(word.getWord));