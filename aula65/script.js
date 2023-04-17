// Filter -> sempre retorna um array com a mesma quantidade ou menos.

// retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas que tem mais de 50 anos
// retorne as pessoas cujo nome termine com a

const pessoas = [
    { nome: 'Vick', idade: 16},
    { nome: 'Vyn', idade: 19},
    { nome: 'Theo', idade: 23},
    { nome: 'Tryna', idade: 34},
    { nome: 'Gaia', idade: 67},
    { nome: 'Turin', idade: 79}
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasNomeGrande);

const pessoasMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMaisDeCinquentaAnos);

const nomeTerminaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaA);