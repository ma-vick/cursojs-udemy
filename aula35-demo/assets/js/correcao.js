const container = document.querySelector('.container');
const div = document.createElement('div');
const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
];

for(let i = 0; i < elementos.length; i++){
    const { tag, texto } = elementos[i];
    const tagCreate = document.createElement(tag);
    tagCreate.innerHTML = texto;
    div.appendChild(tagCreate);
}

container.appendChild(div);