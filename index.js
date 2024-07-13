function alterarTema() {
    const tema = document.body.getAttribute("data-tema");
    const novoTema = tema =='dark' ? 'light' : 'dark';
    document.body.setAttribute("data-tema", novoTema);
    localStorage.setItem('tema', novoTema);
}

function verificarTema() {
    const temaArmazenado = localStorage.getItem('tema');
    if(temaArmazenado) {
        document.body.setAttribute('data-tema', temaArmazenado);
    }
}

document.addEventListener('DOMContentLoaded', verificarTema);