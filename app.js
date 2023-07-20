import teste from "./src/components/quadrado.mjs";


import  Mysvg  from "./src/components/illustration-svg/illustration.mjs";

//import MyBtn from "./src/components/web-components/btn-big.mjs";

window.customElements.define('my-svg', Mysvg)

//window.customElements.define('my-btn', MyBtn)
// no html <my-btn ><span slot="texto">Props com slot</span></my-btn>


import Acessibility from "./src/functions/acessibility-menu/acessibility-menu.mjs";

Acessibility()

import ChangeTheme from "./src/functions/change-ui-theme/change-theme.mjs";

ChangeTheme()


import AnimationSvg from "./src/functions/new-folder/inde.mjs";

AnimationSvg()