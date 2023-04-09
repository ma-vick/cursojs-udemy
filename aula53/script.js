// global

function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('vick');
const outraFuncao = retornaFuncao('vyn');
console.log(funcao());
console.log(outraFuncao());