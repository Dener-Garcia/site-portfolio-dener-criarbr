
const template = document.createElement('template')
template.innerHTML = `
    <style>
    .minhaclasse{
        width: 50px;
        height: 50px;
        color: black;
    }
    </style>

    <button class="minhaclasse">
        <span id="contador">8</span>
        </button>
`

class MyBtn extends HTMLElement{
    constructor(){

        super()

        console.log("criei um webcomponente")

        this.buildMeuCodigo()

    }
    // criei o buildMeuCodigo para escrever meu codigo deixando o constructor responsavel por chamar ele somente
    buildMeuCodigo(){
                // o attachShadow mode open diz que posso receber alteracoes de fora da shadow dom, se fosse closed nao aceitaria
                this.attachShadow({mode: 'open'})

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback(){
        const button = this.shadowRoot.querySelector('button')
        const contador = this.shadowRoot.getElementById("contador")
        button.addEventListener('click', ()=>{
            contador.innerText = parseInt(contador.textContent )+1
        })
    }
}

export default MyBtn