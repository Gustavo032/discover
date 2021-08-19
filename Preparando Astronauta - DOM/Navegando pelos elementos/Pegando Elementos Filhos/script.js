// Navegando pelos Elementos
// childNodes e children
const el = document.querySelector('body')

// childNodes - seleciona os filhos levando em conta os espaços vazios
console.log(el.childNodes) // pega todos os filhos em formato de nodelist

// children - seleciona os filhos NÃO levando em conta os espaços vazios
console.log(el.children) // elimina os epaços vazios e monta uma lista em HTMLCollection



// firstChild firstElementChild
console.log(el.firstElementChild) // não considera os espaços vazios(tecla "TAB")

console.log(el.firstChild) // considera os espaços vazios



// lastChild lastElementChild

console.log(el.lastElementChild)
// AMBOS PEGAM O ULTIMO ELEMENTO FILHO
console.log(el.lastChild)