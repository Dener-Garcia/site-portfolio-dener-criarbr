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

const loadProjectByLink = localStorage.getItem("name-link")
let urlProject = ""
console.log("projeto a ser mostrado", loadProjectByLink)

switch (loadProjectByLink) {
   case "pop-cinema":
      console.log(loadProjectByLink, "clicou no pop cinema")
      urlProject = "case-pop-cinema"
      break;

   default:
      break;
}

const url = `/public/assets/projects/${urlProject}.json`
console.log("nossa url ###", url)

const loadCase = async ()=>{
   console.log("dentro da funcao async")
   const data = await fetch(url)
   const contentData = await data.json()
   console.log(contentData)
}

loadCase()