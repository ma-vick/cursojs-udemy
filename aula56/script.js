// factory function (função fábrica)
// constructor functin (função construtora)

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        altura,
        peso,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}`;
        },

        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }        
    };
}

const pessoa1 = criaPessoa('Vick', 'Almeida', 1.6, 56);
const pessoa2 = criaPessoa('Vyn', 'Almeida', 1.8, 85);
const pessoa3 = criaPessoa('Theo', 'Almeida', 1.75, 73);

console.log(pessoa1.nome, pessoa1.imc);
console.log(pessoa2.nome, pessoa2.imc);
console.log(pessoa3.nome, pessoa3.imc);