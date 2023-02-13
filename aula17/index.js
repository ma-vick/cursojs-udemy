function saudacao(nome){
    return `bom dia ${nome}!`;
}

const variavel = saudacao('Vick');
console.log(variavel);

function soma(x, y){
    const result = x + y;
    return result;
}

console.log(soma(5, 10));

const raiz = function (n) {
    return n ** 0.5;
}

// const outraRaiz = (n) => {
//     return n ** 0.5;
// }

const maisUmaRaiz = n => n ** 0.5;

console.log(raiz(16));