async function consultarRepositorios(){
        const nomeUsuario = document.getElementById("inputNomeUsuario").value;
        console.log(nomeUsuario);
        const listaRepositorios = document.getElementById("listaRepositorios");
        const status = document.getElementById("status");
        listaRepositorios.innerText='';
        if(!nomeUsuario) {
            alert("Informar o nome do usuário");
            return;
        }

        const url = `https://api.github.com/users/${nomeUsuario}/repos`;
        status.innerText = "Carregando...";
        try {   
            const resposta = await fetch(url);
            console.log("antes da promise");
            /*resposta.then(res => {
                console.log(res);

            });*/

            if(!resposta.ok){
                alert("Erro ao realizar a consulta");
                return;
            }

            const repositorios = await resposta.json();

            repositorios.forEach(element => {
                const itemLista = document.createElement('li');
                itemLista.textContent = element.name;
                listaRepositorios.appendChild(itemLista);
            });
            


            console.log("após a promise");
        } catch (error) {
            
        }
status.innerText = "";
}