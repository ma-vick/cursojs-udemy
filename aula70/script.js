const pessoa = {
    nome: 'Vick',
    sobrenome: 'Almeida'
};

const chave = 'sobrenome';
console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = 'Vyn';
pessoa1.sobrenome = 'Almeida';
pessoa1.idade = 16;
pessoa1.falaNome = function(){
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

// factory function | Constructor function | classes
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p2 = criaPessoa('Theo', 'Almeida');
console.log(p2.nomeCompleto());

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p3 = new Pessoa('Turyn', 'Reschee');
const p4 = new Pessoa('Gaia', 'Reschee');

console.log(p3);
console.log(p4);