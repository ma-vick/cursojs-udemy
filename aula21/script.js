/*
- operadores de comparação
    > maior que
    >= maior ou igual
    < menor que
    <= menor ou igual
    == igualdade (valor) *uso não recomendado
    === igualdade estrita (valor e tipo)
    != diferente (valor) *uso não recomendado
    !=== diferente estrito (valor e tipo)
*/

const num1 = 10;
const num2 = '10';

const comp = num1 === num2;
console.log(comp);

const a = 25;
const b = 32;

const comparar = a < b;
console.log(`o número ${a} é maior que o número ${b}: ${comparar}`);