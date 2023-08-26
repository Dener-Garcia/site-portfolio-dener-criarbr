import HighConstrastSelected from "../high-contrast-acessibility/high-contrast-selected.mjs";

const ChangeTheme = () => {

  const uiTheme = document.querySelectorAll(
    ".ui-options input[name='ui-theme']"
  );

  if (localStorage.getItem("ui-theme")) {
    document.documentElement.setAttribute(
      "ui-theme",
      localStorage.getItem("ui-theme")
    );
    uiTheme[localStorage.getItem("nr-input")].checked = true;
  }

  function setTheme(themeName, nrInput) {
    document.documentElement.setAttribute("ui-theme", themeName);
    localStorage.setItem("ui-theme", themeName);
    localStorage.setItem("nr-input", nrInput);
  }

  for (let option of uiTheme) {
    option.addEventListener("click", function () {
      let themeName = null;
      let nrInput = null;

      switch (option.value) {
        case "light-theme":
          setTheme((themeName = "light"), (nrInput = 0));
          HighConstrastSelected()
          break;

        case "dark-theme":
          setTheme((themeName = "dark"), (nrInput = 1));
          HighConstrastSelected()
          break;

        case "high-contrast":
          setTheme((themeName = "high-contrast"), (nrInput = 2));
        HighConstrastSelected()
          break;
      }
    });
  }
};

export default ChangeTheme;
