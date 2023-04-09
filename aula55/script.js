// IIFE -> Immediately Invoked Function Expression

(function(idade, peso, altura){
    
    const sobrenome = 'Almeida';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Vick'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(16, 60, 1.61);
