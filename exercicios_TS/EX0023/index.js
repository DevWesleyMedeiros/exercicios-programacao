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
var SubtextWraper = /** @class */ (function () {
    function SubtextWraper(word) {
        this.word = word.trim();
    }
    Object.defineProperty(SubtextWraper.prototype, "getWord", {
        get: function () {
            return this.word;
        },
        enumerable: false,
        configurable: true
    });
    // A criança beijou sua mãe - ["A", "criança", "beijou", "sua", "mãe"];
    SubtextWraper.prototype.subtextWraper = function (text) {
        var arraySubText = text.split(" ");
        var meio = Math.ceil(arraySubText.length / 2);
        var subTextSlice = arraySubText.slice(0, meio);
        return subTextSlice.join(" ");
    };
    return SubtextWraper;
}());
var word = new SubtextWraper("O menino abraçou muito sua mãe");
console.log(word.subtextWraper(word.getWord));
