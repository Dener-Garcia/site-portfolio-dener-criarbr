const scaleText = () =>{
    const inputScale = document.querySelector("#scale-text")
    inputScale.addEventListener("change", ()=>{
        const bodyHtml = document.querySelectorAll("body > h1, h2, h3, h4, h5, h6, p, label, input, summary, span, button, a, blockquote, i, textarea")
        bodyHtml.forEach((e)=>{
            e.classList.toggle("scaleFont") 
        })
        
    })
}

export default scaleText