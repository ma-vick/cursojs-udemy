const pContainer = document.querySelector('.pContainer');
const paragraphs = pContainer.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const bgColorBody = stylesBody.backgroundColor;

for (let p of paragraphs){
    p.style.backgroundColor = bgColorBody;
    p.style.color = 'white';
}