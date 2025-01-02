const quantidade = document.querySelector("#quantidade");

const handleKeyup = (evt) => {
    pegaPokemons(quantidade.value);
    quantidade.removeEventListener("keyup", handleKeyup);
}
quantidade.addEventListener("keyup", handleKeyup);

function pegaPokemons(quantidade) {
    const endingPoint = "https://pokeapi.co/api/v2/pokemon?limit=" + quantidade;

    fetch(endingPoint)
        .then(res => res.json())
        .then(dados => {
            console.log(dados);
            let arrayPokemons = [];

            dados.results.forEach((pokemon) => {
                arrayPokemons.push({
                    nome: pokemon.name,
                    url: pokemon.url
                });
            });

            const divImagemPokemon = document.querySelector("#pokemon_imagem");
            divImagemPokemon.innerHTML = "";

            arrayPokemons.forEach((objeto) => {
                fetch(objeto.url)
                    .then(res => res.json())
                    .then(dadosPokemon => {
                        console.log(dadosPokemon);
                        let div = document.createElement("div");
                        let img = document.createElement("img");
                        let p = document.createElement("p");

                        div.classList.add("pokemon");
                        img.src = dadosPokemon.sprites.front_default;
                        img.alt = "Imagem do pokemon";
                        p.innerHTML = objeto.nome;

                        div.append(img, p);
                        divImagemPokemon.appendChild(div);
                    })
                    .catch(error => console.error('Erro ao buscar dados do Pokémon:', error));
            });
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
}



