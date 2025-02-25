/*
Crie uma função que criptografe um texto. A função deve recerber um texto e retornar um valor que representa cada uma das posições delas no alfabeto
alfabeto = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' = 26 letras
    ];

Ex.: wesley - w - 23; e - 5; s - 19; l - 12; e - 5; y - 25
retorno para wesley seria - 235191225
*/
var Alphabets = /** @class */ (function () {
    function Alphabets() {
        this.alphabet = [];
        this.initializeAlphabet();
    }
    Alphabets.prototype.initializeAlphabet = function () {
        this.alphabet = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];
    };
    Object.defineProperty(Alphabets.prototype, "alphabetUpperCase", {
        get: function () {
            return this.alphabet.map(function (letter) { return letter.toUpperCase(); });
        },
        enumerable: false,
        configurable: true
    });
    Alphabets.prototype.encryptedText = function (word) {
        var arrayWordIndexAlphabet = [];
        word = word.toLowerCase();
        for (var i = 0; i < word.length; i++) {
            var letter = word[i];
            var indexInAlphabet = this.alphabet.indexOf(letter);
            if (indexInAlphabet !== -1) {
                arrayWordIndexAlphabet.push(indexInAlphabet + 1);
            }
        }
        return arrayWordIndexAlphabet;
    };
    return Alphabets;
}());
var alphabets = new Alphabets();
var encryptedWord = alphabets.encryptedText("wesley");
var seeLetterPositionInAlphabet = function (arrayNumber) {
    return arrayNumber.join("");
};
console.log(seeLetterPositionInAlphabet(encryptedWord));
