const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
    reset: true
})

scrollReveal.reveal(
    `#pag1 .inicio, #pag1 #title, #pag1 #subtitle, .page-logo,
    .title_pags, .texto-imagem, .img_pag_par, .img_pag_impar,
    .texto_par_par, .texto_par_impar, .img_pag_meio, .redes_sociais,
    .rodape,
    .label_input, .formulario, .btn, #title, #lista1
    `,
    { interval: 100 }
)

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}