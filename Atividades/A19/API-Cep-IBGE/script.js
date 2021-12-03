const IBGE = document.querySelector(".IBGE");
const CEP = document.querySelector("[name=CEP]");
const dados = document.querySelector(".dados_IBGE");
const title_dados = document.querySelector(".title");
const btn = document.querySelector("#btn");

/* Maneira antiga de buscar o map por array */

// const map = [
//     {
//         nome: 'distritos',
//         nome_exibir: 'Distritos'
//     },
//     {
//         nome: 'mesorregioes',
//         nome_exibir: 'Mesorregiões',
//     },
//     {
//         nome: 'microrregioes',
//         nome_exibir: 'Microrregiões',
//     },
//     {
//         nome: 'municipios',
//         nome_exibir: 'Municípios',
//     },
//     {
//         nome: 'regioes-imediatas',
//         nome_exibir: 'Regiões Imediatas',
//     },
//     {
//         nome: 'regioes-intermediarias',
//         nome_exibir: 'Regiões Intermediárias',
//     }]

/* Maneira nova de buscar o map por objeto */
const map = {
  distritos: "Distritos",
  mesorregioes: "Mesorregiões",
  microrregioes: "Microrregiões",
  municipios: "Municípios",
  "regioes-imediatas": "Regiões Imediatas",
  "regioes-intermediarias": "Regiões Intermediárias",
};

/* ---------------------------------- THEN ---------------------------------- */

btn.addEventListener("click", (event) => {
  fetch(`https://viacep.com.br/ws/${CEP.value.replaceAll("-", "")}/json/`)
    .then((response) => response.json())
    .then((data) => {
      const UF = data.uf;
      const escolha_IBGE = document.querySelector("#select").value;
      if (escolha_IBGE !== "") {
        if (UF !== undefined) {
          dadosIBGE(UF, escolha_IBGE);
        } else {
          throw new Error("Por favor, insira o valor correto para o CEP");
        }
      } else {
        throw new Error(
          "Por favor, selecione uma opção para que a busca seja feita"
        );
      }
    })
    .catch((error) => {
      IBGE.classList.remove("text");
      title_dados.classList.add("display");
      if (error.message == "Failed to fetch") {
        dados.innerHTML = "Por favor, insira o valor correto para o CEP";
      } else {
        dados.innerHTML = error.message;
      }
    });
});

function dadosIBGE(UF, escolha_IBGE) {
  fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/${escolha_IBGE}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const content = data
        .map((eachName) => {
          return `<li class="eachname">${eachName.nome}</li>`;
        })
        .join("");
      // const title = `<h2> ${map.map(e => {
      //     if(e.nome == escolha_IBGE)
      //         return e.nome_exibir
      // }).join('')} de ${UF} </h2>`
      // const title = `<h2> ${map.find(e => e.nome == escolha_IBGE).nome_exibir} de ${UF} </h2>`
      const title = `<h2> ${map[escolha_IBGE]} de ${UF} </h2>`;
      IBGE.classList.add("text");
      title_dados.classList.remove("display");
      title_dados.innerHTML = title;
      dados.innerHTML = content;
    })
    .catch((error) => {
      console.log("deu tudo errado");
    });
}

/* ---------------------------------- ASYNC/AWAIT ---------------------------------- */

// async function cep(CEP) {
//   try {
//     const response = await fetch(
//       `https://viacep.com.br/ws/${CEP.replaceAll("-", "")}/json/`
//     );
//     return response.json();
//   } catch {
//     IBGE.classList.remove("text");
//     title_dados.classList.add("display");
//     dados.innerHTML = `Ocorreu um erro. Insira um valor para o CEP`;
//     throw new Error("erro na API CEP");
//   }
// }

// async function dadosIBGE(UF, escolha_IBGE) {
//   try {
//     const response = await fetch(
//       `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/${escolha_IBGE}`
//     );
//     return response.json();
//   } catch {
//     console.log("deu tudo errado");
//     throw new Error("erro na API IBGE");
//   }
// }

// btn.addEventListener("click", async (event) => {
//   const viacep = await cep(CEP.value);
//   const UF = viacep.uf;
//   const escolha_IBGE = document.querySelector("#select").value;
//   if (escolha_IBGE == "") {
//     IBGE.classList.remove("text");
//     title_dados.classList.add("display");
//     dados.innerHTML = `Por favor, selecione uma opção para que a busca seja feita`;
//     return;
//   }
//   if (UF == undefined) {
//     IBGE.classList.remove("text");
//     title_dados.classList.add("display");
//     dados.innerHTML = `Por favor, insira o valor correto para o CEP`;
//     return;
//   }

//   const IBGE_data = await dadosIBGE(UF, escolha_IBGE);
//   const content = IBGE_data.map((eachName) => {
//     return `<li class="eachname">${eachName.nome}</li>`;
//   }).join("");
//   const title = `<h2> ${map[escolha_IBGE]} de ${UF} </h2>`;
//   IBGE.classList.add("text");
//   title_dados.classList.remove("display");
//   title_dados.innerHTML = title;
//   dados.innerHTML = content;
// });

/* ---------------------------------- MÁSCARA INPUT ---------------------------------- */
const masks = {
  cep(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  },
};

document.querySelectorAll("#cep").forEach(($input) => {
  const field = $input.dataset.js;

  $input.addEventListener(
    "input",
    (e) => {
      e.target.value = masks[field](e.target.value);
    },
    false
  );
});
