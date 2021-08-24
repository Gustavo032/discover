// Eventos

const h1 = document.querySelector('h1')

// vai sobrescrever oq fazer nesse envento pro ultimo valor atribuido
h1.onclick = print
h1.onclick = other 


// NÃO irá sobrescrever oq fazer nesse envento pro ultimo valor atribuido
h1.addEventListener('mouseover', print)
h1.addEventListener('mouseover', other)




function print () {
    console.log('print')
}

function other () {
    console.log('outro')
}