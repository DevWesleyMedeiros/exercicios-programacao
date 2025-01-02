class Cxmsg{
    static cor = "#888";
    static destino = null;
    static divMsg = null;
    static tipo = null;
    static comando = null;
    static textos = [];

    // Método que mostrará minha caixa de dialago
    static mostrarCaixa = (config, titulo, texto) =>{
        this.cor = config.cor;
        this.tipo = config.tipo;
        this.comando = config.comando;
        this.textos = config.textos;
        this.destino = document.body;
        this.titulo = titulo;
        this.texto = texto;
        // Cria a div background da caixa de dialago
        this.divMsg = document.createElement("div");
        const estiloDivMsg = `
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.7)`;

        this.divMsg.setAttribute("id", "divmsg");
        this.divMsg.setAttribute("style", estiloDivMsg);
        this.destino.prepend(this.divMsg);

        //Cria uma div caixa de estilo onde aparecerá o título, texto etc.
        const areaCaixaMsg = document.createElement("div");
        const estiloAreaCmsg = `
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            width: 300px`;
        areaCaixaMsg.setAttribute("style", estiloAreaCmsg);
        this.divMsg.appendChild(areaCaixaMsg);

        //Cria a div que armazena o título da caixa
        const divCaixaTitulo = document.createElement("div");
        const estiloTituloCmsg = `
            display: flex,
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            background-color: ${this.cor};
            color: #fff;
            padding: 5px;
            border-radius: 5px 5px 0px 0px`;
        divCaixaTitulo.setAttribute("style", estiloTituloCmsg);
        divCaixaTitulo.innerHTML = this.titulo;
        areaCaixaMsg.appendChild(divCaixaTitulo);

        // Cria a div que armazena o texto da caixa
        const divCaixaTexto = document.createElement("div");
        const estiloTextoCmsg = `
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            background-color: #eee;
            color: #000;
            padding: 30px 5px`;
        divCaixaTexto.setAttribute("style", estiloTextoCmsg);
        divCaixaTexto.innerHTML = this.texto;
        areaCaixaMsg.appendChild(divCaixaTexto);

        //Cria a div que armazena o rodapé da caixa de dialago
        const divCaixaRodape = document.createElement("div");
        const estiloRodapeCmsg = `
            display: flex;
            justify-content: space-around;
            align-items; center;
            width: 100%;
            background-color: #ccc;
            color: #000;
            padding: 5px;
            border-radius: 0px 0px 5px 5px;`;
        divCaixaRodape.setAttribute("style", estiloRodapeCmsg);
        areaCaixaMsg.appendChild(divCaixaRodape);

        // Cria o botão para o centro do rodapé
        const estiloButao = `
            background-color: ${this.cor};
            color: #fff;
            padding: 10px 50px;
            border-radius: 5px;
            cursor: pointer;
            text-transform: uppercase`;
        if (this.tipo == "OK") {
            const btnOk = document.createElement("button");
            btnOk.setAttribute("style", estiloButao);
            btnOk.innerHTML = "Ok";
            btnOk.addEventListener("click", (evt)=>{
                this.ocultarCaixa();
            })
            divCaixaRodape.appendChild(btnOk);
        }else if(this.tipo == "sn"){
            const btnSim = document.createElement("button");
            btnSim.setAttribute("style", estiloButao);
            btnSim.innerHTML = this.textos[0];
            btnSim.addEventListener("click", (evt)=>{
                this.ocultarCaixa();
            })
            divCaixaRodape.appendChild(btnSim);

            const btnNao = document.createElement("button");
            btnNao.setAttribute("style", estiloButao);
            btnNao.innerHTML = this.textos[1];
            btnNao.addEventListener("click", (evt)=>{
                this.ocultarCaixa();
            })
            divCaixaRodape.appendChild(btnNao);
        }
    }
    static ocultarCaixa = () =>{
        // Remover a div pai
        this.divMsg.remove();
    }
}
export { Cxmsg };