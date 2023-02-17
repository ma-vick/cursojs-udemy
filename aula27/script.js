// (condição) ? 'valor para true' : 'valor para false';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'lilás';
const corPadrao = corUsuario || 'preto';

console.log(nivelUsuario, corPadrao);