// função construtura -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    // atributos ou métodos privados
    const ID = 123456;

    const metodoInterno = function(){

    };

    // atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    }
}

const pessoa1 = new Pessoa('Vick', 'Almeida');
const pessoa2 = new Pessoa('Vyn', 'Almeida');

pessoa2.metodo();