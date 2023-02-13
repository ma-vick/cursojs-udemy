num1 = prompt('insira um número para multiplicação:');
num2 = prompt('insira outro número para multiplicação:');
result = num1 * num2;

console.log(Number.isNaN(result) === true);

if(Number.isNaN(result)){
    alert('valor inválido');
} else {
    alert(`o resultado da soma foi ${result}`);
}