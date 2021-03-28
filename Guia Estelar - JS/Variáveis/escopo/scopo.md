# Scope

* escope determina a visibilidade de alguma variável no JS


# Block Statement
```js
// vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código 
}// aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`










## Var 
```js
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> Existe x depois do bloco? ', x)
```










## let e const 
```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log('>existe y antes do bloco? ', y) // nao funfa

    {
        console.log(y) // reconhece, mas nao funfa
    let y = 99
        console.log(y) // funfa
    }

console.log('>existe y depois do block ', y) // nao funfa

console.log(y) // nao funfa
let y = 90
console.log(y) // funfa o do global
```