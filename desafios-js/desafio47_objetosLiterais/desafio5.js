/*Desafio 5 - Crie um objeto casa que tenha propriedades como endereço, número de quartos e informações sobre o proprietário. O campo de informações sobre o proprietário deve ser outro objeto com propriedades como nome, idade e profissão. Exiba algumas informações sobre a casa e o proprietário no console.
*/

const casa = {
    endereco: "Rua General Vargas 890",
    numero: 4,
    propietario: {
        nome: "Wesley",
        idade: 25,
        profissao: "Programador"
    }
}
console.log(casa.endereco);
console.log("Propietário: " + casa.propietario.nome + " Idade: " + casa.propietario.idade);

for (const p in casa) {
    console.log(p)
    for (const i in casa.propietario){
        console.log(i.valueOf(1));
    };
}
