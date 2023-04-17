// Map -> sempre terá o mesmo tamanho do array original.

// dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeroseEmDobro = numeros.map(valor => valor * 2);
console.log(numeroseEmDobro);

/*
    para cada elemento:
        - retorne apenas uma string com o nome da pessoa
        - remova apenas a chave "nome" do objeto
        - adicione uma chave id em cada objeto
*/
const pessoas = [
    { nome: 'Vick', idade: 16},
    { nome: 'Vyn', idade: 19},
    { nome: 'Theo', idade: 23},
    { nome: 'Tryna', idade: 34},
    { nome: 'Gaia', idade: 67},
    { nome: 'Turin', idade: 79}
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }));
const comIds = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice + 1;
    return newObj;
});
console.log(pessoas, nomes, idades, comIds);