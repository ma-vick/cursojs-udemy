// primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

let a = 'A';
let b = a;
console.log(a, b);

a = 'outra coisa';
console.log(a, b);

// referência (mutável) - array, object, function


let c = [1, 2, 3];
let d = [...c];
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

// com spread
// let c = [1, 2, 3];
// let d = [...c];
// console.log(c, d);

// c.push(4);
// console.log(c, d);

// d.pop();
// console.log(c, d);

const pessoa = {
    nome: 'Vick',
    sobrenome:  'Almeida'
};

const mesmaPessoa = pessoa;

pessoa.nome = 'Luana';
console.log(pessoa, mesmaPessoa);

// com spread

const pessoa2 = {
    nome: 'Vick',
    sobrenome:  'Almeida'
};

const mesmaPessoa2 = {...pessoa2};

pessoa2.nome = 'Luana';
console.log(pessoa2, mesmaPessoa2);