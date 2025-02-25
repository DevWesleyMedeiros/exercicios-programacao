// Crie uma função que receba uma letra qualquer do alfabeto e retorne o valor da posição da letra

class Alphabet {
    private arrayAlphabet: string[] = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    constructor() {
        this.uppercaseLetters();
    }
    public uppercaseLetters(): void {
        this.arrayAlphabet = this.arrayAlphabet.map((letter) => letter.toUpperCase());
    }
    get getArrayAlphabet(): string[] {
        return this.arrayAlphabet;
    }
}

class LetterPositionInAlphabet {
    static findPosition(arrayLetter: string[], letter: string): number | undefined {
        for (let index = 0; index < arrayLetter.length; index++) {
            if (letter.toLocaleUpperCase() === arrayLetter[index]) {
                return index +1;
            }
        }
        return undefined;
    }
}

// Criação de instância e execução
const alphabet = new Alphabet();
console.log(LetterPositionInAlphabet.findPosition(alphabet.getArrayAlphabet, "d")); 
