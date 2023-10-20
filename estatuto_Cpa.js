function fetchDobanco() {
    const url = 'https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type+%3D%3D+%22estatuto_cpa%22%5D%7Btitulo,descricao%7D';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const container = document.querySelector('article.tabcontent');
  
        data.result.forEach(item => {
  
          const h1 = document.createElement('h1');
          h1.textContent = item.titulo;
  
          const divContent = document.createElement('div');
          divContent.className = 'content';
  
          const p = document.createElement('p');
          p.textContent = item.descricao;
  
          divContent.appendChild(p);
          container.appendChild(h1)

          container.appendChild(divContent);
        });
      })
      .catch(error => {
        console.error('Erro na API:', error);
      });
  }
  
  // Vai chamar a função e buscar os dados do banco
  fetchDobanco();
  