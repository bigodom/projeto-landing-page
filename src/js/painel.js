// quando clicar a seta avançar temos que esconder todas as imagens
// e mostrar a proxima imagem
// a imagem atal começa no 0, clicando no avançar adiciona +1

console.log('oi');

const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0



setaAvancar.addEventListener('click', function(){

    if(imagemAtual === imagensPainel.length -1){
        imagemAtual = -1
    }

    imagemAtual++
    
    // removendo o mostrar da imagem:
    imagensPainel.forEach(imagem =>{
        imagem.classList.remove('mostrar')
    })

    // mostrar a proxima imagem:
    imagensPainel[imagemAtual].classList.add('mostrar')
})

setaVoltar.addEventListener('click', function(){

    if(imagemAtual === 0){
        imagemAtual = 3
    }

    imagemAtual--
    
    // removendo o mostrar da imagem:
    imagensPainel.forEach(imagem =>{
        imagem.classList.remove('mostrar')
    })

    // mostrar a proxima imagem:
    imagensPainel[imagemAtual].classList.add('mostrar')
})