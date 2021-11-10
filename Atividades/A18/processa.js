//callback > promisse > async/await
const fs = require('fs')
console.log(1)

// CALLBACK
// function callback(err, contents) {
//         console.log(err, String(contents))
// }

// const callback = (err, contents) => {
//         console.log(err, String(contents))
// }

// fs.readFile('./in1.txt', callback)

// fs.readFile('./in1.txt', (err, contents) => {
//     console.log(err, String(contents))
// })

// fs.readFile('./in1.txt', (err, contents) => {
//     fs.readFile('./in2.txt', (err2, contents2) => {
//         console.log(err, String(contents))
//         console.log(err2, String(contents2))
//     })
// })

// fs.readFile('./in1.txt', (err, contents) => {
//     console.log(4)
//     fs.readFile('./in2.txt', (err2, contents2) => {
//         console.log(err, String(contents))
//         console.log(err2, String(contents2))
//     })
// })

// -------------------------------------------------------------------------------

// PROMISSES
// const readFile = file => new Promise((resolve,reject) =>{
//     fs.readFile(file, (err, contents) =>{
//         if(err){
//             reject(err)
//         } else {
//             resolve(contents)
//         }
//     })
// })

// readFile('./in1.txt')
//   .then(contents => {
//     console.log(null, String(contents))
//     return readFile('./in2.txt')
//   })
//   .then( contents => {
//     console.log(null, String(contents))
//   })

// const promessa = readFile('./in1.txt')
// console.log(promessa) //promessa fica pending
//   .then(contents => {
//     console.log(null, String(contents))
//     return readFile('./in2.txt')
//   })
//   .then( contents => {
//     console.log(null, String(contents))
//   })

// const promessa = readFile('./in1.txt')
//   .then(contents => {
//     console.log(null, String(contents))
//     return readFile('./in2.txt')
//   })
//   .then( contents => {
//     console.log(null, String(contents))
//     console.log(promessa)
//   })
//   .finally(() => {
//       console.log(promessa)
//   })

// const promessa = readFile('./in1.txt')
//   .then(contents => {
//     console.log(null, String(contents))
//     return readFile('./in2.txt')
//   })
//   .then( contents => {
//     console.log(null, String(contents))
//     console.log(promessa)
//   })

// setTimeout(() => console.log(promessa), 1000)

// -------------------------------------------------------------------------------

// async/await - açucar sintático em cima da promise

// const init = async() => {
//     const contents = await readFile('./in1.txt')
//     const contents2 = await readFile('./in2.txt')
//     console.log(String(contents))
//     console.log(String(contents2))
// }

// console.log('init', init())

// const init = async() => {
//     try {
//         const contents = await readFile('./in1.txt')
//         const contents2 = await readFile('./in22.txt')
//         console.log(String(contents))
//         console.log(String(contents2))
//     } catch(err) {
//         console.log(err)
//     }   
// }

// console.log('init', init())

// const init = async() => {
//     try {
//         const contents = await readFile('./in1.txt')
//         const contents2 = await readFile('./in2.txt')
//         return String(contents) + " juntos " + String(contents2)
//     } catch(err) {
//         console.log(err)
//     }   
// }
// init()
//   .then(contents => console.log(contents))

console.log(2)
console.log(3)