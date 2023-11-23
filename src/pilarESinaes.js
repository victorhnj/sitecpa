function fetchPilaresIES() {
    const url = 'https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type+%3D%3D+%22pilar_iesEsinaes%22%5D%7B%0A++%22titulo%22%3Atitulo%2C%0A++%22sub_titulo%22%3Asub_titulo%2C%0A++%22pilares%22%3Apilares%2C%0A+%0A%7D';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('tab3');

            data.result.forEach(item => {
                const h1 = document.createElement('h1');
                h1.textContent = item.titulo;

                const divContent = document.createElement('div');
                divContent.className = 'content';

                const p = document.createElement('p');
                p.textContent = item.sub_titulo;

                const ol = document.createElement('ol');

                item.pilares.forEach(pilar => {
                    const li = document.createElement('li');
                    li.textContent = pilar;
                    ol.appendChild(li);
                });

                divContent.appendChild(p);
                divContent.appendChild(ol);

                container.appendChild(h1);
                container.appendChild(divContent);
            });
        })
        .catch(error => {
            console.error('Erro na API:', error);
        });
}

// Chama a função para buscar os dados do banco
fetchPilaresIES();
