//               -4        -3        -2         -1
//                0         1         2          3
const nomes = ['Steven', 'Garnet', 'Pérola', 'Ametista'];

// nomes.splice(indice, delete, element1, element2, element3, ...);

//pop
const removidosPop = nomes.splice(-1, 1);
console.log(nomes, removidosPop);

//shift
const removidosShift = nomes.splice(0, 1);
console.log(nomes, removidosShift);

//push
nomes.splice(nomes.length, 0, 'Leão');
console.log(nomes);

//unshift
nomes.splice(0, 0, 'Connie', 'Peridot', 'Lapis Lazuli', 'Bismuto');
console.log(nomes);