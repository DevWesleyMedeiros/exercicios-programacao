// Criar polimorfismo simples. Crie duas class gato e cachorro ambas com o método falar. Em seguida, crie um método que recebe um animal e chame o método falar
var Cat = /** @class */ (function () {
    function Cat() {
        this.cat = "CAT";
        console.log("This animal is a ".concat(this.cat));
    }
    Cat.prototype.makingSound = function () {
        return "MIAUuu";
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
        this.dog = "DOG";
        console.log("This animal is a ".concat(this.dog));
    }
    Dog.prototype.makingSound = function () {
        return "AUAULL";
    };
    return Dog;
}());
var animal = function (animal) {
    try {
        console.log(animal.makingSound());
    }
    catch (error) {
        console.error("Erro: " + error.message);
    }
};
var cat = new Cat();
var dog = new Dog();
animal(cat);
animal(dog);
