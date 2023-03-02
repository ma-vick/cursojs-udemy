// For in - lê os índices (array) ou chaves (objeto)

const frutas = ['kiwi', 'manga', 'morango'];

const pessoa = {
    nome: 'Vick',
    sobrenome: 'Almeida',
    idade: 16
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

for (let index in frutas){
    console.log(frutas[index]);
}