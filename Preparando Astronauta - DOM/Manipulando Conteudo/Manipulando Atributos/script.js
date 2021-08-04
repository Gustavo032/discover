// manipulando conteudo
// Atributos

const header = document.querySelector('header')
const h1 = document.querySelector('h1')

// adicionando atributo no elemento
header.setAttribute('id', 'header')

// chamando pelo valor do atributo dado
const headerID = document.querySelector('#header')

// pegando o valor do atributo que existe la dentro
console.log(headerID.getAttribute('id'))

// removendo atributo
header.removeAttribute('id')
h1.removeAttribute('id')

// adicionando classes
header.setAttribute('class', 'bg header')