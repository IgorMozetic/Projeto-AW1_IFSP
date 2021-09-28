let array = [1, true, null, 'texto']

array.forEach(element => console.log(element))

let num = [1, 2, 3, 4, 5, 6]

const mapa = num.map(n => n * 2)
console.log(mapa)

const filtro = num.filter(num => num % 2 == 0)
console.log(filtro)

const achar = num.find(num => num === 2)
console.log(achar)

const students = [
    { nome: 'João', idade: 17 },
    { nome: 'John', idade: 20 }
]
const student = students.find(student => student.nome === 'João')
console.log(student)

let redu = num.reduce((previousValue, currentValue) => previousValue + currentValue)
console.log(redu)

const pares_soma = num.filter(num => num % 2 == 0).reduce((previousValue, currentValue) => previousValue * currentValue)
console.log(pares_soma)