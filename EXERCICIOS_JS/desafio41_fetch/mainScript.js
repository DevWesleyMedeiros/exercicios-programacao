document.addEventListener("DOMContentLoaded", () =>{

  const titulo = document.querySelector("#titulo_imagem");
  const data = document.querySelector("#data");
  const explicacao = document.querySelector("#explicacao_imagem");
  const foto = document.querySelector("#foto_dia");

  let endingPoint = "https://api.nasa.gov/planetary/apod?api_key=f8wYdVypZ3UdCfYKHNBizqQf5KlRI0ThkgEoNzDV";

  fetch(endingPoint)
  .then(res => res.json())
  .then(dados => {
    console.log(dados);

    titulo.innerHTML = `${dados.title}`;
    data.innerHTML = `Data da Imagem: ${dados.date}`
    explicacao.innerHTML = `<strong>Sobre a foto:</strong> ${dados.explanation}`

    const imagem = document.createElement('img');
    imagem.classList.add("foto");
    imagem.src = dados.url;
    imagem.alt = dados.title;

    foto.innerHTML = '';
    foto.appendChild(imagem);

    console.log(dados.explanation);
  })
  .catch(erro => console.error(`Erro: ${erro}`))
})

