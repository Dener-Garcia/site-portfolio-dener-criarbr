import teste from "./src/components/quadrado.mjs";


import  Mysvg  from "./src/components/illustration-svg/illustration.mjs";

//import MyBtn from "./src/components/web-components/btn-big.mjs";

window.customElements.define('my-svg', Mysvg)

//window.customElements.define('my-btn', MyBtn)
// no html <my-btn ><span slot="texto">Props com slot</span></my-btn>

// var checkbox = document.querySelector('#switch');

// const changeThemeLg = () => {
//     document.documentElement.setAttribute("ui-theme", "light");
// }

// const changeThemeDk = () => {
//     document.documentElement.setAttribute("ui-theme", "dark");
// }

// checkbox.addEventListener('change', function() {
//     if(this.checked) {

//         document.documentElement.setAttribute('ui-theme', 'dark')
//     } else {

//         document.documentElement.setAttribute('ui-theme', 'light')
//     }
// })

// const btnChangeTheme = document.querySelector("#change-theme");

// const changeThemeLight = () => {
//   document.documentElement.setAttribute("ui-theme", "light");
//   localStorage.setItem("ui-theme", "light");
// };

// const changeThemeDark = () => {
//   document.documentElement.setAttribute("ui-theme", "dark");
//   localStorage.setItem("ui-theme", "dark");
// };

// if (localStorage.getItem("ui-theme") == "dark") {
//   btnChangeTheme.checked = true;
//   changeThemeDark();
// }

// btnChangeTheme.addEventListener("change", () => {
//   if (!btnChangeTheme.checked) {
//     changeThemeLight();
//   } else {
//     changeThemeDark();
//   }
// });

// const mudaTema = document.querySelector("#darkmode")
//   mudaTema.addEventListener("change", function (event) {
//     document.documentElement.setAttribute('ui-theme', 'dark');
//   });

// console.log(teste());


import Acessibility from "./src/functions/acessibility-menu/acessibility-meu.mjs";

Acessibility()