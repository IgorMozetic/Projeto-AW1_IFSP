// Criando uma promise
const promessa = new Promise((resolve, reject) => {
    try {
        resolve(/* função a ser resolvida */)
    } catch (e) {
        reject(e)
    }
})
// Executando uma promise
promessa
    .then((parametros) => console.log(parametros) /* sucesso */)
    .catch((erro) => console.log(erro) /* erro */)