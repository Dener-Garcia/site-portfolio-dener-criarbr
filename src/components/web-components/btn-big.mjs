// aqui criei meu componente html que naverdade é um botao com estilos
// na linha 15 tag <slot> seria como uma props ela vem do html e serve para receber valores de la
const componente = document.createElement("template");
componente.innerHTML = `
    <style>
    .minhaclasse{
        width: 50px;
        height: 50px;
        color: black;
        background-color: #ff0;
    }
    </style>

    <button class="minhaclasse">
        <slot name="texto"></slot>
        <span id="contador">8</span>
        </button>
`;

class MyBtn extends HTMLElement {
  constructor() {
    super();

    this.buildMeuCodigo();
  }

  // criei o buildMeuCodigo para escrever meu codigo deixando o constructor responsavel por chamar ele somente
  buildMeuCodigo() {
    // o attachShadow mode open diz que posso receber alteracoes de fora da shadow dom, se fosse closed nao aceitaria somente alteracoes aqui desse arquivo
    this.attachShadow({ mode: "open" });
    // adicionando ao meu shadowRoot meu html personalizado que chamei de componente (o .content eh para pegar somente o componente e nao o template inteiro), o clone serve para isolar meus componentes posso ter 10 botoes que trabalharam de forma independente
    this.shadowRoot.appendChild(componente.content.cloneNode(true));
  }

  // criando logicas, para isso usamos o connectedCallback(), sempre que o elemento MyBtn for adicionado na tela essa funcao sera chamada
  connectedCallback() {
    const button = this.shadowRoot.querySelector("button");
    const contador = this.shadowRoot.getElementById("contador");
    button.addEventListener("click", () => {
      contador.innerText = parseInt(contador.textContent) + 1;
    });
  }
}
export default MyBtn;
