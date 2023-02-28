// exemplo letras
let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);

// exemplo números
const numeros = [100, 200, 300, 400, 500];
const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);

const nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(nums[1][2]); // primeiro índice: seleciona um dos arrays | segundo índice: seleciona o elemento do array

const [, [, quinto]] = nums;
console.log(quinto);

const [lista1, lista2, lista3] = nums;
console.log(lista2[0]);