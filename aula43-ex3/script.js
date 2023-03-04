/* escreva uma função que recebe um número e retorna o seguinte:
    - número é divisível por 3 = Fizz
    - número é divisível por 5 = Buzz
    - número é divisível por 3 e 5 = FizzBuzz
    - número NÃO é divisível por 3 nem por 5 = retorna o próprio número
    - checar se é realmente um número = retorna o próprio número
    - use a função com números de 0 a 100 (laço de repetição)
*/

function fizzBuzz(num){
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz';
    } else if (num % 3 === 0){
        return 'Fizz';
    } else if (num % 5 === 0){
        return 'Buzz';
    }
    return num;
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}