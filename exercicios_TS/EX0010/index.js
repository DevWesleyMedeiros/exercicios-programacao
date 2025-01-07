"use strict";
// Criar polimorfismo simples. Crie duas class gato e cachorro ambas com o método falar. Em seguida, crie um método que recebe um animal e chame o método falar
class Cat {
    cat = "CAT";
    constructor() {
        console.log(`This animal is a ${this.cat}`);
    }
    makingSound() {
        return "MIAUuu";
    }
}
class Dog {
    dog = "DOG";
    constructor() {
        console.log(`This animal is a ${this.dog}`);
    }
    makingSound() {
        return "AUAULL";
    }
}
const animal = (animal) => {
    try {
        console.log(animal.makingSound());
    }
    catch (error) {
        console.error("Erro: " + error.message);
    }
};
const cat = new Cat();
const dog = new Dog();
animal(cat);
animal(dog);
