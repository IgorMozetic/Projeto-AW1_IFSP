// fetch('https://viacep.com.br/ws/01001000/json')
//     .then(resp => console.log(resp.json()))
//     .then(dadosCEP => console.log(dadosCEP))


// fetch('https://viacep.com.br/ws/01001000/json')
//     .then(resp => resp.json())
//     .then(dadosCEP => console.log(dadosCEP))
//     .catch(reject => console.log(reject))


// const inputCEP = document.querySelector('[name="cep"]')
// const inputCity = document.querySelector('[name="city"]')

// inputCEP.addEventListener('blur', event => {
//     fetch('https://viacep.com.br/ws/01001000/json')
//     .then(resp => resp.json())
//     .then(dadosCEP => console.log(dadosCEP))
//     .catch(reject => console.log(reject))
// })


// const inputCEP = document.querySelector('[name="cep"]')
// const inputCity = document.querySelector('[name="city"]')

// inputCEP.addEventListener('blur', event => {
//     let cep = event.target.value;
//     // let cep = inputCEP.value
//     fetch(`https://viacep.com.br/ws/${cep}/json`)
//     .then(resp => resp.json())
//     .then(dadosCEP => console.log(dadosCEP))
//     .catch(reject => console.log(reject))
// })


// const inputCEP = document.querySelector('[name="cep"]')
// const inputCity = document.querySelector('[name="city"]')
// const inputUF = document.querySelector('[name="uf"]')

// inputCEP.addEventListener('blur', event => {
//     let cep = event.target.value;
//     // let cep = inputCEP.value
//     fetch(`https://viacep.com.br/ws/${cep}/json`)
//     .then(resp => resp.json())
//     .then(dadosCEP => {
//         inputCity.value = dadosCEP.localidade
//         inputUF.value = dadosCEP.uf
//         })
//     .catch(reject => console.log(reject))
// })


const btn = document.querySelector('[type="button"]')
const inputCEP = document.querySelector('[name="cep"]')
const inputCity = document.querySelector('[name="city"]')
const inputUF = document.querySelector('[name="uf"]')

btn.addEventListener('click', event => {
    // let cep = event.target.value;
    let cep = inputCEP.value
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(resp => resp.json())
    .then(dadosCEP => {
        inputCity.value = dadosCEP.localidade
        inputUF.value = dadosCEP.uf
        })
    .catch(reject => console.log(reject))
})