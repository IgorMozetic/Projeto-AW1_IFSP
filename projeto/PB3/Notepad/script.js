const addBtn = document.querySelector('#add')

const notas = JSON.parse(localStorage.getItem("notas"));

if (notas) {
    notas.forEach((nota) => {
        addNovaNota(nota);
    });
}

addBtn.addEventListener("click", () => {
    addNovaNota();
});

function addNovaNota(text = "") {
    const nota = document.createElement("div");
    nota.classList.add("notas");

    nota.innerHTML = `
        <div class="notas">
            <div class="ferramentas">
                <input class="titulo" type="text" name="input" value="Sem Título" maxlength="17">
                <div>
                    <button class="edit"><i class="fas fa-edit"></i></button>
                    <button class="delete"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;

    const editBtn = nota.querySelector(".edit");
    const deleteBtn = nota.querySelector(".delete");

    const main = nota.querySelector(".main");
    const textArea = nota.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = marked(text);

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    deleteBtn.addEventListener("click", () => {
        nota.remove();

        updateLS();
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    });

    document.body.appendChild(nota);
}

function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notas = [];

    notesText.forEach((note) => {
        notas.push(note.value);
    });

    localStorage.setItem("notas", JSON.stringify(notas));
}