/*
Crie uma função que criptografe um texto. A função deve recerber um texto e retornar um valor que representa cada uma das posições delas no alfabeto
alfabeto = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' = 26 letras
    ];

Ex.: wesley - w - 23; e - 5; s - 19; l - 12; e - 5; y - 25
retorno para wesley seria - 235191225
*/ 

class Alphabets {
    private alphabet: string[] = [];

    constructor() {
        this.initializeAlphabet();
    }
    private initializeAlphabet(): void {
        this.alphabet = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];
    }
    public get alphabetUpperCase(): string[] {
        return this.alphabet.map(letter => letter.toUpperCase());
    }
    public encryptedText(word: string): number[] {
        let arrayWordIndexAlphabet: number[] = [];
        word = word.toLowerCase();
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            let indexInAlphabet = this.alphabet.indexOf(letter);
            if (indexInAlphabet !== -1) { 
                arrayWordIndexAlphabet.push(indexInAlphabet + 1); 
            }
        }
        return arrayWordIndexAlphabet;
    }
}


const alphabets = new Alphabets();
const encryptedWord = alphabets.encryptedText("wesley");

const seeLetterPositionInAlphabet = (arrayNumber: number[]) => {
    return arrayNumber.join("");
};

console.log(seeLetterPositionInAlphabet(encryptedWord));
