function calculadora() {
    var campoPreco = document.getElementById("preco");
    var campoDesconto = document.getElementById("desconto");
    var botao = document.getElementById("btn");

    var erro = document.getElementById("erro");
    var alerta = document.getElementById("alerta");
    var original = document.getElementById("original");
    var descontado = document.getElementById("descontado");
    var final = document.getElementById("final");

    botao.addEventListener("click", function () {
        erro.textContent = "";
        alerta.textContent = "";
        original.textContent = "";
        descontado.textContent = "";
        final.textContent = "";

        if (campoPreco.value === "" || campoDesconto.value === "") {
            erro.textContent = "Preencha o preço e o desconto.";
            erro.style.color = "red";
            return;
        }

        var preco = Number(campoPreco.value);
        var desconto = Number(campoDesconto.value);

        if (preco < 0 || desconto < 0) {
            erro.textContent = "Não são permitidos valores negativos.";
            erro.style.color = "red";
            return;
        }

        if (desconto > 100) {
            erro.textContent = "O desconto não pode ser maior que 100%.";
            erro.style.color = "red";
            return;
        }

        var valorDescontado = preco * desconto / 100;
        var precoFinal = preco - valorDescontado;

        original.textContent = "Valor original: R$ " + preco.toFixed(2);
        descontado.textContent = "Valor descontado: R$ " + valorDescontado.toFixed(2);
        final.textContent = "Preço final: R$ " + precoFinal.toFixed(2);

        if (desconto > 50) {
            alerta.textContent = "Atenção: desconto maior que 50%!";
            alerta.style.color = "orange";
        }
    })
}

calculadora()
