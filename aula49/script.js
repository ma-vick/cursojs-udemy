// formas de declarar uma função

// declaração de função (função hoisting)
function falaOi(){
    console.log('oii!');
}
falaOi();

// FIRST-CLASS -> object (objetos de primeira classe)
// function expression
const souUmDado = function(){
    console.log('sou um dado.');
}
souUmDado();

function executaFuncao(funcao){
    console.log('vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function.');
}
funcaoArrow();