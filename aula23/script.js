// operador AND
console.log('Vick' && 0 && 'Mary');
console.log('Vick' && true && 'Mary');

function falaOi(){
    return 'oi!';
}

const vaiExecutar = true;
console.log(vaiExecutar && falaOi());

// operador OR
console.log(0 || false || null || 'Vick' || true);

const corUsuario = 'roxo';
const corPadrao = console.log(corUsuario || 'preto');