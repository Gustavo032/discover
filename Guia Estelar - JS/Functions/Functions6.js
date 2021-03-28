// callback function
// "chamar de volta" 

// função que está passando como parâmetro(valor) pra outra função
function whatIsYourName(name){
    console.log('antes de executar callback')

    name()

    console.log('depois de execuar callback')
}

// pode passar qualquer tipo de dado
whatIsYourName( 
    () => {
        console.log('estou em uma callback')
    }
)

// criei uma função no scopo de fora e executei dentro da função "whatIsYourName"