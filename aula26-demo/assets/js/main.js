function principal(){
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const btnCalc = document.getElementById('btnCalcular');
    const resultado = document.querySelector('.resultado');

    resultado.style.display = 'none';

    function calculoImc(){
        const resultImc = peso.value / ((altura.value / 100) ** 2);
        let resultCategoria;

        if(resultImc < 18.5){
            resultCategoria = '(abaixo do peso)';
        } else if (resultImc > 18.5 && resultImc <= 24.9){
            resultCategoria = '(peso normal)';
        } else if (resultImc > 25 && resultImc <= 29.9){
            resultCategoria = '(sobrepeso)';
        } else if (resultImc > 30 && resultImc <= 34.9){
            resultCategoria = '(obesidade grau 1)';
        } else if (resultImc > 35 && resultImc <= 39.9){
            resultCategoria = '(obesidade grau 2)';
        } else if (resultImc > 40){
            resultCategoria = '(obesidade grau 3)';
        }

        resultado.innerHTML = `Seu IMC é ${Number(resultImc.toFixed(1))} ${resultCategoria}`;
    }

    btnCalc.addEventListener('click', (evento) => {
        evento.preventDefault();
        resultado.style.display = 'block';

        if(peso.value === ''){
            resultado.innerHTML = 'Peso inválido';
            peso.focus();
            resultado.style.backgroundColor = '#c2a6e5';
        } else if(altura.value === '') {
            resultado.innerHTML = 'Altura inválida';
            altura.focus();
            resultado.style.backgroundColor = '#c2a6e5';
        } else {
            calculoImc();
        }
    })
}

principal();