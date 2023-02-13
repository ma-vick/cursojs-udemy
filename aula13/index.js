let umaString = 'o rato roeu a roupa do rei de roma.';

console.log(umaString);
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('o', 3));

console.log(umaString.replace(/r/g, '#'));

console.log(umaString.length);

console.log(umaString.slice(2, 6));
console.log(umaString.slice(-5, -1));

console.log(umaString.substring(umaString.length - 5, umaString.length - 1));

console.log(umaString.split(' ', 2));