// Crie um elemento de botão
const button = document.createElement('button');

// Defina o texto do botão
button.innerText = 'Navegar';

// Adicione uma classe CSS ao botão para estilização
button.classList.add('navigation-button');

// Adicione um evento de clique ao botão
button.addEventListener('click', () => {
    // Lógica de navegação aqui
});

// Adicione o botão ao elemento pai desejado no DOM
const parentElement = document.querySelector('.navigation-container');
parentElement.appendChild(button);