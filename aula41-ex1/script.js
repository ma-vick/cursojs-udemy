// escreva uma função que recebe 2 números e retorna o maior deles

// meu código
function checkLargest(a, b){
    if (a > b){
        return a;
    } else {
        return b;
    }
}

console.log(checkLargest(10, 25));

// código do professor
const max = (x, y) => x > y ? x : y;

console.log(max(15, 7));