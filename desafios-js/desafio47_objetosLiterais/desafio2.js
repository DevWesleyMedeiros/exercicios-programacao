/*Desafio 2 - Crie um objeto carro com propriedades como modelo, ano e cor. Em seguida, atualize a propriedade de cor do carro e exiba o objeto modificado no console.*/

const carro = {
    modelo: "Esportivo",
    ano: 2012,
    cor: "Azul"
};

console.log("Objeto original");
console.log(carro);


carro.cor = "Preto";
carro.ano = 2015;
carro.marca = "Chevrolet";

console.log("Objetos com propiedades modificadas");
console.log(carro);