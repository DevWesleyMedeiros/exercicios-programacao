const olhos = [...document.getElementsByClassName('inner_black_circle')]

let posicaoX = 0
let posicaoY = 0

window.addEventListener('mousemove', (evt)=>{
    posicaoX = evt.clientX
    posicaoY = evt.clientY

    let rot = Math.atan2(posicaoX, posicaoY) * 100/Math.PI

    olhos.forEach((olho)=>{
        olho.style.transform = "rotate("+rot+"deg)"
    })
})
