const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
console.log(a3);

// ...spread
const a4 = [...a1, 'Vick', ...a2];
console.log(a4);