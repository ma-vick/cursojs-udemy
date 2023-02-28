const pessoa = {
    nome: 'Vick',
    sobrenome: 'Almeida',
    idade: 16,
    endereco: {
        rua: 'Av Brasil',
        numero: 7
    }
};

const { nome } = pessoa;
console.log(nome);

const { nome: pNome = '', sobrenome } = pessoa;
console.log(pNome, sobrenome);

const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero, endereco);