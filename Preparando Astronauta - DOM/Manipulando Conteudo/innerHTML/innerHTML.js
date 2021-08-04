// manipulando conteudo
// innerHTML // inner = interno // HTML = html 
// altera o html interno do que vc selecionar

const element = document.querySelector('h1')

element.innerHTML = `
<h1>
    <ul>
        <li>Pão com ovo</li>
        <li>Sla</li>
        <li>SLA MERmAO</li>
        <li>EUSEILA</li>
    </ul>
</h1>

<form>
    <fieldset>
        <legend>Tomar Café?</legend>
        <label for="Yes">sim</label>
        <input type="radio" name="coffee" id="Yes">

        <input checked type="radio" name="coffee" id="No">
        <label for="No">não</label>
        <button>Enviar</button>
    </fieldset>
</form>

`