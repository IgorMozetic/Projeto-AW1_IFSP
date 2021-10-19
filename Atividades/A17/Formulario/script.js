const masks = {

    nome(value) {
        return value
            .replace(/\d/g, '')
    },

    TEL(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
    },

    CPF(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    },

    CEP(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    },

    RG(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{1})\d+?$/, '$1')
    },

    email(value) { return value },
    senha(value) { return value },

}

document.querySelectorAll('input').forEach($input => {
    const field = $input.dataset.js

    $input.addEventListener('input', e => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

const btn = document.querySelector("#btn")

btn.addEventListener('click', (event) => {
    event.preventDefault();

    const nome = document.querySelector('#nome')
    const tel = document.querySelector('#TEL')
    const cpf = document.querySelector('#CPF')
    const cep = document.querySelector('#CEP')
    const rg = document.querySelector('#RG')
    const email = document.querySelector('#email')
    const senha = document.querySelector('#senha')

    if (nome.value.length <= 2) {
        nome.classList.add("errorInput")
    } else {
        nome.classList.remove("errorInput")
    }

    if (tel.value == "") {
        tel.classList.add("errorInput")
    } else {
        tel.classList.remove("errorInput")
    }

    if (cpf.value == "") {
        cpf.classList.add("errorInput")
    } else {
        cpf.classList.remove("errorInput")
    }

    if (cep.value == "") {
        cep.classList.add("errorInput")
    } else {
        cep.classList.remove("errorInput")
    }

    if (rg.value == "") {
        rg.classList.add("errorInput")
    } else {
        rg.classList.remove("errorInput")
    }

    if (email.value == "") {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (senha.value.length < 8 || !regex.test(senha.value)) {
        senha.classList.add("errorInput")
    } else {
        senha.classList.remove("errorInput")
    }

})