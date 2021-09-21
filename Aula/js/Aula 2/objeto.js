var pessoa = {
    idade: 17,
    nome: {
        primeiro: 'Igor',
        ultimo: 'Mozetic'
    },
    sexo: 'Masculino',
    interesses: [
        'futebol',
        'programação'
    ],

    saudacao: function () {
        console.log(
            `Bom dia! Eu sou ${pessoa['nome']['primeiro']}`
        )
        return true
    },

    bio: function () {
        console.log(
            `${pessoa.nome.primeiro} tem ${pessoa.idade} anos. ` +
            `Ele gosta de ${this.interesses[0]} e ${this.interesses[1]}.`
        )
        return true
    },
}

pessoa.altura = 1.85

console.log(pessoa.saudacao())
console.log(pessoa)
console.log(pessoa.bio())