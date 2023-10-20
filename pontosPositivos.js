fetch('https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type+%3D%3D+%22pontosPositivos%22%5D%7Btitulo%2Cdescricao%7D')
  .then(response => response.json())
  .then(data => {

    let quantidadeTopicos = 0; // Para poder criar a quantidade certa de div topico

    const container = document.querySelector('.ConteudoPontosTextoTopicos');

    data.result.forEach(item => {
      if(quantidadeTopicos === 0 || quantidadeTopicos === 2){
        // criando outras divs, para dar certo a estilização
        const topico = document.createElement("div")
        topico.classList.add("TOPICO")
      }

      const ConteudoPontosTextoTopicosItem = document.createElement("div")
      ConteudoPontosTextoTopicosItem.classList.add("ConteudoPontosTextoTopicosItem")

      //mudando o titulo
      const titulo = document.createElement("div")
      titulo.classList.add("ConteudoPontosTextoTopicosItemTit")
      titulo.classList.add("ConteudoObjetivoTextoTitulo")
      titulo.innerText = item.titulo

      //mudando a descrição
      const descricao = document.createElement("div")
      descricao.classList.add("ConteudoPontosTextoTopicosItemCon")
      descricao.classList.add("ConteudoObjetivoTextoConteudo")
      descricao.innerText = item.descricao

      //Dando os append child
      ConteudoPontosTextoTopicosItem.appendChild(titulo)
      ConteudoPontosTextoTopicosItem.appendChild(descricao)
      topico.appendChild(ConteudoPontosTextoTopicosItem)
      container.appendChild(topico)


      //Para poder criar a quantidade certa de div topico
      quantidadeTopicos++
    });
  })
  .catch(error => {
    console.error('Erro na API:', error);
  });
