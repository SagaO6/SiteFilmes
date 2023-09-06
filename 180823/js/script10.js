function turminhas() {

//Localize o arquivo        //Receba os dados localizados em JSON       //Guarde os dados da variavel dados
fetch("js/alunos.json")     .then((response) => response.json())        .then((dados) => {

            console.log(dados.results);
            var saida = "<div id=filme>";
            dados.results.map((item, i) => {
                saida += `
                <div>
                        <h1>Nome: ${item.nome}</h1>
                        <p>Idade: ${item.idade}</p>
                        <p>Turma: ${item.turma}</p>
                </div>
            `;

            });

            saida += "</div>";
            document.body.innerHTML += saida;

        })

        .catch((erro) => console.log(`Erro ao tentar executar a API -> ${erro}`));

}