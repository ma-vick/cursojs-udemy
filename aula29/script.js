function checaDiaSemana(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana){
    case 0:
        diaSemanaTexto = 'domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'quinta';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'sábado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}

const data = new Date();
let diaSemana = data.getDay();
const diaSemanaTexto = checaDiaSemana(diaSemana);

console.log(diaSemana, diaSemanaTexto);