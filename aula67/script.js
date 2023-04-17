// Reduce

// some todos os números (reduce)
// retorne um array com os pares (filter)
// retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaNumeros = numeros.reduce((acumulador, valor) => acumulador += valor);

const numerosPares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

const dobroNumeros = numeros.reduce((acumulador, valor) => { 
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(`soma dos números: ${somaNumeros} \n números pares: ${numerosPares} \n o dobro dos números: ${dobroNumeros}`);

// retorne a pessoa mais velha

const pessoas = [
    { nome: 'Vick', idade: 16},
    { nome: 'Vyn', idade: 19},
    { nome: 'Theo', idade: 23},
    { nome: 'Tryna', idade: 34},
    { nome: 'Gaia', idade: 67},
    { nome: 'Turin', idade: 79}
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);