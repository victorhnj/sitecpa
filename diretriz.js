fetch('https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type+%3D%3D+%27diretriz%27%5D+%7C+order%28ordem+asc%29+%7B%0A++%22ordem%22%3A+ordem%2C%0A++%22titulo%22%3A+titulo%2C%0A++%22descricao%22%3A+descricao%0A%7D')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.TabsConteudo');
    data.result.forEach(item => {
      const card = document.createElement('div');
      card.className = 'Card';
      
      const numeroCard = document.createElement('div');
      numeroCard.className = 'NumeroCard';
      numeroCard.innerText = item.ordem.toString().padStart(2, '0');
      
      const textoCard = document.createElement('div');
      textoCard.className = 'TextoCard';
      textoCard.style.textAlign = 'justify';
      
      const titulo = document.createElement('div');
      titulo.className = 'TextoTituloCard';
      titulo.innerText = item.titulo;
      
      const descricao = document.createElement('div');
      descricao.className = 'TextoConteudoCard';
      descricao.innerText = item.descricao;
      
      textoCard.appendChild(titulo);
      textoCard.appendChild(descricao);
      
      card.appendChild(numeroCard);
      card.appendChild(textoCard);
      
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Erro na API:', error);
  });
