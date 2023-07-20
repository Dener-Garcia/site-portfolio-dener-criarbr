class Mysvg extends HTMLElement{
  constructor(){
      super()
      console.log("criei um webcomponente")

      // o attachShadow mode open diz que posso receber alteracoes de fora da shadow dom, se fosse closed nao aceitaria
      this.attachShadow({mode: 'open'})

      //montando meu componente
      this.shadowRoot.innerHTML = `
      
      <style>

        @keyframes line-feat {
          0%{
              stroke-dasharray: 1 1000;
          } 
          100%{
              stroke-dasharray: 150 0;
          }
        } 

        .animacao{
          animation: line-feat 0.5s linear 0s forwards;
        }

        @keyframes line-feat3 {
          0%{
            opacity: 0;
              stroke-dasharray: 1 1000;
          } 
          100%{
            opacity: 1;
              stroke-dasharray: 150 0;
          }
        } 

        .animacao-03{
          animation: line-feat3 1s linear 0s forwards;
        }

        @keyframes slow {
          0%{
              stroke-dasharray: 1 80;
          } 
          100%{
              stroke-dasharray: 30 0;
          }
        } 

        .animacao-slow{
          animation: slow 1s linear 0s forwards;
        }

        @keyframes scale-up  {
          0%{
            width: 1px;
            height: 1px;
          } 
          100%{
            width: 52.3118px;
            height: 38.6732px;
          }
        } 

        .scale-up{
          animation: scale-up 0.3s linear 0s forwards;
        }


    



        .animacao-05{
          animation: line-feat 5s linear 0s forwards;
        }

        .color-stroke{
          stroke: var(--bg-constrast-light);
        }

        .color-fill{
          fill: var(--bg-constrast-light);
        }

      </style>
      
      <svg width="784" height="485" viewBox="0 0 784 485" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="animation">
      <path id="line-me-to-center" class="animacao color-stroke" d="M372.786 227.641L372.786 386.757" stroke-width="4"/>
      <path id="line-center" class="animacao color-stroke" d="M262.92 386.757L520.537 386.757" stroke-width="4"/>
        <g id="codevs-dag" class="color-stroke">

        <rect id="frame-vscode" class="animacao-05 color-stroke" x="521.264" y="292.015" width="259.193" height="189.485" rx="10" stroke="#0F0F0F" stroke-width="6"/>

        <path id="line-code-2" class="animacao-05 color-stroke" d="M520.158 328.794H781.184" stroke="#0F0F0F" stroke-width="4"/>

        <path id="line-code-1" class="animacao-05 color-stroke" d="M520.158 474.65H781.184" stroke="#0F0F0F" stroke-width="4"/>

        <circle id="btn-code/1" class="animacao-05 color-stroke" cx="540.615" cy="310.609" r="5.9558" stroke="#0F0F0F" stroke-width="4"/>

        <circle id="btn-code/2" class="animacao-05 color-stroke" cx="561.831" cy="310.609" r="5.9558" stroke="#0F0F0F" stroke-width="4"/>

        <circle id="btn-code/3" class="animacao-05 color-stroke" cx="583.047" cy="310.609" r="5.9558" stroke="#0F0F0F" stroke-width="4"/>

        <path id="code-1-dag" class="animacao-05 color-stroke" d="M568.159 402.153L598.505 372.691C600.857 370.407 604.608 370.434 606.927 372.753L610.627 376.453C612.97 378.796 612.97 382.595 610.627 384.938L593.351 402.215C591.007 404.558 591.007 408.357 593.351 410.7L610.627 427.976C612.97 430.32 612.97 434.119 610.627 436.462L606.927 440.162C604.608 442.48 600.857 442.508 598.505 440.224L568.159 410.762C565.732 408.406 565.732 404.509 568.159 402.153Z" stroke="#0F0F0F" stroke-width="12" stroke-linejoin="round"/>

        <path id="code-2-dag" class="color-stroke" d="M731.667 402.153L701.321 372.691C698.969 370.407 695.218 370.434 692.899 372.753L689.199 376.453C686.856 378.796 686.856 382.595 689.199 384.938L706.476 402.215C708.819 404.558 708.819 408.357 706.476 410.7L689.199 427.976C686.856 430.32 686.856 434.119 689.199 436.462L692.899 440.162C695.218 442.48 698.969 442.508 701.321 440.224L731.667 410.762C734.094 408.406 734.094 404.509 731.667 402.153Z" stroke="#0F0F0F" stroke-width="12" stroke-linejoin="round"/>

        <rect id="code-3-dag" class="color-stroke color-fill" x="664.199" y="355.39" width="17.427" height="98.0391" rx="4" transform="rotate(25.2143 664.199 355.39)" fill="#0F0F0F"/>
        </g>
      <g id="eu-dag">

      <path id="mesa-dag" class="animacao-03 color-stroke" d="M387.182 205.668H282.62M521.294 228.399H253.828V205.668H259.889" stroke-width="4"/>
      <g id="computador-dag">

      <rect id="Rectangle 5" class="color-stroke" x="287.894" y="115.472" width="106.139" height="78.1042" rx="10" stroke-width="6"/>
      <g id="figma-dag">

      <rect id="frame-dag" class="scale-up color-stroke" x="314.428" y="136.702" width="52.3118" height="38.6732" stroke="#0F0F0F" stroke-width="3"/>

      <rect id="Rectangle 8" class="animacao-03 color-stroke" x="318.974" y="142.764" width="42.4617" height="8.36543" rx="4.18271" stroke="#0F0F0F" stroke-width="3"/>

      <rect id="Rectangle 9" class="animacao-03 color-stroke" x="318.474" y="156.66" width="23.7616" height="4.81926" rx="2.40963" stroke="#0F0F0F" stroke-width="2"/>

      <rect id="Rectangle 10" class="animacao-03 color-stroke" x="318.474" y="164.995" width="23.7616" height="4.81926" rx="2.40963" stroke="#0F0F0F" stroke-width="2"/>

      </g>
      <g id="Group 1" class="color-stroke color-fill">
      <rect id="Rectangle 6" x="329.598" y="196.576" width="22.7309" height="23.4886" />
      <ellipse id="Ellipse 7" cx="340.963" cy="215.897" rx="23.4886" ry="7.9558" />
      </g>

      <path id="Vector 7" class="animacao-03 color-stroke color-fill" d="M309.14 116.26V193.924" stroke="#0F0F0F" stroke-width="4"/>
      <path id="Vector 8" class="animacao-03 color-stroke color-fill" d="M372.786 117.018V194.682" stroke="#0F0F0F" stroke-width="4"/>
      </g>

      <g id="smartphone-dag">
      <rect id="Line" class="color-stroke" x="258.859" y="183.422" width="21.7616" height="33.8848" rx="2" stroke="#0F0F0F" stroke-width="4"/>
      <line id="Line 1" class="animacao-slow color-stroke" x1="261.405" y1="194.06" x2="278.074" y2="194.06" stroke="#0F0F0F" stroke-width="2"/>
      <line id="Line 6" class="animacao-slow color-stroke" x1="261.405" y1="190.272" x2="278.074" y2="190.272" stroke="#0F0F0F" stroke-width="2"/>
      <line id="Line 7" class="animacao-slow color-stroke" x1="261.405" y1="186.483" x2="278.074" y2="186.483" stroke="#0F0F0F" stroke-width="2"/>
      <line id="Line 2" class="animacao-slow color-stroke" x1="261.405" y1="197.091" x2="268.224" y2="197.091" stroke="#0F0F0F" stroke-width="2"/>
      <line id="Line 3" class="animacao-slow color-stroke" x1="261.405" y1="200.122" x2="271.255" y2="200.122" stroke="#0F0F0F" stroke-width="2"/>
      <line id="Line 4" class="animacao-slow color-stroke" x1="261.405" y1="203.153" x2="265.951" y2="203.153" stroke="#0F0F0F" stroke-width="2"/>
      <line id="Line 5" class="animacao-slow color-stroke" x1="261.405" y1="206.184" x2="274.286" y2="206.184" stroke="#0F0F0F" stroke-width="2"/>
      <path id="Line 8" class="animacao-slow color-stroke" d="M265.193 212.487H274.286" stroke="#0F0F0F" stroke-width="3" stroke-linecap="round"/>
      </g>

      <g id="dag">
      <path id="Vector 9" class="color-stroke" d="M381.878 228.02C384.152 210.088 396.505 172.701 417.111 157.933C425.774 151.725 434.748 147.798 442.494 146.568M517.885 228.399C507.883 187.786 489.471 165.763 481.515 159.828C472.211 153.386 462.473 148.384 454.617 146.568" stroke="#0F0F0F" stroke-width="6"/>

      <path id="Vector 13" class="color-stroke" d="M456.132 146.568L456.89 133.687" stroke="#0F0F0F" stroke-width="4"/>
      <path id="Vector 23" class="color-stroke" d="M440.979 146.568L440.221 133.687" stroke="#0F0F0F" stroke-width="4"/>

      <path id="Vector 14" class="color-stroke" d="M413.701 115.502L406.125 85.9522V67.7675C406.125 67.7675 413.701 47.3098 424.688 49.204C435.675 51.0982 431.886 56.4021 449.692 56.4021C467.498 56.4021 470.907 49.204 481.136 54.5079C491.365 59.8118 490.608 85.9522 490.608 85.9522L483.788 115.502C480 121.185 468.937 129.141 461.057 132.172C451.207 135.96 449.692 136.891 431.886 130.277C421.278 126.337 415.343 118.786 413.701 115.502Z" stroke="#0F0F0F" stroke-width="4"/>

      <path id="Vector 10" class="color-stroke" d="M407.261 199.607V228.399" stroke="#0F0F0F" stroke-width="4"/>
      <path id="Vector 11" class="color-stroke" d="M490.229 199.607V228.399" stroke="#0F0F0F" stroke-width="4"/>

      <rect id="Rectangle 14" class="color-fill" x="385.086" y="208.853" width="24.6023" height="7.57695" transform="rotate(13.9972 385.086 208.853)" fill="#0F0F0F"/>

      <rect id="Rectangle 15" class="color-fill" width="24.6023" height="7.57695" transform="matrix(-0.970307 0.241875 0.241875 0.970307 513.343 208.853)" fill="#0F0F0F"/>

      <path id="Rectangle 16" class="color-fill" d="M464.205 150.685L442.352 172.325L448.758 178.793L473.409 153.93L464.205 150.685Z" fill="#0F0F0F"/>

      <path id="Rectangle 17" class="color-fill" d="M433.106 150.489L455.157 172.325L448.751 178.793L423.842 153.314L433.106 150.489Z" fill="#0F0F0F"/>

      <circle id="Ellipse 8" class="color-fill" cx="448.177" cy="200.743" r="16.2904" fill="#0F0F0F"/>

      <path id="Vector 16" class="color-stroke" d="M425.067 70.4195C429.613 67.0099 433.36 68.1464 435.675 68.1464" stroke="#0F0F0F" stroke-width="4"/>

      <path id="Vector 17" class="color-stroke" d="M472.802 70.4195C468.256 67.0099 464.509 68.1464 462.194 68.1464" stroke="#0F0F0F" stroke-width="4"/>

      <path id="Vector 20" class="color-stroke" d="M443.252 111.529C449.622 112.853 453.531 110.233 456.185 109.275" stroke="#0F0F0F" stroke-width="4"/>

      <path id="Vector 18" class="color-stroke" d="M406.124 85.5734C403.22 86.5837 397.487 91.635 399.305 97.6965C401.578 105.273 410.292 108.304 411.428 108.683" stroke="#0F0F0F" stroke-width="4"/>

      <path id="Vector 19" class="color-stroke" d="M490.987 85.5734C493.892 86.5837 499.624 91.635 497.806 97.6965C495.533 105.273 487.577 107.925 486.441 108.304" stroke="#0F0F0F" stroke-width="4"/>

      <path id="Vector 24" class="color-stroke color-fill" d="M399.222 64.7368C398.862 72.396 401.496 81.9112 404.149 85.9523L406.802 85.6155V67.0099C408.344 61.8323 413.322 51.3256 420.899 50.7194C430.371 49.9617 431.507 54.129 439.084 54.8867C446.661 55.6444 453.48 56.0233 464.846 52.2348C476.211 48.4463 484.21 53.3714 487.577 61.706C490.27 68.3737 490.943 79.5259 490.943 84.2685L494.733 85.9523C497.134 71.2474 499.736 41.8376 490.943 41.8376C479.952 41.8376 481.519 30.6826 473.559 24.9578C465.6 19.233 460.678 13.9712 460.678 13.9712C460.678 13.9712 462.837 30.0512 458.727 31.3982C454.617 32.7452 448.176 15.8654 448.176 15.8654L444.388 4.5L437.948 10.9404C433.902 18.6951 439.086 21.5061 434.159 27.2309C429.232 32.9557 425.824 16.6231 425.824 16.6231C423.045 23.8072 414.234 38.3353 408.776 41.8376C401.954 46.2153 399.684 54.8867 399.222 64.7368Z" fill="#0F0F0F" stroke="#0F0F0F" stroke-width="4"/>

      <ellipse id="olho-dir-dag" class="color-fill" cx="465.604" cy="84.8157" rx="3.40963" ry="3.40963" fill="#0F0F0F"/>

      <ellipse id="olho-esq-dag" class="color-fill" cx="432.265" cy="84.8157" rx="3.40963" ry="3.40963" fill="#0F0F0F"/>

      <g id="Oculos">
      <rect id="Rectangle 18" class="color-stroke" x="417.475" y="74.5714" width="23.5193" height="20.4886" stroke="#0F0F0F" stroke-width="3"/>

      <rect id="Rectangle 19" class="color-stroke" x="456.875" y="74.5714" width="23.5193" height="20.4886" stroke="#0F0F0F" stroke-width="3"/>

      <path id="Vector 15" class="color-stroke" d="M440.979 84.4369C443.868 84.4369 446.106 82.1638 448.361 82.1638C450.494 82.1638 452.643 84.4369 455.375 84.4369" stroke="#0F0F0F" stroke-width="4"/>
      </g>
      </g>
      </g>

      <g id="design-dag">
      <rect id="tela-design-dag" class="animacao-05 color-stroke" x="3" y="292.015" width="259.193" height="189.485" rx="10" stroke="#0F0F0F" stroke-width="6"/>

      <path id="line-designe2" class="animacao-05 color-stroke" d="M1.89429 328.794H262.92" stroke="#0F0F0F" stroke-width="4"/>

      <path id="line-design1" class="animacao-05 color-stroke" d="M1.89429 474.65H262.92" stroke="#0F0F0F" stroke-width="4"/>

      <circle id="btn-design1" class="animacao-05 color-stroke" cx="22.352" cy="310.609" r="5.9558" stroke="#0F0F0F" stroke-width="4"/>

      <circle id="btn-design1_2" class="animacao-05 color-stroke" cx="43.5674" cy="310.609" r="5.9558" stroke="#0F0F0F" stroke-width="4"/>

      <circle id="btn-design1_3" class="animacao-05 color-stroke" cx="64.783" cy="310.609" r="5.9558" stroke="#0F0F0F" stroke-width="4"/>

      <path id="pen-dag" class="animacao-fill color-stroke color-fill" d="M140.349 378.634L161.109 357.87C161.8 357.179 162.619 356.632 163.521 356.258C164.423 355.884 165.39 355.692 166.367 355.692C167.343 355.692 168.31 355.884 169.212 356.258C170.114 356.632 170.934 357.179 171.624 357.87L228.918 415.169C229.611 415.856 230.161 416.675 230.535 417.577C230.909 418.479 231.1 419.447 231.097 420.424V441.188C231.097 443.16 230.314 445.051 228.92 446.445C227.526 447.839 225.635 448.622 223.663 448.622H202.898C201.922 448.625 200.954 448.434 200.052 448.06C199.15 447.686 198.331 447.136 197.643 446.443L140.349 389.149C139.659 388.459 139.111 387.639 138.737 386.737C138.364 385.835 138.171 384.868 138.171 383.892C138.171 382.915 138.364 381.948 138.737 381.046C139.111 380.144 139.659 379.325 140.349 378.634ZM222.125 418.886L182.775 379.536L175.02 387.29L214.37 426.636L222.125 418.886ZM223.663 427.858L210.333 441.188H223.663V427.858ZM201.361 439.65L209.115 431.895L169.765 392.545L162.011 400.3L201.361 439.65ZM156.756 395.045L177.52 374.281L166.369 363.129L145.604 383.889L156.756 395.045Z" fill="#0F0F0F"/>

      <path id="brush-dag" class="animacao-05-fill color-stroke color-fill" d="M138.171 359.409C138.171 358.423 137.779 357.478 137.082 356.781C136.385 356.083 135.44 355.692 134.454 355.692C113.973 355.692 92.9575 378.789 81.2859 394.085C77.1175 392.808 72.7078 392.527 68.411 393.263C64.1143 394 60.0501 395.734 56.5451 398.327C53.0401 400.919 50.1919 404.297 48.2292 408.19C46.2666 412.082 45.2442 416.381 45.2442 420.741C45.2442 435.089 36.1652 441.524 35.7331 441.821C35.0738 442.266 34.5746 442.911 34.3092 443.661C34.0437 444.411 34.0259 445.227 34.2584 445.988C34.4909 446.749 34.9614 447.415 35.6007 447.888C36.24 448.362 37.0144 448.618 37.81 448.619H73.1222C77.4817 448.619 81.7805 447.596 85.6732 445.634C89.5658 443.671 92.944 440.823 95.5363 437.318C98.1286 433.813 99.8627 429.749 100.599 425.452C101.336 421.155 101.055 416.745 99.7783 412.577C115.079 400.905 138.171 379.89 138.171 359.409ZM73.1222 441.185H46.4662C49.6025 436.729 52.6783 429.996 52.6783 420.741C52.6783 416.697 53.8774 412.745 56.1238 409.383C58.3702 406.021 61.5631 403.4 65.2987 401.853C69.0343 400.306 73.1449 399.901 77.1107 400.69C81.0764 401.478 84.7191 403.425 87.5783 406.285C90.4374 409.144 92.3845 412.786 93.1733 416.752C93.9622 420.718 93.5573 424.829 92.01 428.564C90.4626 432.3 87.8423 435.493 84.4803 437.739C81.1183 439.986 77.1657 441.185 73.1222 441.185ZM88.1857 397.3C89.7778 395.237 91.3406 393.293 92.8739 391.469C96.6268 394.004 99.8587 397.236 102.394 400.989C100.567 402.519 98.6229 404.082 96.5631 405.677C94.397 402.322 91.5412 399.466 88.1857 397.3ZM108.026 396.055C105.219 392.095 101.763 388.639 97.8036 385.833C112.57 369.789 123.707 364.924 130.282 363.572C128.957 370.151 124.069 381.289 108.026 396.055Z" fill="#0F0F0F"/>
      </g>
      </g>
      </svg>

    `
  }
}

export default Mysvg