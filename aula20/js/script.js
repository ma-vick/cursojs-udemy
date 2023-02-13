function meuEscopo(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');
    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        function criaPessoa(nomePessoa, sobrenomePessoa, pesoPessoa, alturaPessoa){
            return {
                nomePessoa: nome.value,
                sobrenomePessoa: sobrenome.value,
                pesoPessoa: peso.value,
                alturaPessoa: altura.value
            };
        }

        pessoas.push(criaPessoa());
        console.log(pessoas);

        result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value}kg ${altura.value}cm</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();