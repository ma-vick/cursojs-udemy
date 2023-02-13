const num = Number(prompt('digite um número:'));
const numeroTitulo = document.getElementById('numeroTitulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num;
texto.innerHTML += `<p>raiz quadrada: ${Math.pow(num, 0.5)}</p>`;
texto.innerHTML += `<p>${num} é inteiro? ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>é NaN? ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>arredondado para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>arredondado para baixo: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>com duas casas decimais: ${num.toFixed(2)}</p>`;