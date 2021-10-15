// CHAVE DA API
const APIKEY = "3265874a2c77ae4a04bb96236a642d2f";

// SELETOR DE ELEMENTOS NO HTML
const main = document.querySelector("#main");
const form = document.querySelector("#form");
const pesquisa = document.querySelector("#pesquisa");

// FUNÇÃO PARA CRIAÇÃO DA URL 
const url = (cidade) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APIKEY}`;

// FUNÇÃO ASSÍNCRONA BUSCANDO NA URL OS DADOS
async function getClimaPorLocalização(cidade) {
    const resp = await fetch(url(cidade), { origin: "cors" });
    const respData = await resp.json();
    // CONDICAO SE CASO A CIDADE NÃO EXISTA
    if (respData.cod == 404) {
        main.innerHTML = `<p class="erro">Erro, a cidade digitada é inválida! Digite uma cidade válida<p>`;
    }
    addWeatherToPage(respData);
}

// FUNÇÃO PARA ADICIONAR O CLIMA TEMPO NA PÁGINA
function addWeatherToPage(data) {

    const temp = KtoC(data.main.temp);

    // MONTAR O QUE SERÁ IMPUTADO NO HTML
    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <p>O clima em <i>${pesquisa.value}</i> é:</p>
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C </h2>
        <small>${data.weather[0].main}</small>
    `;

    // cleanup
    main.innerHTML = "";

    //IMPUTANDO NO HTML
    main.appendChild(weather);
}

// FUNÇÃO PARA TRANSOFRMAR DE KELVIN PARA CELSIUS 
function KtoC(K) {
    return Math.floor(K - 273.15);
}

// EVENTLISTENER NO SUBMIT DO FORMULÁRIO
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cidade = pesquisa.value;

    if (cidade) {
        getClimaPorLocalização(cidade);
    }
});