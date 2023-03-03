// escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// retorne true se a imagem estiver no modo paisagem


// meu código
const ePaisagem = (larg, alt) => {
    return larg > alt ? true : false;
}

console.log(ePaisagem(1080, 608));


// código do professor
const ehPaisagem = (largura, altura) => largura > altura;
console.log(ehPaisagem(1920, 1080));