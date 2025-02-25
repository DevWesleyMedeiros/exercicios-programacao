// Crie um array de objetos animal e faça um loop para chamar o método falar para cada um deles. ARRAY de objetos [{}, {}, {}] 
var Zoologico = /** @class */ (function () {
    function Zoologico() {
        this.arrayAnimais = [];
    }
    Zoologico.prototype.adicionarAnimais = function (nome, especie) {
        var animal = {
            nome: nome,
            especie: especie,
            animalFalar: function () { return "O animal ".concat(nome, " da esp\u00E9cie ").concat(especie, " esta fazendo um SOM"); },
        };
        this.arrayAnimais.push(animal);
    };
    Zoologico.prototype.animalEmitindoSom = function () {
        this.arrayAnimais.forEach(function (animal) { return console.log(animal.animalFalar()); });
    };
    return Zoologico;
}());
var novoAnimal = new Zoologico();
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
