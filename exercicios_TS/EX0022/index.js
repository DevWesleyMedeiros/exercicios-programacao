// Escreva uma função que receba um conjunto de valores e retorne o número par deles
var RangeValue = /** @class */ (function () {
    function RangeValue() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        this.values = [];
        this.values = numbers;
    }
    Object.defineProperty(RangeValue.prototype, "getAllValues", {
        get: function () {
            return this.values;
        },
        enumerable: false,
        configurable: true
    });
    RangeValue.prototype.evenValuesFromRange = function (values) {
        return this.values.filter(function (value) { return value % 2 === 0; });
    };
    return RangeValue;
}());
var arrayNumbers = new RangeValue(1, 5, 100, 200, 250, 233, 55, 77);
var arrayEvenNumbers = arrayNumbers.evenValuesFromRange(arrayNumbers.getAllValues);
console.log(arrayEvenNumbers);
