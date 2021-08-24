// Criando elementos e inserindo na pagina

// createElement
// cria um elemento na "memória"
const div = document.createElement('div')

div.innerText = "olá devs!"

// append e prepend
const body = document.querySelector('body')

// adiciona alguma coisa DEPOIS
body.append(div)

// adiciona alguma coisa ANTES
body.prepend(div)
