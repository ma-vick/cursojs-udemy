const container = document.querySelector('.container');
const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
];

for(let i = 0; i < elementos.length; i++){
    const { tag } = elementos[i];
    const { texto } = elementos[i];
    printText(createElement(tag), texto);
}

function printText(element, text){
    element.innerText = text;
}

function createElement(element){
    element = document.createElement(element);
    container.appendChild(element);
    return element;
}