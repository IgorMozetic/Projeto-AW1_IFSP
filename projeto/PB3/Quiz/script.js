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
//Criando objeto com questões e respostas
const quizData = [
    {
        questao: 'Quem é o melhor jogador do mundo?',
        a: 'Igor Mozetic',
        b: 'Ronaldinho Gaucho',
        c: 'Gabriel Medina',
        d: 'Guilherme Araujo',
        correta: 'a'
    }, {
        questao: 'Quando pesa um elefante?',
        a: 'Entre 6.000 e 9.000kg',
        b: 'Entre 2.000 e 5.000kg',
        c: 'Entre 4.000 e 7.000kg',
        d: 'Entre 8.000 e 12.000kg',
        correta: 'c'
    }, {
        questao: 'O que é a Via Lactea?',
        a: 'Marca de Leite',
        b: 'Maneira de ser alérgico',
        c: 'Civilização Antiga',
        d: 'Uma Galaxia',
        correta: 'd'
    }, {
        questao: 'Você acha que o adm prefere:',
        a: 'Feijão por cima do Arroz',
        b: 'Feijão por baixo do Arroz',
        c: 'Feijão do lado do Arroz',
        d: 'Arroz sem feijão',
        correta: 'a'
    },
];

//selecionando os seletores do HTML
const quiz = document.querySelector('#quiz')
const resposta_elementos = document.querySelectorAll('.resposta')
const questao = document.querySelector('#questao')
const a_texto = document.querySelector('#a_texto')
const b_texto = document.querySelector('#b_texto')
const c_texto = document.querySelector('#c_texto')
const d_texto = document.querySelector('#d_texto')
const EnviarBotao = document.querySelector('#enviar')

//declaração das variaveis 
let currentQuestao = 0;
let pontos = 0;

//recarregar o quiz
loadQuiz();

//função para recarregar o quiz com a nova questão
function loadQuiz() {
    //deselecionando as opcoes
    deselecionarRepostas();

    //colocando o objeto da questão na variável do currentQuizData
    const currentQuizData = quizData[currentQuestao];

    //Inserindo no HTML a questão com as suas respostas
    questao.innerHTML = currentQuizData.questao;
    a_texto.innerHTML = currentQuizData.a;
    b_texto.innerHTML = currentQuizData.b;
    c_texto.innerHTML = currentQuizData.c;
    d_texto.innerHTML = currentQuizData.d;
}

//funcao para pegar o calor escolhido pelo usuario como resposta
function getSelected() {
    //declarando variavel como undefined
    let resposta = undefined;

    //for each nos elementos checando se tem algum checked, se tiver pega o id
    resposta_elementos.forEach((resposta_elemento) => {
        if (resposta_elemento.checked) {
            resposta = resposta_elemento.id;
        }
    });

    if (!resposta) {
        swal("É necessário selecionar uma alternativa!")
    }

    //retorna undefined ou id do checked
    return resposta
}

//função para deselecioanr a resposta quando atualizar a tela
function deselecionarRepostas() {
    resposta_elementos.forEach((resposta_elemento) => {
        resposta_elemento.checked = false;
    });
}

// Evento de click no botão executa a função
EnviarBotao.addEventListener('click', () => {
    //valor da variável resposta será o reetorno do getselected
    const resposta = getSelected();

    //condição para se tiver resposta
    if (resposta) {
        //condição se a resposta for correta a pontuação aumenta
        if (resposta === quizData[currentQuestao].correta) {
            pontos++;
        }
        //Incremnento na questão atual do quiz
        currentQuestao++;

        //Condição se as perguntas acabarem
        if (currentQuestao < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2 class="modal-recarregar">Parabéns, você respondeu corretamente ${pontos}/${quizData.length} questões.</h2>
                
                <button onclick="location.reload()">Recarregar</button>
            `;
        }
    }
});