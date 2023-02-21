// solução apresentada pelo professor com base na documentação

const title = document.querySelector('.container-card h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

title.innerHTML = data.toLocaleString('pt-BR', opcoes);