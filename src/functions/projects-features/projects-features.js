import Acessibility from "../acessibility-menu/acessibility-menu.mjs";

Acessibility();

import ChangeTheme from "../change-ui-theme/change-theme.mjs";

ChangeTheme()

const btnReturn = document.querySelector(".btn-return")
const mainTitle = document.querySelector("h1")

function fixedMobileMenu(){
   if (mainTitle.getBoundingClientRect().top < -200){
   btnReturn.classList.add(".ps-absolute")
   }
   else{
    btnReturn.classList.remove(".ps-absolute")
   }
}

window.addEventListener("scroll", fixedMobileMenu)

const loadProjectByLink = localStorage.getitem("link-name")

switch (loadProjectByLink) {
   case "pop-cinema":
      console.log(loadProjectByLink, "clicou no pop cinema")
      break;

   default:
      break;
}

async function loadProjectInfo(){
   const data = await fetch(/public/assets/projects/study-cases.json)
data = await data.json()
console.log(data, "resultado await")
}