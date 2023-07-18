const showMenu = document.querySelector(".settings-ui button")
const acessibilityMenu = document.querySelector(".ui-options")


const Acessibility = () =>{
    showMenu.addEventListener('click', (e)=>{
        acessibilityMenu.classList.toggle("d-grid")

        document.onclick = function(e){
            console.log(acessibilityMenu.contains(e.target),showMenu.contains(e.target))
            if (!acessibilityMenu.contains(e.target) && !showMenu.contains(e.target)) {
                acessibilityMenu.classList.remove("d-grid")
            }
        }
    })


}

export default Acessibility


