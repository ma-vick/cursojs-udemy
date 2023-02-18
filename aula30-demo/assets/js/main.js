const date = new Date();
const dayWeek = date.getDay();
const monthYear = date.getMonth();

function zeroLeft(num){
    return num >= 10 ? num : `0${num}`;
}

function checkDayWeek(dayWeek){
    let dayWeekText;

    switch (dayWeek){
    case 0:
        dayWeekText = 'domingo';
        return dayWeekText;
    case 1:
        dayWeekText = 'segunda-feira';
        return dayWeekText;
    case 2:
        dayWeekText = 'terça-feira';
        return dayWeekText;
    case 3:
        dayWeekText = 'quarta-feira';
        return dayWeekText;
    case 4:
        dayWeekText = 'quinta-feira';
        return dayWeekText;
    case 5:
        dayWeekText = 'sexta-feira';
        return dayWeekText;
    case 6:
        dayWeekText = 'sábado';
        return dayWeekText;
    default:
        dayWeekText = '';
        return dayWeekText;
    }
}

function checkMonth(month){
    let monthText;

    switch (month){
    case 0:
        monthText = 'Janeiro';
        return monthText;
    case 1:
        monthText = 'Fevereiro';
        return monthText;
    case 2:
        monthText = 'Março';
        return monthText;
    case 3:
        monthText = 'Abril';
        return monthText;
    case 4:
        monthText = 'Maio';
        return monthText;
    case 5:
        monthText = 'Junho';
        return monthText;
    case 6:
        monthText = 'Julho';
        return monthText;
    case 7:
        monthText = 'Agosto';
        return monthText;
    case 8:
        monthText = 'Setembro';
        return monthText;
    case 9:
        monthText = 'Outubro';
        return monthText;
    case 10:
        monthText = 'Novembro';
        return monthText;
    case 11:
        monthText = 'Dezembro';
        return monthText;
    }
}

function formatDate(date, monthNumber){
    const day = zeroLeft(date.getDate());
    const month = checkMonth(monthNumber);
    const year = zeroLeft(date.getFullYear());
    const hour = zeroLeft(date.getHours());
    const min = zeroLeft(date.getMinutes()); 

    return `${day} de ${month} de ${year} ${hour}:${min}`;
}

function printOutResult(){
    const card = document.querySelector('.container-card');
    card.innerHTML = `${checkDayWeek(dayWeek)}, ${formatDate(date, monthYear)}`;
}

printOutResult();