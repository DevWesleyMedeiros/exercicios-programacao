function clicar() {
    const nome = String(window.prompt('Qual seu nome: '));
    const ano_nascimento = Number(window.prompt('Em que ano você nasceu?'));
    const calculo_idade = 2023 - ano_nascimento
    const resultado = document.querySelector('div#ResultadoCodigo').value
    document.write('Verificando, se você nasceu em um ano bissexto...<br>');
    setTimeout(function() {
        resultado.innerHTML = `<h1>Você, ${nome}, tem ${calculo_idade} anos e nasceu em ${ano_nascimento}</h1>`;
    }, 4000);
    if ((calculo_idade % 4 === 0 && calculo_idade % 100 !== 0) || calculo_idade % 400 === 0) {
        resultado.innerHTML += `<h1>Você ${nome} nasceu em um ano bissexto</h1>`;
    } else {
        resultado.innerHTML += `<h1>Você nasceu em um ano que não é bissexto</h1>`;
    }
}
