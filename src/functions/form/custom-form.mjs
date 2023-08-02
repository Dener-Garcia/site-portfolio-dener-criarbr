const myForm = () => {

    const form = document.querySelector("form")
    const fieldName = document.querySelector("#fieldName")
    const fieldMail = document.querySelector("#fieldMail")
    const fieldMessage = document.querySelector("#fieldMessage")
    const btnSendForm = document.querySelector("form button")


    form.addEventListener("submit", (e) => {
        e.preventDefault()

        checkInput(fieldName)
        checkInput(fieldMail)
        checkInput(fieldMessage)

        if (!checkInput(fieldName)){
            return
        }

        if (!validMail(fieldMail.value)) {
            showError(fieldMail, "Ops! E-mail incorreto. Tente algo como: seu_email@email.com.br")
            return
        }
       
        if (!checkInput(fieldMessage)){
            return
        }


        fetch("https://formsubmit.co/denerag91@gmail.com"", {
            method: "POST",
            body: JSON.stringify({
              userId: 1,
              title: "Fix my bugs",
              completed: false
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          });
          
       


        clearForm([fieldName, fieldMail, fieldMessage])

    })

    function checkInput(input) {
        if (input.value === "") {
            showError(input, "Ops! Você esqueceu de preencher esse campo")
            return false
        } else {
            showError(input, "")
            input.classList.remove("inputInvalidJS")
            input.classList.add("inputValidJS")
            return true
        }
    }

    function validMail(inputValue) {
        const regxMail = new RegExp(
            // pattern: user.123@host12.com.br
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        )

        if (regxMail.test(inputValue)) {
            return true
        }
        return false
    }

    function showError(input, message) {
        const formItem = input.parentElement
        const textMessage = formItem.querySelector("legend")
        textMessage.textContent = message
        input.classList.remove("inputValidJS")
        input.classList.add("inputInvalidJS")
    }

    function clearForm(inputs) {

        setTimeout(() => {

            inputs.forEach((e) => {
                e.classList.remove("inputValidJS")
                e.value = ""
            })
            btnSendForm.textContent = "Mensagem enviada"
            btnSendForm.classList.add("inputValidJS")
            const icon = document.createElement("i")
            icon.classList.add("ph")
            icon.classList.add("ph-check-fat")
            btnSendForm.appendChild(icon)

        }, 1500);
    }
}

export default myForm