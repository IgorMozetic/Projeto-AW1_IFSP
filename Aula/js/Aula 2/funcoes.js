//hosting (içar)

//função sem parâmetro
nomeFunc()
function nomeFunc() {
    console.log('Olá Mundo!')
}

//função com parâmetro
function quadrada(num = 1) {
    return num * num
}
console.log(quadrada(2))

//função anonima
let q = function (num = 1) {
    return num * num
}
console.log(q(3))

//arrow function
let i = num => num * num
console.log(i(4))

let arrow = () => console.log('Olá Mundo!2')
arrow();

let s = (num1 = 1, num2 = 2) => {
    let soma = num1 + num2
    return soma
}
console.log(s(5, 6))

//funções nativas
//raiz quadrada
var numbers = [1, 4, 9, 16, 25]
const result = numbers.map(function (n) {
    return Math.sqrt(n)
})
console.log(result)

//raiz quadrarda, quadrado
const quadradoeraiz = numbers.map(function (n) {
    var r = {
        raiz: Math.sqrt(n),
        expo: Math.pow(n, 2)
    }
    return r
})
console.log(quadradoeraiz)

//raiz quadrarda, número, quadrado
var m
var g
var e
const quadradoeraiz2 = numbers.map(function (n) {
    m = Math.sqrt(n)
    e = n
    g = Math.pow(n, 2)
    return [m, n, g]
})
console.log(quadradoeraiz2)

//split
//palindromo
var str = '12345'
console.log(str == str.split('').reverse().join('') ? true : false)

var data = new Date()
console.log('Dia: ' + data.getDay())
console.log('Mês: ' + data.getMonth())
console.log('Ano: ' + data.getFullYear())