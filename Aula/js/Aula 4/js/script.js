/* ===== DOM ===== */
/* pegando elemento pelo id */
var element = document.getElementById('exemplo').innerText
document.write(element + "<br>")

/* pegando elemento pela class */
var element2 = document.getElementsByClassName('classe')[0].innerHTML
document.write(element2 + "<br>")

/* pegando elemento pela tag name */
var element3 = document.getElementsByTagName('h2')[0]
/* é possível mudar os atributos */
element3.style.color = 'red'

/* pegando elemento pelo name */
var element4 = document.getElementsByName('nome')[0]
element4.style.background = 'pink'

/* pegando elemento pelo css */
var element5 = document.querySelector('a')
element5.getAttribute('href')
document.write(element5 + "<br>")

/* pegando todos os elementos pelo css */
var element6 = document.querySelectorAll('div').innerHTML

/* pegando pelo elemento pai/filho */
var element7 = document.getElementById('exemplo')
console.log(element7.parentNode)
console.log(element7.childNodes)//texto e elementos HTML
console.log(element7.children)//elementos HTML
/* remove elementos */
element7.remove()

/* adicionar e criando novos elementos */
/* no final do conteudo */
let link = document.createElement('a')
link.href = 'http://www.ifsp.edu.br'
link.innerText = "IFSP"
document.body.append(link)

/* meio do conteúdo */
var element8 = document.getElementById('exemplo')
let hr = document.createElement('hr')
document.body.insertBefore(hr, element8)

/* escrever na página */
document.write('<h2>Olá!</h2>')