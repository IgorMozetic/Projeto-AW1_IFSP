let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }
}
// coleta o seletor dos elementos
const addBtn = document.querySelector('#add')
const notepad = document.querySelector('#notepad')
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
function addNovaNota({ titulo, corpo } = { titulo: "", corpo: "" }) {
    // criando um elemento com div e adicionando a classe nota a ela
    const nota = document.createElement("div");
    nota.classList.add("notas");

    //inserindo no HTML
    nota.innerHTML = `
        <div class="notas">
            <div class="ferramentas">
                <input class="titulo" type="text" name="input" maxlength="17">
                <div>
                    <button class="edit"><i class="fas fa-edit"></i></button>
                    <button class="delete"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
            <div class="main ${corpo ? "" : "hidden"}"></div>
            <textarea class="${corpo ? "hidden" : ""}"></textarea>
        </div>
    `;

    // coleta o seletor do botão de editar e deletar
    const editBtn = nota.querySelector(".edit");
    const deleteBtn = nota.querySelector(".delete");

    // coleta o seletor dos elementos main e textarea
    const main = nota.querySelector(".main");
    const textArea = nota.querySelector("textarea");
    const inputTitle = nota.querySelector(".titulo")

    // valor do textarea é a variavel texto
    textArea.value = corpo;
    inputTitle.value = titulo ? titulo : "Sem Título";
    // main.innerHTML = marked(corpo);

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
    // Evento de inputar o título na nota
    inputTitle.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    });

    notepad.appendChild(nota);
}

// Função de atualizar
function updateLS() {
    const divNotas = document.querySelectorAll(".notas");

    const notas = [];

    divNotas.forEach((nota) => {
        if (!notas.includes(nota)) {
            notas.push({
                titulo: nota.querySelector('.titulo').value,
                corpo: nota.querySelector('textarea').value
            });
        }
    });

    localStorage.setItem("notas", JSON.stringify(notas));
}