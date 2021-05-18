// callback function
// "chamar de volta" 

// função que está passando como parâmetro(valor) pra outra função
function whatIsYourName(name){
    console.log('antes de executar callback')

    name()

    console.log('depois de executar callback')
}

// pode passar qualquer tipo de dado
whatIsYourName( 
    () => {
        console.log('estou em uma callback')
    }
)

// chamei uma função no scopo de fora com uma função no parameter e a executei dentro da função "whatIsYourName"