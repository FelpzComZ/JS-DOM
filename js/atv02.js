function luzes() {
    var vermelha = document.getElementById("luz1");
    var amarela = document.getElementById("luz2");
    var verde = document.getElementById("luz3");

    var btnVermelha = document.getElementById("btn1");
    var btnAmarela = document.getElementById("btn2");
    var btnVerde = document.getElementById("btn3");

    function apagar() {
        vermelha.style.backgroundColor = "gray";
        amarela.style.backgroundColor = "gray";
        verde.style.backgroundColor = "gray";
    }

    btnVermelha.addEventListener("click", function () {
        apagar();
        vermelha.style.backgroundColor = "red";
    })

    btnAmarela.addEventListener("click", function () {
        apagar();
        amarela.style.backgroundColor = "yellow";
    })

    btnVerde.addEventListener("click", function () {
        apagar();
        verde.style.backgroundColor = "green";
    })
}

luzes()
