const APIKEY = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.querySelector("#main");
const form = document.querySelector("#form");
const pesquisa = document.querySelector("#pesquisa");

const url = (cidade) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APIKEY}`;

async function getClimaPorLocalização(cidade) {
    const resp = await fetch(url(cidade), { origin: "cors" });
    const respData = await resp.json();
    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <p>O clima em: <i>${pesquisa.value}</i></p>
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C </h2>
        <small>${data.weather[0].main}</small>
    `;

    // cleanup
    main.innerHTML = "";

    main.appendChild(weather);
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cidade = pesquisa.value;

    if (cidade) {
        getClimaPorLocalização(cidade);
    }
});