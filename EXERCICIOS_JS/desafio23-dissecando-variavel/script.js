var resultado = document.querySelector('.container')

const frase = window.prompt('Digite qualquer frase ou palavra').trim()
if(!(isNaN(frase))){
    alert('Você precisa digitar uma frase ou palavra')
}else{
    resultado.innerHTML=`<p><strong>O tipo primitivo é ${typeof(frase)}</strong></p>`
    resultado.innerHTML+=`<p><strong>Contém  ${frase.length} caracteres</strong></p>`
    resultado.innerHTML+=`<p><strong>${frase.toUpperCase()} em letras maiúsculas caracteres</strong></p>`
    resultado.innerHTML+=`<p><strong>${frase.toLowerCase()} em letras minúsculas caracteres</strong></p>`
    

}

