import teste from "./src/components/quadrado.mjs";

const mudaTema = document.querySelector("#darkmode")
  mudaTema.addEventListener("change", function (event) {
    document.documentElement.setAttribute('ui-theme', 'dark');
  });

console.log(teste());
