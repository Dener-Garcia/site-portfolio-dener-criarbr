class Mysvg extends HTMLElement{
  constructor(){
      super()
      console.log("criei um webcomponente")

      // o attachShadow mode open diz que posso receber alteracoes de fora da shadow dom, se fosse closed nao aceitaria
      this.attachShadow({mode: 'open'})

      //montando meu componente
      this.shadowRoot.innerHTML = `
      
      <style>
      .meuCss{
      background-color: green;
      padding: 10px;
      border: none;
    }
      </style>
      <svg class="meuCss" width="400" height="100">
      <rect width="400" height="100" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" />
    </svg>`
  }
}

export default Mysvg