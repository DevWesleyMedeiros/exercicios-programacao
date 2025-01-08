"use strict";
// Crie um array de objetos animal e faça um loop para chamar o método falar para cada um deles. ARRAY de objetos [{}, {}, {}] 
class Zoologico {
    arrayAnimais;
    constructor() {
        this.arrayAnimais = [];
    }
    adicionarAnimais(nome, especie) {
        const animal = {
            nome,
            especie,
            animalFalar: () => `O animal ${nome} da espécie ${especie} esta fazendo um SOM`,
        };
        this.arrayAnimais.push(animal);
    }
    animalEmitindoSom() {
        this.arrayAnimais.forEach((animal) => console.log(animal.animalFalar()));
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
