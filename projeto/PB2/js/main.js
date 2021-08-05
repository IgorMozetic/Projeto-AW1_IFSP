const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
        // scroll é maior que a altura do header
        backToTopButton.classList.add('show')
    } else {
        // menor que a altura do header
        backToTopButton.classList.remove('show')
    }
})

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 400,
    reset: true
})

scrollReveal.reveal(
    `#pag1 #title, #pag1 #subtitle, .page-logo, .inicio,
    .title_pags, .texto-imagem, .img_pag_par, .texto_par_par,
    .img_pag_meio, .img_pag_impar, .texto_par_impar,
    .label_input, .formulario, .btn, #title, #lista1
    `,
    { interval: 70 }
)

