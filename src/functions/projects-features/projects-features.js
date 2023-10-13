import Acessibility from "../acessibility-menu/acessibility-menu.mjs";
import ReveralUp from "../animations/animation-reveral.mjs";

Acessibility();

import ChangeTheme from "../change-ui-theme/change-theme.mjs";

ChangeTheme()

import scaleText from "../acessibility/scale-text.mjs";

scaleText()

const images = document.querySelectorAll("img")

ReveralUp(images, -300)


const btnReturn = document.querySelector(".btn-return")
const mainTitle = document.querySelector("h1")
const btnToTop = document.querySelector("#btn-to-top")

function fixedMobileMenu(){
   if (mainTitle.getBoundingClientRect().top < -600){
   btnReturn.classList.add("ps-fixed")
   btnToTop.style.display = "flex"
   btnToTop.classList.add("ps-fixed")
   btnToTop.classList.add("btnReturnPosition")
   }
   else{
      btnReturn.classList.remove("ps-fixed")
      btnToTop.style.display = "none"
      btnToTop.classList.remove("btnReturnPosition")
   }
}

window.addEventListener("scroll", fixedMobileMenu)

// const loadProjectByLink = localStorage.getItem("name-link")
// let urlProject = ""
// console.log("projeto a ser mostrado", loadProjectByLink)

// switch (loadProjectByLink) {
//    case "pop-cinema":
//       console.log(loadProjectByLink, "clicou no pop cinema")
//       urlProject = "case-pop-cinema"
//       break;

//    default:
//       break;
// }



