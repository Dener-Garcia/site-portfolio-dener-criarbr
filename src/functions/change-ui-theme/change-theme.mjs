const ChangeTheme = () => {

const uiTheme = document.querySelectorAll(".ui-options input[name='ui-theme']");

if (localStorage.getItem("ui-theme")) {
  document.documentElement.setAttribute("ui-theme", localStorage.getItem("ui-theme"));
  uiTheme[localStorage.getItem("nr-input")].checked = true
}

function setTheme(themeName, nrInput) {
  document.documentElement.setAttribute("ui-theme", themeName);
  localStorage.setItem("ui-theme", themeName);
  localStorage.setItem("nr-input", nrInput);
}

const btns = document.querySelectorAll("button")
const links = document.querySelectorAll("a")

function addHighLight(element, operation){
  element.forEach((e)=>{
    operation(e.classList)
   })
}

function addClass(className) {
  className.add("highLight");
}

function removeClass(className){
className.remove("highLight");
}

  for (let option of uiTheme) {
    
    option.addEventListener("click", function () {

        let themeName = null;
        let nrInput = null;

      switch (option.value) {

        case "light-theme":
          setTheme((themeName = "light"), (nrInput = 0));
          addHighLight(links, removeClass)
          addHighLight(btns, removeClass)
          break;

        case "dark-theme":
          setTheme((themeName = "dark"), (nrInput = 1));
          addHighLight(links, removeClass)
          addHighLight(btns, removeClass)
          break;
          
        case "high-contrast":
          setTheme((themeName = "high-contrast"), (nrInput = 2));
          addHighLight(links, addClass)
          addHighLight(btns, addClass)
          break;
      }
    });
  }
};

export default ChangeTheme;
