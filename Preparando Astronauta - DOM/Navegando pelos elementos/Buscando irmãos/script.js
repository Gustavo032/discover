// Navegando pelos Elementos
const el = document.querySelector('header')
const script = document.querySelector('body script')

// nextSibling e nextElementSibling
console.log(el.nextSibling) // pega o próximo irmão mesmo sendo um espaço vazio

console.log(el.nextElementSibling) // pega o próximo ELEMENTo irmão

// previousSibling e previousElementSibling
console.log(script.previousSibling) // pega o irmão anterior mesmo sendo um espaço vazio

console.log(script.previousElementSibling) // pega o irmão anterior que seja um ELEMENTo
