fetch('https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type+%3D%3D+%22objetivo%22%5D%5B0..1%5D%7Bdescricao_title%2Csub_objetivo%7D+%7C+order%28_createdAt+asc%29')
    .then(response => response.json())
    .then(data => {
        const mainContainer = document.querySelector('.ConteudoObjetivoTexto');
        
        const descricao = data.result[0].descricao_title;
        const objetivoText = document.createElement('div');
        objetivoText.className = 'ConteudoObjetivoTextoConteudo';
        objetivoText.style.textAlign = 'justify';
        objetivoText.innerText = descricao;
        mainContainer.appendChild(objetivoText);

        const listaDiv = document.createElement('div');
        listaDiv.className = 'ConteudoObjetivoTextoConteudo ConteudoObjetivoTextoLista';
        data.result[0].sub_objetivo.forEach(subObj => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'ConteudoObjetivoTextoListaItem';

            const bolinhaDiv = document.createElement('div');
            bolinhaDiv.className = 'bolinha';

            const textoDiv = document.createElement('div');
            textoDiv.className = 'ConteudoObjetivoTextoListaItemTopicos';
            textoDiv.innerText = subObj;

            itemDiv.appendChild(bolinhaDiv);
            itemDiv.appendChild(textoDiv);

            listaDiv.appendChild(itemDiv);
        });

        mainContainer.appendChild(listaDiv);

    })
    .catch(error => {
        console.error('Erro ao buscar os dados:', error);
    });
