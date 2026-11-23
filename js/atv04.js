function votacao() {
    var votos = [0, 0, 0];
    var nomes = ["Filme A", "Filme B", "Filme C"];
    var resultado = document.getElementById("resultado");

    function configurarBotao(i) {
        var botao = document.getElementById("votar" + (i + 1));
        var contador = document.getElementById("votos" + (i + 1));

        botao.addEventListener("click", function () {
            votos[i]++;
            contador.textContent = votos[i];
        })
    }

    for (var i = 0; i < 3; i++) {
        configurarBotao(i);
    }

    var btnResultado = document.getElementById("btnResultado");

    btnResultado.addEventListener("click", function () {
        var total = votos[0] + votos[1] + votos[2];

        if (total === 0) {
            resultado.textContent = "Nenhum voto registrado ainda.";
            return;
        }

        var maior = Math.max(votos[0], votos[1], votos[2]);
        var quantosNoTopo = 0;
        var vencedor = "";

        for (var i = 0; i < 3; i++) {
            if (votos[i] === maior) {
                quantosNoTopo++;
                vencedor = nomes[i];
            }
        }

        var texto = "";

        if (quantosNoTopo > 1) {
            texto = "Houve empate na primeira colocação!";
        } else {
            texto = "Filme mais votado: " + vencedor;
        }

        for (var i = 0; i < 3; i++) {
            var percentual = (votos[i] / total * 100).toFixed(1);
            texto = texto + "<br>" + nomes[i] + ": " + percentual + "%";
        }

        resultado.innerHTML = texto;
    })
}

votacao()
