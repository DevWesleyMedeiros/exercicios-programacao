const teclasNum = [...document.querySelectorAll(".num")];
const teclasOp = [...document.querySelectorAll(".op")];
const teclaRes = document.querySelector(".res")
const display = document.querySelector("#display");
const limparTela = document.getElementById("tlimpar");
const botaoIgual = document.getElementById("tigual");
const botaoCopiar = document.querySelector("#copy")
const calcAba = document.querySelector("#calc_aba")
const calc = document.getElementById("calc")
const setaDireita = document.getElementById("seta_direita")

let sinal = false;
let decimal = false;

teclasNum.forEach((tecla) => {
    tecla.addEventListener("click", (evt) => {
        sinal = false;
        if(evt.target.innerHTML === ",") {
            if (!decimal){
                decimal = true;
                if(display.innerHTML === "0") {
                    display.innerHTML = "0,";
                }else{
                    display.innerHTML += evt.target.innerHTML;
                }
            }
        }else{
            if(display.innerHTML === "0"){
                display.innerHTML = "";
            }
            display.innerHTML += evt.target.innerHTML;
        }
    });
});
teclasOp.forEach((teclaOp) => {
    teclaOp.addEventListener("click", (evt) => {
        if(!sinal){
            sinal = true;
            if(display.innerHTML === "0") {
                display.innerHTML = "";
            }else if(evt.target.innerHTML === "X") {
                display.innerHTML += "*";
            }else{
                display.innerHTML += evt.target.innerHTML;
            }
        }
    });
});
limparTela.addEventListener("click", (evt) => {
    sinal = false;
    decimal = false;
    display.innerHTML = "0";
});
botaoIgual.addEventListener("click", () => {
    sinal = false;
    decimal = false;
    const resultado = eval(display.innerHTML);
    display.innerHTML = resultado;
});
botaoCopiar.addEventListener("click", ()=>{
    navigator.clipboard.writeText(display.innerHTML)
})
calcAba.addEventListener("click", (evt)=>{
    calc.classList.toggle("calc_exibir")
    if(calc.classList.contains("calc_exibir")){
        setaDireita.setAttribute("src", "arquivos/arrow_left.png")
    }else{
        evt.target.setAttribute("src", "arquivos/arrow_right.png")
    }
})
// ABAIXO UMA MENEIRA COM COMPATIBILIDADE PARA MOBILE DA MESMA FUNÇÃO USANDO O SELECT 
/*display.innerHTML.select() > Seleciona como se o mouse fosse colocado por cima
    display.innerHTML.SetSelectionRange(0, 999999) > Intervalo de letra que serão selecionados
    navigator.clipboard.writeText(display.innerHTML) > Código que vai colocar para minha área de transferência
    Se fosse pelo input, usariamos o .value
*/