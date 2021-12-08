const chuckNorrisDOM = document.querySelector(".chuckNorris");
const jokesDOM = document.querySelector(".jokes");
const inputWord = document.querySelector("[name=word]");

inputWord.addEventListener("focusout", (event) => {
  const url =
    "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=";
  axios
    .get(`${url}${inputWord.value}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "x-rapidapi-key": "6060db6b2emshc96fe8a99392e91p10628djsna96785c133fc",
      },
    })
    .then((response) => {
      const jokes = response.data;
      const content = jokes.result
        .map((eachJoke) => {
          eachJoke.value.replaceAll("# ", "");
          return `<li class="eachJoke">${eachJoke.value}</li>`;
        })
        .join("");
      if (content) {
        chuckNorrisDOM.classList.add("text");
        jokesDOM.innerHTML = content;
      } else {
        throw new Error("Sorry, but that word is not in any joke");
      }
    })
    .catch((error) => {
      chuckNorrisDOM.classList.remove("text");
      if (error.message == "Request failed with status code 400") {
        jokesDOM.textContent = "Por favor, digite algo entre 3 até 120 letras";
      } else {
        jokesDOM.textContent = error.message;
      }
    });
});
