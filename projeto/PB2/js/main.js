const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function () {
    if (window.scrollY >= 360 && window.scrollY <= 2500) {
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
    .label_input, .formulario, .btn, #title
    `,
    { interval: 70 }
)

const nav = document.querySelector('header nav')
const toggle = document.querySelectorAll('div.toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}