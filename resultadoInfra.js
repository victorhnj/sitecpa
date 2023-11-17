function fetchSatisfacaoInfra() {
    const url = 'https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type+%3D%3D+%22satisfacao_infra%22%5D%5B0..1%5D%7B%0A++%22grafico_infra%22%3Agrafico_infra.asset-%3Eurl%2C%0A++%22avalicao%22%3Aavalicao%0A+%0A%7D'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.ComissaoSection1DiretorConteudoItensResultado');

            if (data.result && data.result.length > 0) {
                const result = data.result[0];

                const div = document.createElement('div');
                div.className = 'ComissaoSection1DiretorConteudoItens ComissaoSection1DiretorConteudoItensResultado';

                const picture = document.createElement('picture');
                const img = document.createElement('img');
                img.className = 'ImagemResultado';
                img.src = result.grafico_infra;
                img.alt = 'Gráfico Colunas';
                picture.appendChild(img);

                const divItensTitulo = document.createElement('div');
                divItensTitulo.className = 'ItensTitulo';
                divItensTitulo.textContent = result.avalicao;

                div.appendChild(picture);
                div.appendChild(divItensTitulo);
                container.appendChild(div);
            }
        })
        .catch(error => {
            console.error('Erro na API:', error);
        });
}

// Chama a função para buscar os dados do banco
fetchSatisfacaoInfra();
