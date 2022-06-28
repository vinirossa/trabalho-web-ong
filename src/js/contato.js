const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const btnEnviar = document.getElementById("btn-enviar");

nomeInput.addEventListener("input", () => {
    validaNome();
});
emailInput.addEventListener("input", () => {
    ValidaEmail();
});
btnEnviar.addEventListener("click", () => {
    validaCampos();
});

function emailValido(email) {
    let valid =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email
        );

    return !valid;
}

function validaNome() {
    if (nomeInput.value.length == 0) {
        nomeInput.classList.add("invalido");
        document.querySelector(".divNome .aviso").style.visibility = "visible";
        return false;
    } else {
        nomeInput.classList.remove("invalido");
        document.querySelector(".divNome .aviso").style.visibility = "hidden";
        return true;
    }
}

function ValidaEmail() {
    if (emailInput.value.length == 0 || emailValido(emailInput.value)) {
        emailInput.classList.add("invalido");
        document.querySelector(".divEmail .aviso").style.visibility = "visible";
        return false;
    } else {
        emailInput.classList.remove("invalido");
        document.querySelector(".divEmail .aviso").style.visibility = "hidden";
        return true;
    }
}

function validaCampos() {
    let nomeValido = validaNome();
    let emailValido = ValidaEmail();
    if (nomeValido && emailValido) alert("Formulário enviado!");
}
