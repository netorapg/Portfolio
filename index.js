function alterarTema() {
    const tema = document.body.getAttribute("data-tema");
    const novoTema = tema =='dark' ? 'light' : 'dark';
    document.body.setAttribute("data-tema", novoTema);
    localStorage.setItem('tema', novoTema);
}