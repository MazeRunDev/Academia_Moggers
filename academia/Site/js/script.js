var formContato = document.getElementById("form-contato");

if (formContato) {
    formContato.addEventListener("submit", function () {
        alert("Mensagem enviada! Em breve a gente responde.");
    });
}

var formRegistro = document.getElementById("form-registro");

if (formRegistro) {
    var cpf = document.getElementById("cpf");
    var senha = document.getElementById("senha");
    var confirmarSenha = document.getElementById("confirmar-senha");
    var plano = document.getElementById("plano");

    cpf.addEventListener("input", function () {
        var numeros = cpf.value.replace(/\D/g, "");

        if (numeros.length > 9) {
            numeros = numeros.slice(0, 3) + "." + numeros.slice(3, 6) + "." + numeros.slice(6, 9) + "-" + numeros.slice(9, 11);
        } else if (numeros.length > 6) {
            numeros = numeros.slice(0, 3) + "." + numeros.slice(3, 6) + "." + numeros.slice(6);
        } else if (numeros.length > 3) {
            numeros = numeros.slice(0, 3) + "." + numeros.slice(3);
        }

        cpf.value = numeros;
    });

    var planoEscolhido = new URLSearchParams(window.location.search).get("plano");

    if (planoEscolhido) {
        plano.value = planoEscolhido;
    }

    formRegistro.addEventListener("submit", function (evento) {
        if (senha.value !== confirmarSenha.value) {
            evento.preventDefault();
            alert("As senhas não são iguais. Confere aí!");
            confirmarSenha.focus();
        } else {
            alert("Conta criada com sucesso! Bem-vindo à Mogger's Fit.");
        }
    });
}
