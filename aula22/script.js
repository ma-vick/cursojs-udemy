/*
- operadores lógicos
    && - AND
    || - OR
    ! - NOT
*/

const expressaoAnd = true && true;
const expressaoOr = true && false;
console.log(expressaoAnd, expressaoOr);

const usuario = 'Vick';
const senha = '12345';

const vaiLogar = usuario === 'Vick' && senha === '12345';
console.log(vaiLogar);