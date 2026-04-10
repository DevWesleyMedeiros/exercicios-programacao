// Crie um array de objetos animal e faça um loop para chamar o método falar para cada um deles. ARRAY de objetos [{}, {}, {}] 

interface Animal{
    nome:string;
    especie:string;
    animalFalar():string;
}
class Zoologico implements Animal {
  arrayAnimais: Animal[]
  nome: string
  especie: string

  constructor(nome: string = '', especie: string = '') {
    this.arrayAnimais = []
    this.nome = nome
    this.especie = especie
  }
  animalFalar(): string {
    throw new Error('Method not implemented.')
  }
  adicionarAnimais(nome: string, especie: string): void {
    const animal: Animal = {
      nome,
      especie,
      animalFalar: () => `O animal ${nome} da espécie ${especie} esta fazendo um SOM`,
    }
    this.arrayAnimais.push(animal)
  }
  animalEmitindoSom(): void {
    this.arrayAnimais.forEach((animal) => console.log(animal.animalFalar()))
  }
}
const novoAnimal = new Zoologico();
novoAnimal.adicionarAnimais("Leão", "Pantera Leo");
novoAnimal.adicionarAnimais('Tigre', 'Panthera tigris');
novoAnimal.adicionarAnimais('Elefante', 'Loxodonta africana');
novoAnimal.animalEmitindoSom();


/*
Return espected from readable object animal
console.log(JSON.stringify(novoAnimal, null, 2));
"arrayAnimais": [
    {
      "nome": "Leão",
      "especie": "Pantera Leo"
    },
    {
      "nome": "Tigre",
      "especie": "Panthera tigris"
    },
    {
      "nome": "Elefante",
      "especie": "Loxodonta africana"
    }
  ]
}
*/