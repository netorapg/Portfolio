async function fetchGitHubStats(username) {
    try {
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        console.log(reposResponse);
        if (!reposResponse.ok) {
            throw new Error('Erro ao obter repositórios do GitHub');
        }
        const repos = await reposResponse.json();

        let totalCommits = 0;

        for (const repo of repos) {
            const commitsResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits`);
            if (!commitsResponse.ok) {
                throw new Error(`Erro ao obter commits do repositório ${repo.name}`);
            }
            const commits = await commitsResponse.json();
            totalCommits += commits.length;
        }

        document.getElementById('total-commits').textContent = totalCommits;
        document.getElementById('total-repos').textContent = repos.length;
    } catch (error) {
        console.error('Erro ao obter estatísticas do GitHub:', error.message);
        document.getElementById('total-commits').textContent = 'Erro ao carregar commits';
        document.getElementById('total-repos').textContent = 'Erro ao carregar repositórios';
    }
}

function alterarTema() {
    const tema = document.body.getAttribute("data-tema");
    const novoTema = tema == 'dark' ? 'light' : 'dark';
    document.body.setAttribute("data-tema", novoTema);
    localStorage.setItem('tema', novoTema);
}

function copyText(elementId) {
    var text = document.getElementById(elementId).textContent;
    var tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Texto copiado para a área de transferência: ' + text);
}

function verificarTema() {
    const temaArmazenado = localStorage.getItem('tema');
    if (temaArmazenado) {
        document.body.setAttribute('data-tema', temaArmazenado);
    }
}

const anoAtual = new Date().getFullYear();
document.getElementById('ano-atual').textContent = anoAtual;

document.addEventListener('DOMContentLoaded', verificarTema);

fetchGitHubStats('netorapg');
