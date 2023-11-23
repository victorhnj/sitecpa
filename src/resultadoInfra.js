function fetchSatisfacaoInfra() {
    const url = 'https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type+%3D%3D+%22satisfacao_infra%22%5D%5B0..1%5D%7B%0A++%22grafico_infra%22%3Agrafico_infra.asset-%3Eurl%2C%0A++%22avalicao%22%3Aavalicao%0A+%0A%7D';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Resposta da rede não foi ok.');
            }
            return response.json();
        })
        .then(data => {
            const container = document.querySelector('.Fig3');
            
            // Verifica se os dados existem e se há algum resultado
            if (data && data.result && data.result.length > 0) {
                const result = data.result[0];

                // Cria os elementos para exibir o gráfico e a avaliação
                const picture = document.createElement('picture');
                const img = document.createElement('img');
                img.className = 'ImagemResultado';
                img.src = result.grafico_infra;
                img.alt = 'Gráfico Colunas';
                picture.appendChild(img);

                const divItensTitulo = document.createElement('div');
                divItensTitulo.className = 'ItensTitulo';
                divItensTitulo.textContent = result.avalicao;


                container.innerHTML = '';
                container.appendChild(picture);
                container.appendChild(divItensTitulo);
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}


fetchSatisfacaoInfra();
