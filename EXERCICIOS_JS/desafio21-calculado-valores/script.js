/*
var firstNum = document.getElementById('first-number');
var secondNum = document.getElementById('second-number');
var operacao = [...document.querySelectorAll('.opcao')];
var resultado = document.getElementById('resultado');
var calcular = document.getElementById('calcular');

calcular.addEventListener('click', () => {
    /*var num1 = parseFloat(firstNum.value);
    var num2 = parseFloat(secondNum.value);
    */
/*
    operacao.map((p) => {
        if (p.checked) {
            if (p.value === 'operacao1') {
                var soma = parseFloat(firstNum.value + secondNum.value);
                resultado.innerHTML += ` <p>A soma de ${firstNum.value} + ${secondNum.value} vale ${soma}</p>`;
            } else if (p.value === 'operacao2') {
                var subtracao = parseFloat(firstNum.value - secondNum.value);
                resultado.innerHTML += ` <p>A subtração de ${firstNum.value} - ${secondNum.value} vale ${subtracao}</p>`;
            } else if (p.value === 'operacao3') {
                var multiplicacao = parseFloat(firstNum.value * secondNum.value);
                resultado.innerHTML += ` <p>A multiplicação de ${firstNum.value} * ${secondNum.value} vale ${multiplicacao}</p>`;
            } else {
                var divisao = parseFloat(firstNum.value / secondNum.value);
                resultado.innerHTML += `<p>A divisão de ${firstNum.value} / ${secondNum.value} vale ${divisao}</p>`;
            }
        }
    });
*/

var firstNum = document.getElementById('first-number');
var secondNum = document.getElementById('second-number');
var operacao = [...document.querySelectorAll('.opcao')];
var resultado = document.getElementById('resultado');
var calcular = document.getElementById('calcular');

calcular.addEventListener('click', () => {
    var num1 = parseFloat(firstNum.value);
    var num2 = parseFloat(secondNum.value);

    operacao.map((p) => {
        
        if (p.checked) {
            if (p.value === 'operacao1') {
                var soma = num1 + num2;
                resultado.innerHTML += ` <p>A soma de ${num1} + ${num2} vale ${soma}</p>`;
            } else if (p.value === 'operacao2') {
                var subtracao = num1 - num2;
                resultado.innerHTML += ` <p>A subtração de ${num1} - ${num2} vale ${subtracao}</p>`;
            } else if (p.value === 'operacao3') {
                var multiplicacao = num1 * num2;
                resultado.innerHTML += ` <p>A multiplicação de ${num1} * ${num2} vale ${multiplicacao}</p>`;
            } else {
                var divisao = num1 / num2;
                resultado.innerHTML += `<p>A divisão de ${num1} / ${num2} vale ${divisao}</p>`;
            }
        }else{
            alert("ERRO! Você precisa digitar algum valor")
        }
    });
});























