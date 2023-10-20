fetch('https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type+%3D%3D+%22diretriz%22%5D%5B0..2%5D%7Bordem%2Cdescricao%2Ctitulo%7D+%7C+order%28_createdAt+asc%29')
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
