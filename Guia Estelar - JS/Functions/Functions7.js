/*
    Function() constructor

    * expressão new - vai antes do objeto
    "isso automaticamente retorna o objeto"
    * criar um novo objeto  
    * this keyword
*/

function Person(name) {
    this.name = name            // fazendo molde com a keyword "this"
}

const Gustavo = new Person("Gustavo")
const Matheus = new Person("Matheus")
console.log(Gustavo)
console.log(Matheus)
