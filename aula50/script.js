function funcao(){
    console.log(arguments);
}
funcao('valor', 2, 3, 5, 7);

function soma(a, b = 2, c = 4){
    console.log(a + b + c);
}
soma(2, undefined, 10);

function desestruturacao({ nome, sobrenome, idade }){
    console.log(nome, sobrenome, idade);
}
let obj = {
    nome: 'Vick',
    sobrenome: 'Almeida',
    idade: 16
};
desestruturacao(obj);
desestruturacao({ nome: 'Vyn', sobrenome: 'Odinson', idade: 16});

function soma(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

soma('+', 0, 2, 3, 5);
soma('*', 1, 2, 3, 5);