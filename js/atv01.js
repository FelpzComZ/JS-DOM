function verificador() {
    var campoIdade = document.getElementById("idade");
    var mensagem = document.getElementById("msg");

    campoIdade.addEventListener("input", function () {
    var valor = campoIdade.value

    if (valor === "") {
        mensagem.textContent = "";
        return;
    }
    
    if (valor < 18) {
        mensagem.textContent = "Menor de idade";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Maior de idade";
        mensagem.style.color = "green";
    }
    })
}

verificador()