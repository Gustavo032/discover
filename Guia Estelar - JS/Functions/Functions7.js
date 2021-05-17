/*
    Function() constructor

    * expressão new - vai antes do objeto
    "isso automaticamente retorna o objeto"
    * criar um novo objeto  
    * this keyword
*/

function Person(name, years) {
    this.name = name         
    this.years = years   // fazendo molde com a keyword "this"
}

const Gustavo = new Person("Gustavo", 16)
const Matheus = new Person("Matheus", 19)

console.log(Person)
console.log(Gustavo)
console.log(Matheus)
