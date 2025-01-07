// Criar polimorfismo simples. Crie duas class gato e cachorro ambas com o método falar. Em seguida, crie um método que recebe um animal e chame o método falar

interface Animal{
    makingSound():string;
}

class Cat implements Animal{
    private cat:string = "CAT";

    constructor(){
        console.log(`This animal is a ${this.cat}`)
    }
    makingSound(): string {
        return "MIAUuu";
    }
}
class Dog implements Animal{
    private dog:string = "DOG";

    constructor(){
        console.log(`This animal is a ${this.dog}`)
    }
    makingSound(): string {
        return "AUAULL";
    }
}
const animal = (animal:Animal)=>{
    try {
        console.log(animal.makingSound());
    } catch (error: any) {
        console.error("Erro: " + error.message);
    }
}

const cat = new Cat();
const dog = new Dog();

animal(cat);
animal(dog);