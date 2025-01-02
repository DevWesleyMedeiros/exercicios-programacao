/*Desafio 3 - Crie um objeto filme com propriedades como título, ano de lançamento e elenco (um array de atores). Em seguida, itere sobre o array de atores e exiba cada um deles no console.*/

const filme = {
    titulo: "A volta dos que não foram",
    ano: 2024,
    elenco: ["Arnold", "Jonh Cena", "The Rock"]
};

for (let ator = 1; ator < filme.elenco.length + 1; ator++) {
    console.log(`${ator}° ator. Nome: ${filme.elenco[ator]}`);
}