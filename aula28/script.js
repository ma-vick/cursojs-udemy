function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019, 3) // A, M, D, h, m, s, ms

// const data = new Date(1676680569172);
// console.log('dia', data.getDate());
// console.log('mês', data.getMonth() + 1); // mês começa do zero
// console.log('ano', data.getFullYear());
// console.log('hora', data.getHours());
// console.log('minuto', data.getMinutes());
// console.log('segundos', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('dia da semana', data.getDay()); // 0 - domingo, 6 - sábado
// console.log(data.toString());
// // console.log(Date.now());