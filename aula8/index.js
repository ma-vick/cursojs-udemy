const nome = 'Victória';
const sobrenome = 'Almeida';
const idade = 16;
const peso = 56;
const alturaEmM = 1.61;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;

console.log(`${nome + ' ' + sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} m de altura e seu IMC é de ${imc}. ${nome} nasceu em ${anoNascimento}.`);