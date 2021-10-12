// Coletando os identificadores do HTML
const diasElement = document.querySelector("#dias")
const horasElement = document.querySelector("#horas")
const minutosElement = document.querySelector("#minutos")
const segundosElement = document.querySelector("#segundos")

//colocando uma string na variável de ano novo
const AnoNovo = '1 Jan 2022'

//função de countdown
function countdown() {
    //declaração da variável com a data do ano novo e a data do dia de hoje
    const AnoNovoData = new Date(AnoNovo);
    const CurrentDate = new Date();

    //obter o total de segundos
    const total_segundos = (AnoNovoData - CurrentDate) / 1000;

    //obter os dias
    const dias = Math.floor(total_segundos / 3600 / 24);

    //obter os horas
    const horas = Math.floor(total_segundos / 3600) % 24;

    //obter os minutos
    const minutos = Math.floor(total_segundos / 60) % 60;

    //obter os segundos
    const segundos = Math.floor(total_segundos) % 60;

    //exibindo no HTML
    diasElement.innerHTML = dias;
    horasElement.innerHTML = formatTime(horas);
    minutosElement.innerHTML = formatTime(minutos);
    segundosElement.innerHTML = formatTime(segundos);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//primeira chamada
countdown();

//Intervalo de 1 segundo a cada chamada na função countdown
setInterval(countdown, 1000);