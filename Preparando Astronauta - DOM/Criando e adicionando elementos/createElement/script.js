// Criando elementos e inserindo na pagina

// createElement
// cria um elemento na "memória"
const div = document.createElement('div')

div.innerText = "olá devs!"

// insertBefore
const body = document.querySelector('body')

const script = body.querySelector('script')

// adiciona o primeiro argumento antes da tag que você especificar
body.insertBefore(div, script)

// simular o insertAfter

const header = body.querySelector('header')

// inseriu após o elemento header
body.insertBefore(div, header.nextElementSibling)
