/*
- novos
    Object.values
    Object.entries
    Object.assign(des, any)
    Object.getOwnPropertyDescriptor(o, 'prop)
    ... (spread)

- já vistos
    Object.keys (retorna as chaves)
    Object.freeze (congela o objeto)
    Object.defineProperty (define uma propriedade)
    Object.defineProperties (define várias propriedades)
*/

// ... (spread)
const produto =  { nome: 'produto', preco: 1.8 };
const caneca = {
    ...produto,
    material: 'porcelana'
};

Object.freeze(caneca);
caneca.nome = 'caneca';
caneca.preco = 2.5;

console.log(produto);
console.log(caneca);

// Object.assign()
const produto2 =  { nome: 'produto2', preco: 2.2 };
const caneca2 = Object.assign({}, produto, { material: 'porcelana' });

caneca2.nome = 'caneca2';
caneca2.preco = 3.3;

console.log(produto2);
console.log(caneca2);

// Object.getOwnPropertyDescriptor
const product =  { nome: 'product', preco: 1.8 };
console.log(Object.getOwnPropertyDescriptor(product, 'nome'));

// Objects.values e Objects.entries
const outro = { nome: 'outro', preco: 1.8 };
console.log(Object.values(outro));

for (let [chave, valor] of Object.entries(outro)){
    console.log(chave, valor);
}