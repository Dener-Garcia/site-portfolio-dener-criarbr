import teste from "./src/components/quadrado.mjs";


import Mysvg from "./src/components/illustration-svg/illustration.mjs";

//import MyBtn from "./src/components/web-components/btn-big.mjs";

window.customElements.define('my-svg', Mysvg)

//window.customElements.define('my-btn', MyBtn)
// no html <my-btn ><span slot="texto">Props com slot</span></my-btn>


import Acessibility from "./src/functions/acessibility-menu/acessibility-menu.mjs";

Acessibility()

import ChangeTheme from "./src/functions/change-ui-theme/change-theme.mjs";

ChangeTheme()

const olhos = document.querySelector("my-svg").shadowRoot.querySelector("#olho-esq-dag")

console.log(olhos, "peguei")

document.addEventListener("click", ()=>{
    olhos.classList.toggle("anime")
})

const accordions = document.querySelectorAll(".certificate-box")
const details = document.querySelectorAll(".certificate-box details")

accordions.forEach(e => {
    e.addEventListener("click", ()=>{
        console.log("abriu")
        details.setAttribute("closed", "open")
    })
});

const cardDiv = document.querySelectorAll(".card-project")

// pegando dados de um arquivo .json tambem pode usar uma url de api
    fetch("/public/card-projects.json")

    // quando o fetch terminar a requisicao o .then entra em acao para ser executado quando tivermos nossa response que vai gerar o dado que precisamos e nos vamos convertela em .json

    .then((response) => response.json())

    // depois que for convertido usamos outro .then para pegar o objeto que queremos do .json ou da api por exemplo.
    
    .then((jsonValues) => {

        // repare que antes do .map inserimos o mesmo nome do objeto que queremos do nosso .json

        jsonValues.contentCard.map((cardValues)=>{

        console.log(cardValues)
        cardDiv.innerHTML += cardValues.title

            // populando o card do hmtl com os dados do .json

      })
    })
    .catch((error) => console.error("Erro na requisição:", error));
