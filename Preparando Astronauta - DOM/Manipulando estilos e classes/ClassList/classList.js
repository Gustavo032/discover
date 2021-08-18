// classList

const element = document.querySelector('body')

// adiciona classes
element.classList.add('active', 'green' )

// imprime as classes
console.log(element.classList)

// remove as classes especificadas
element.classList.remove('active')

// remove as classes habilitadas e adiciona as desabilitadas, de acordo com os argumentos
element.classList.toggle('active', 'green')
