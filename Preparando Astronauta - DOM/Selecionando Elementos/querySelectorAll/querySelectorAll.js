// querySelector()
// Pega TODOS os elementos que atenderem o seletor procurado
const elements = document.querySelector('[src]')
console.log(elements)

// usa a mesma lógica do css para seletor: 
// - .class
// - #id
// - tag
// - [atributo]


// diferença entre htmlcollection e nodelist
elements.forEach(el => {console.log(el)});
// nodelist tem suporte pra usar o .forEach, já o htmlCollection não

