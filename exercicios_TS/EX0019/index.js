// Crie uma função que receba uma letra qualquer do alfabeto e retorne o valor da posição da letra
var Alphabet = /** @class */ (function () {
    function Alphabet() {
        this.arrayAlphabet = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];
        this.uppercaseLetters();
    }
    Alphabet.prototype.uppercaseLetters = function () {
        this.arrayAlphabet = this.arrayAlphabet.map(function (letter) { return letter.toUpperCase(); });
    };
    Object.defineProperty(Alphabet.prototype, "getArrayAlphabet", {
        get: function () {
            return this.arrayAlphabet;
        },
        enumerable: false,
        configurable: true
    });
    return Alphabet;
}());
var LetterPositionInAlphabet = /** @class */ (function () {
    function LetterPositionInAlphabet() {
    }
    LetterPositionInAlphabet.findPosition = function (arrayLetter, letter) {
        for (var index = 0; index < arrayLetter.length; index++) {
            if (letter.toLocaleUpperCase() === arrayLetter[index]) {
                return index + 1;
            }
        }
        return undefined;
    };
    return LetterPositionInAlphabet;
}());
// Criação de instância e execução
var alphabet = new Alphabet();
console.log(LetterPositionInAlphabet.findPosition(alphabet.getArrayAlphabet, "d"));
