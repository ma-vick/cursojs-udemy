const pessoa1 = {
    nome: 'Vick',
    sobrenome: 'Almeida',
    idade: 16,

    fala(){
        console.log(`${this.nome} diz: 'minha idade atual é ${this.idade} anos.'`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

function criaPessoa(nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa2 = criaPessoa('Sara', 'Ferreira', 26);
const pessoa3 = criaPessoa('Samuel', 'Ferreira', 3);

console.log(`${pessoa2.nome} ${pessoa2.sobrenome} tem ${pessoa2.idade} anos e é mãe de ${pessoa3.nome} ${pessoa3.sobrenome} que tem ${pessoa3.idade} aninhos.`);