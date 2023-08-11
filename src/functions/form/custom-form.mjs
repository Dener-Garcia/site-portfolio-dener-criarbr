const myForm = () => {
  const form = document.querySelector("form");
  const fieldName = document.querySelector("#fieldName");
  const fieldMail = document.querySelector("#fieldMail");
  const fieldMessage = document.querySelector("#fieldMessage");
  const btnSendForm = document.querySelector("form button");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput(fieldName);
    checkInput(fieldMail);
    checkInput(fieldMessage);

    if (!checkInput(fieldName)) {
      return;
    }
    if (!validMail(fieldMail.value)) {
      showError(
        fieldMail,
        "Ops! E-mail incorreto. Tente algo como: seu_email@email.com.br"
      );
      return;
    }
    if (!checkInput(fieldMessage)) {
      return;
    }

    // Crie um objeto FormData e adicione os campos do formulário
    const formData = {
      name: fieldName.value,
      mail: fieldMail.value,
      message: fieldMessage.value,
    };

    fetch("http://localhost:3000/enviar-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Indica que os dados são enviados em formato JSON
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message){
            clearForm([fieldName, fieldMail, fieldMessage]);
            console.info("Resposta do server:", data.message);
        } else{
            feedbackSend(
                "Falha no envio, tente novamente", "ph", "ph-warning-diamond", "inputInvalidJS");
                console.error("Resposta do server:", data.error);
        }        
      })
      .catch((error) => {
        feedbackSend(
          "Falha no envio, tente novamente", "ph", "ph-warning-diamond", "inputInvalidJS");
          console.error("Erro ao enviar dados do formulário:", error);
      });
      
  });

  function checkInput(input) {
    if (input.value === "") {
      showError(input, "Ops! Você esqueceu de preencher esse campo");
      return false;
    } else {
      showError(input, "");
      input.classList.remove("inputInvalidJS");
      input.classList.add("inputValidJS");
      return true;
    }
  }

  function validMail(inputValue) {
    const regxMail = new RegExp(
      // pattern: user.123@host12.com.br
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (regxMail.test(inputValue)) {
      return true;
    }
    return false;
  }

  function showError(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("legend");
    textMessage.textContent = message;
    input.classList.remove("inputValidJS");
    input.classList.add("inputInvalidJS");
  }

  function clearForm(inputs) {
    setTimeout(() => {
      inputs.forEach((e) => {
        e.classList.remove("inputValidJS");
        e.value = "";
      });
      feedbackSend("Mensagem enviada", "ph", "ph-check-fat", "inputValidJS");
    }, 1500);
  }

  function feedbackSend(message, iconStart, iconName, classFeedback) {
    btnSendForm.textContent = message;
    btnSendForm.classList.add(classFeedback);
    const icon = document.createElement("i");
    icon.classList.add(iconStart);
    icon.classList.add(iconName);
    btnSendForm.appendChild(icon);
  }
};

export default myForm;
