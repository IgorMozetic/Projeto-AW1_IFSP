// coleta o seletor do botão de adicionar
const addBtn = document.querySelector('#add')

// pega os itens que estão no LocalStorade
const notas = JSON.parse(localStorage.getItem("notas"));

// Condição se existir itens no LocalStorage, da um forEach no objeto e chama a função de adicionar 
if (notas) {
    notas.forEach((nota) => {
        addNovaNota(nota);
    });
}

// Evento de chamar a função adicionar nota quando tiver um clique no botão
addBtn.addEventListener("click", () => {
    addNovaNota();
});

//Função de adicionar nota
function addNovaNota(texto = "") {
    // criando um elemento com div e adicionando a classe nota a ela
    const nota = document.createElement("div");
    nota.classList.add("notas");

    //inserindo no HTML
    nota.innerHTML = `
        <div class="notas">
            <div class="ferramentas">
                <input class="titulo" type="text" name="input" value="Sem Título" maxlength="17">
                <div>
                    <button class="edit"><i class="fas fa-edit"></i></button>
                    <button class="delete"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
            <div class="main ${texto ? "" : "hidden"}"></div>
            <textarea class="${texto ? "hidden" : ""}"></textarea>
        </div>
    `;

    // coleta o seletor do botão de editar e deletar
    const editBtn = nota.querySelector(".edit");
    const deleteBtn = nota.querySelector(".delete");

    // coleta o seletor dos elementos main e textarea
    const main = nota.querySelector(".main");
    const textArea = nota.querySelector("textarea");

    // valor do textarea é a variavel texto
    textArea.value = texto;
    main.innerHTML = marked(texto);

    // Evento de esconder a nota quando tiver um clique no botão de editar
    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    // Evento de removevr a nota quando tiver um clique no botão de delete e editar a página
    deleteBtn.addEventListener("click", () => {
        nota.remove();

        updateLS();
    });

    // Evento de inputar dados na nota
    textArea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    });

    document.body.appendChild(nota);
}

// Função de atualizar
function updateLS() {
    const notasText = document.querySelectorAll("textarea");

    const notas = [];

    notasText.forEach((nota) => {
        notas.push(nota.value);
    });

    localStorage.setItem("notas", JSON.stringify(notas));
}