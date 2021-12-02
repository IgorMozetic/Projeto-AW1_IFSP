const chuckNorrisDOM = document.querySelector(".chuckNorris");
const jokesDOM = document.querySelector(".jokes");
const inputWord = document.querySelector("[name=word]");

inputWord.addEventListener("focusout", (event) => {
  fetch(
    `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=${inputWord.value}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "x-rapidapi-key": "6060db6b2emshc96fe8a99392e91p10628djsna96785c133fc",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((jokes) => {
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
      jokesDOM.innerHTML = `Sorry, but that word is not in any joke`;
    });
});
