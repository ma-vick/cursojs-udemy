const numero = 7;

// se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
//se não faça isso {código}

if (numero <= 10){
    console.log('o número é menor ou igual a 10.');
}

if (numero >= 0 && numero <= 5) {
    console.log('o número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8){
    console.log('o número está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11){    // verdadeira
    console.log('o número está entre 9 e 11.');
} else {
    console.log('o número não está entre 0 e 11.');
}

console.log('...aqui vai o resto do código.');