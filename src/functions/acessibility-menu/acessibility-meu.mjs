const showMenu = document.querySelector(".settings-ui button")
const acessibilityMenu = document.querySelector(".ui-options")


const Acessibility = () =>{
    showMenu.addEventListener('click', ()=>{
        acessibilityMenu.classList.remove("d-none")
        acessibilityMenu.classList.add("d-grid")

        acessibilityMenu.classList.contains("d-grid")
        console.log("tem a class")
    })

const closedMenu = document.addEventListener("click", (){
    if (acessibilityMenu.classList.contains("d-grid")) {
        acessibilityMenu.classList.remove("d-grid")
    }
})

// const closedMenu = (e)=>{
//     const menuClicked = acessibilityMenu.contains(e.target)
//     if (!menuClicked) {
//         acessibilityMenu.classList.remove("d-grid");
//         acessibilityMenu.classList.add("d-none");
//         document.removeEventListener("click", closedMenu);
// }

}

export default Acessibility


