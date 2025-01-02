// /*
// Desafio 3: Inverter palavras
// Escreva uma função que recebe uma frase como entrada e inverte a ordem das palavras.
// */

// const palavra = document.querySelector("#palavra");
// const btnVerificar = document.querySelector("#btnVerificar");

// const inverterOrdemPalavras = (str) =>{
//     let frase = new String(str.toUpperCase().trim());
//     frase = frase.replace(/\s/g, "");
//     frase = frase.split("");
//     frase = frase.reverse().join("");
//     return frase;
// }

// btnVerificar.addEventListener("click", (evt)=>{
//     if (palavra.value == ""){
//         alert("Escreva uma frase ou palavra");
//     }
//     let div = document.createElement("div");
//     div.setAttribute("class", "resposta");
//     div.innerHTML = inverterOrdemPalavras(palavra.value);
//     document.body.appendChild(div);
//     palavra.value = "";
//     palavra.focus();
// })