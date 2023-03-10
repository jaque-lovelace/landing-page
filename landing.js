// obtém referências aos elementos HTML do formulário
const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const fone = document.getElementById('fone');
const mensagem = document.getElementById('mensagem');
const mensagensErro = document.querySelectorAll('.mensagem-erro');

// adiciona um manipulador de eventos para o envio do formulário
form.addEventListener('submit', function (event) {
    // valida o campo nome
    if (nome.value.length < 3) {
        mensagensErro[0].textContent = 'O nome deve ter pelo menos 3 caracteres.';
        event.preventDefault(); // impede o envio do formulário
    } else {
        mensagensErro[0].textContent = '';
    }

    // valida o campo email
    if (email.validity.typeMismatch || email.value.length < 4) {
        mensagensErro[1].textContent = 'Digite um endereço de email válido.';
        event.preventDefault(); // impede o envio do formulário
    } else {
        mensagensErro[1].textContent = '';
    }

    // valida o campo telefone
    if (!fone.checkValidity()) {
        mensagensErro[2].textContent = 'Digite um número de telefone válido.';
        event.preventDefault(); // impede o envio do formulário
    } else {
        mensagensErro[2].textContent = '';
    }

    // exibe uma mensagem de sucesso se todos os campos são válidos
    if (form.checkValidity()) {
        alert('Formulário enviado com sucesso!');
        form.reset(); // limpa o formulário
    }

    event.preventDefault(); // impede o envio do formulário (caso ocorram erros de validação)
});
