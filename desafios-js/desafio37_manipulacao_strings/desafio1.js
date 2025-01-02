// const palavra = document.querySelector("#palavra");
// const btnVerificar = document.querySelector("#btnVerificar");


// const removerCaracteresRepetidas = (str) =>{
//     let string = new String(str.toUpperCase().trim());
//     let resultado = '';
//     const caracteresVazios = {};

//     for (let i = 0; i < string.length; i++) {
//         const caractere = string[i];
//         if (!caracteresVazios[caractere]) {
//             caracteresVazios[caractere] = true;
//             resultado += caractere;
//         }
//     }
//     return resultado;
// }

// btnVerificar.addEventListener("click", ()=>{
//     if (palavra.value == "") {
//         alert("Digite uma palavra");
//     }
//     let div = document.createElement("div");
//     div.setAttribute("class", "res");
//     div.innerHTML = removerCaracteresRepetidas(palavra.value)
//     document.body.appendChild(div);
// })
