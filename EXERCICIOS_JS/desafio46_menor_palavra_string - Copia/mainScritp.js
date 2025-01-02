import { getSmallestWord } from "./funcao.js";

document.querySelector("#btn_verificar").addEventListener("click", (evt)=>{
    let inputText = document.querySelector("#campo_palavra");

    if (!isNaN(inputText.value) || inputText.value === "") {
        inputText.value = "";
        inputText.setAttribute("class", "campo_palavra")
        inputText.classList.add("campo_palavra");
        inputText.setAttribute("placeholder", "Campos vazios ou incorretos");
    }else{
        let p = document.getElementById("frase");
        p.innerHTML = getSmallestWord(inputText.value);
        inputText.value = "";
        inputText.focus();
    }
});