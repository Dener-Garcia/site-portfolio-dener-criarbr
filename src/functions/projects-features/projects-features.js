import Acessibility from "../acessibility-menu/acessibility-menu.mjs";

Acessibility();

import ChangeTheme from "../change-ui-theme/change-theme.mjs";

ChangeTheme()

const btnReturn = document.querySelector(".btn-return")

const mainTitle = document.querySelector("h1")
function fixedMobileMenu(){
   if (mainTitle.getBoundingClientRect().top < -200){
   btnReturn.style.position = "fixed"
   }
   else{
    btnReturn.style.position = ""
   }
}

window.addEventListener("scroll", fixedMobileMenu)

