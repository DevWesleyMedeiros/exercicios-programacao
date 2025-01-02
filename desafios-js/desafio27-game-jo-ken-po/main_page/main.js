const playerOption = document.getElementById("player_option");
const resultBox = document.querySelector(".resposta");
const btnSubmit = document.getElementById("submit");

const arrayOptionPlayer = ["Pedra", "Papel", "Tesoura"];

function winnerPlayer(playerChoice){
    const cpuPlayer = arrayOptionPlayer[Math.floor(Math.random() * 3)];

    if(cpuPlayer === "Pedra" && playerChoice === "Tesoura"){
        resultBox.innerHTML = `<h1>VOCÊ FOI DERROTADO! CPU ${cpuPlayer} e jogador ${playerChoice} PEDRA quebra a TESOURA</h1>`;
    }else if(cpuPlayer === "Papel" && playerChoice === "Pedra"){
        resultBox.innerHTML = `<h1>VOCÊ FOI DERROTADO! CPU ${cpuPlayer} e jogador ${playerChoice} PAPEL enrola a PEDRA</h1>`;
    }else if(cpuPlayer === "Tesoura" && playerChoice === "Papel"){
        resultBox.innerHTML = `<h1>VOCÊ FOI DERROTADO! CPU ${cpuPlayer} e jogador ${playerChoice} TESOURA corta o PAPEL</h1>`;
    }else if(cpuPlayer === playerChoice) {
        resultBox.innerHTML = `<h1>Nós empatamos</h1>`;
    }else if(cpuPlayer === "Tesoura" && playerChoice === "Pedra"){
        resultBox.innerHTML = `<h1>VOCÊ VENCEU! CPU ${cpuPlayer} e jogador ${playerChoice} PEDRA quebra a TESOURA</h1>`;
    }else if(cpuPlayer === "Pedra" && playerChoice === "Papel"){
        resultBox.innerHTML = `<h1>VOCÊ VENCEU! CPU ${cpuPlayer} e jogador ${playerChoice} PAPEL enrola a PEDRA</h1>`;
    }else{
        resultBox.innerHTML = `<h1>VOCÊ VENCEU! CPU ${cpuPlayer} e jogador ${playerChoice} TESOURA corta o PAPEL</h1>`;
    }
}

btnSubmit.addEventListener("click", () => {
    const selectedOption = playerOption.value;
    winnerPlayer(selectedOption);
});


