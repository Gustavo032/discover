// function hoisting

// function do tipo "declaration" - recebe hoisting

// sayMyName()

// function sayMyName() {
//     console.log('Mayk')
// }


// Function Anonymous /
// Function Expression - não sofre hoisting

sayMyName() // chamando/invocando a function

var sayMyName = function sayMyName() {
    console.log('viu?')
}

