// 'if' pode ser usado sozinho
// pode haver vários 'else if' na checagem
// só pode haver um 'else' na checagem

const data = new Date();
const hora = data.getHours();

if (hora >= 0 && hora <= 11){
    console.log('bom dia!');
} else if (hora >= 12 && hora <= 17){
    console.log('boa tarde!');
} else if (hora >= 18 && hora <= 23){
    console.log('boa noite!');
} else {
    console.log('olá!');
}