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

function validaNome() {
    if (nomeInput.value.length == 0) {
        nomeInput.classList.add("invalido");
        document.querySelector(".divNome .aviso").style.visibility = "visible";
    } else {
        nomeInput.classList.remove("invalido");
        document.querySelector(".divNome .aviso").style.visibility = "hidden";
    }
}

function ValidaEmail() {
    if (emailInput.value.length == 0) {
        emailInput.classList.add("invalido");
        document.querySelector(".divEmail .aviso").style.visibility = "visible";
    } else {
        emailInput.classList.remove("invalido");
        document.querySelector(".divEmail .aviso").style.visibility = "hidden";
    }
}

function validaCampos() {
    validaNome();
    ValidaEmail();
}
