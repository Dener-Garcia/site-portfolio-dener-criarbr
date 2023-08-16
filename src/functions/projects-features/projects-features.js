import Acessibility from "../acessibility-menu/acessibility-menu.mjs";

Acessibility();

import ChangeTheme from "../change-ui-theme/change-theme.mjs";

ChangeTheme()

var testes = window.innerHeight

window.addEventListener("scroll", ()=>{
   const btnReturn = document.querySelector(".btn-return")


   if (testes > 155){
    console.log(btnReturn)
    btnReturn.style.position = "fixed"
    console.log("entrou if")
   }
   else{
    btnReturn.style.position = "relative"
    console.log("saiu do if")
   }

   //  console.log(btnReturn.offsetTop)
  //   console.log(window.pageYOffset)

})
console.log("vendo", testes)
console.log("console")

