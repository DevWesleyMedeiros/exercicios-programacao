import { Cxmsg } from "./caixa_mensagem.js";

 const config = {
    cor: "#48f",
    tipo: "sn",
    textos: ["SIM", "NÃO"],
    comando: ()=>{}
};

// const cxmsg = new Cxmsg(config);
// const cxmsg2 = new Cxmsg(config);
// const cxmsg3 = new Cxmsg(config);

const btnMostrarCaixa = document.querySelector("#btn_mostrar_mensagem");
const btnMostrarCaixa2 = document.querySelector("#btn_mostrar_mensagem2");
const btnMostrarCaixa3 = document.querySelector("#btn_mostrar_mensagem3");

btnMostrarCaixa.addEventListener("click", ()=>{
    config.tipo = "sn";
    Cxmsg.mostrarCaixa(config, "Curso de JavaScript", "Caixa para curso de JavaScript");
})

btnMostrarCaixa2.addEventListener("click", ()=>{
    config.tipo = "sn";
    config.textos = ["OK", "CANCELA"];
    Cxmsg.mostrarCaixa(config, "Curso de Python", "Caixa para o curso de Python");
})
btnMostrarCaixa3.addEventListener("click", ()=>{
    config.tipo = "OK",
    Cxmsg.mostrarCaixa(config, "Curso de Csharp", "Caixa para o curso de Csharp");
})