// incremento e pulando números
for (let i = 500; i >= 400; i -= 10){
    console.log(`linha ${i}`);
}

// par ou ímpar
for (let num = 0; num <= 10; num++){
    const parImpar = num % 2 === 0 ? 'par' : 'ímpar';
    console.log(num, parImpar);
}

// lenght
const frutas = ['kiwi', 'morango', 'uva', 'manga', 'melão'];

for (let ind = 0; ind < frutas.length; ind++){
    console.log(frutas[ind]);
}