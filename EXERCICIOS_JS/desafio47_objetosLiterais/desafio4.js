/*Desafio 4 - Crie um objeto livro com propriedades como título, autor e número de páginas. Em seguida, verifique se o objeto possui a propriedade 'autor' e exiba uma mensagem no console com base no resultado.*/

const livro = {
    titulo: "Quem pensa enriquece",
    autor: "Napoleão Hill",
    paginas: 512,
};

if ("autor" in livro) {
    console.log("Propiedade encontrada no objeto");
} else {
    console.log("Propiedade não encontrada no objeto");
}