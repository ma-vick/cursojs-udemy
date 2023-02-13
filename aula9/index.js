const nome = 'Bea'; // string
const nome1 = "Bea"; // string
const nome2 = `Bea`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta para nenhum lugar na memória.
const sobrenomeAluno = null; // nulo -> não aponta para local nenhum na memória.
const aprovado = true; // boolean = true, false (lógico).

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2