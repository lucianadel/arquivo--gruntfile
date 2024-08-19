const form = document.getElementById('formPet');
const nomePetInput = document.getElementById('nomePet');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomePet = nomePetInput.value.trim();

    if (nomePet) {
        mensagem.textContent = `O pet ${nomePet} foi cadastrado com sucesso!`;
        mensagem.classList.add('mensagem-sucesso');
        nomePetInput.value = '';
    } else {
        mensagem.textContent = 'Por favor, preencha o nome do pet.';
        mensagem.classList.add('mensagem-erro');
    }

    // Limpar a classe de mensagem após alguns segundos (opcional)
    setTimeout(() => {
        mensagem.textContent = '';
        mensagem.classList.remove('mensagem-sucesso', 'mensagem-erro');
    }, 3000);
});