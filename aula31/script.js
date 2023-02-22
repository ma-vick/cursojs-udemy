const verdadeira = true;

let nome = 'Luiz';  // criando
var nome2 = 'Luiz'; // criando

if (verdadeira){
    let nome = 'Otávio';    // criando
    var nome2 = 'Rogério'; // redeclarando

    if (verdadeira){
        var nome2 = 'Ronaldo'; // redeclarando
        let nome = 'outra coisa';
    }
}

console.log(nome, nome2);