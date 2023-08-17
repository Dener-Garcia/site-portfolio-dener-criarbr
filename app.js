import Mysvg from "./src/components/illustration-svg/illustration.mjs";

//import MyBtn from "./src/components/web-components/btn-big.mjs";

window.customElements.define("my-svg", Mysvg);

//window.customElements.define('my-btn', MyBtn)
// no html <my-btn ><span slot="texto">Props com slot</span></my-btn>

import Acessibility from "./src/functions/acessibility-menu/acessibility-menu.mjs";

Acessibility();

import ChangeTheme from "./src/functions/change-ui-theme/change-theme.mjs";

ChangeTheme();

import ShowMenu from "./src/functions/mobile-menu/show-menu.mjs";

ShowMenu()

import myForm from "./src/functions/form/custom-form.mjs";

myForm();

import ShowBoxes from "./src/functions/certificate-boxes/show-boxes.mjs";

ShowBoxes();


const olhos2 = document
  .querySelector("my-svg")
  .shadowRoot.querySelector("#olho-esq-dag");



// criando uma async function
const jsonRead = async () => {
  try {
    // atribuindo uma promise await fetch para a variavel data
    const data = await fetch("/public/card-projects.json");

    // console.log("resultado do fetch", data)

    // convertendo resultado do fetch em .json, essa promisse espera o resposta da anterior
    const dataConverted = await data.json();

    //console.log("dados ja convertidos em .json", dataConverted)

    const gridCards = document.querySelector(".grid-projects");

    dataConverted.contentCard.map((singleValues) => {
      //     console.log("conteudo", conteudo)

      const cardValues = singleValues;

      const card = document.createElement("div");
      card.classList.add("card-project");

      const imageCard = document.createElement("img");
      imageCard.src = cardValues.imgLink;
      imageCard.alt = cardValues["alt-img"];
      card.appendChild(imageCard);

      const title = document.createElement("h3");
      title.textContent = cardValues.title;
      card.appendChild(title);

      const textProject = document.createElement("p");
      textProject.textContent = cardValues.description;
      card.appendChild(textProject);

      const btnShowProject = document.createElement("a");
      btnShowProject.classList.add("btn-primary");
      btnShowProject.textContent = "Veja mais";
      btnShowProject.href = cardValues["btn-link"];
      card.appendChild(btnShowProject);

      gridCards.appendChild(card);
    });
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};

jsonRead();

const nameProjectLink = document.querySelectorAll(".cardDiv a")

nameProjectLink.forEach((e)=>{
  let name = e.getAttribute(href)
  console.log(name)
  localStorage.setItem("name-link", name)
})

// // pegando dados de um arquivo .json local, tambem pode usar uma url de api porem com async await

// fetch("/public/card-projects.json")

//     // quando o fetch terminar a requisicao o .then entra em acao para ser executado quando tivermos nossa response que vai gerar o dado que precisamos e nos vamos convertela em .json

//     .then((response) => response.json())

//     // depois que for convertido usamos outro .then para pegar o objeto que queremos do .json ou da api.

//     .then((jsonValues) => {

//         console.log("mostrando o que tem no .json", jsonValues)

//         const cardDiv = document.querySelector(".grid-projects")
//         console.log(cardDiv)

//         // pegando somente o objeto contentCard que esta no json

//         for (let i = 0; i < jsonValues.contentCard.length; i++) {
//             const cardData = jsonValues.contentCard[i];

//             // criando o elemento card que sera uma div

//             const card = document.createElement("div")
//             card.classList.add("card-project")

//             // criando a imagem

//             const img = document.createElement("img")
//             img.src = cardData["img-link"]
//             img.alt = "texto alternativo"
//             card.appendChild(img);

//             // criando title

//             const title = document.createElement("h3")
//             title.textContent = cardData.title
//             card.appendChild(title)

//             // criando texto

//             const description = document.createElement("p")
//             description.textContent = cardData.description;
//             card.appendChild(description)

//             // criando link

//             const btnProjectLink = document.createElement("a")
//             btnProjectLink.classList.add("btn-primary")
//             btnProjectLink.href = cardData['btn-link']
//             btnProjectLink.textContent = "ver projeto"
//             card.appendChild(btnProjectLink);

//             // adiciona o card a div
//             cardDiv.appendChild(card)
//             console.log(card)
//         }

//     })
//     .catch((error) => console.error("Erro na requisição:", error));
