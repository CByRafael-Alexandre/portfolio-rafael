// ======================================
// VALIDAÇÃO DO FORMULÁRIO
// ======================================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

    // Impede o envio do formulário
    event.preventDefault();

    // Captura os valores
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação do nome
    if (nome === "") {
        alert("Por favor, informe seu nome.");
        return;
    }

    // Validação do e-mail
    if (email === "") {
        alert("Por favor, informe seu e-mail.");
        return;
    }

    // Expressão regular para validar e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    // Validação da mensagem
    if (mensagem.length < 10) {
        alert("A mensagem deve ter pelo menos 10 caracteres.");
        return;
    }

    // Mensagem de sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpa o formulário
    formulario.reset();

});


// ======================================
// MENU ATIVO
// ======================================

const links = document.querySelectorAll("nav a");

links.forEach(function(link){

    link.addEventListener("click", function(){

        links.forEach(function(item){
            item.classList.remove("ativo");
        });

        this.classList.add("ativo");

    });

});