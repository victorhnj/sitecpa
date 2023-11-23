// Função assíncrona para buscar e manipular dados de membros
async function dadoAsync() {
     // Faz uma requisição para a API utilizando fetch
    var resposta = await fetch("https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type+%3D%3D+%22membros%22%5D%7B%0A++%22imagem%22%3Aimagem.asset-%3Eurl%2C%0A++%22nome%22%3Anome%2C%0A++%22cargo%22%3Acargo%2C%0A++%22sobrenome%22%3Asobrenome%2C%0A++%22bio%22%3Abio%2C%0A++%22titulo%22%3A+titulo%2C%0A++%22subtitulo%22%3Asubtitulo%2C%0A%7D", {
        method: "GET"
    });
// Extrai os dados da resposta como JSON
    var response = await resposta.json();
  
   // Seleciona o elemento HTML <ul> onde serão inseridos os membros  
    var ul = document.querySelector("ul.slider-container");

     // Para cada membro na resposta, cria elementos HTML dinamicamente e preenche com as informações dos membros
    response.result.forEach((element, index) => {
        var li = document.createElement("li");
        var divParticipantes = document.createElement("div");
        divParticipantes.classList.add("participantes");

        var divColunm1 = document.createElement("div");
        divColunm1.classList.add("Colunm-1");

        var figure = document.createElement("figure");
        figure.classList.add("snip1113");
        figure.classList.add(index % 2 === 0 ? "red" : "yellow");

        var imagem = document.createElement('img');
        imagem.src = response.result[index].imagem;

        var figcaption = document.createElement('figcaption');
        var h3Figcaption = document.createElement('h3');
        h3Figcaption.innerHTML = `${response.result[index].nome}<span> ${response.result[index].sobrenome}</span>`;
        
        var h4Figcaption = document.createElement("h4");
        h4Figcaption.innerText = `${response.result[index].cargo}`;

        var divColunm2 = document.createElement("div");
        divColunm2.classList.add("Colunm-2");

        var divConteudoPontosTextoSubT = document.createElement("div");
        divConteudoPontosTextoSubT.classList.add("ConteudoPontosTextoSubT");
        divConteudoPontosTextoSubT.innerText = `${response.result[index].subtitulo}`;

        var divComissaoSection1ConteudoDireitaTit = document.createElement("div");
        divComissaoSection1ConteudoDireitaTit.classList.add("ComissaoSection1ConteudoDireitaTit");
        divComissaoSection1ConteudoDireitaTit.classList.add("ComissaoSection1DiretorConteudoTit");
        divComissaoSection1ConteudoDireitaTit.innerText = `${response.result[index].titulo}`;

        var divComissaoSection1ConteudoEsquerda = document.createElement("div");
        divComissaoSection1ConteudoEsquerda.classList.add("ComissaoSection1ConteudoEsquerda");
        divComissaoSection1ConteudoEsquerda.classList.add("ComissaoSection1DiretorConteudoSub");
        divComissaoSection1ConteudoEsquerda.innerText = `${response.result[index].bio}`;

        li.appendChild(divParticipantes);
        divParticipantes.appendChild(divColunm1);
        divColunm1.appendChild(figure);
        figure.appendChild(imagem);   // Anexa os elementos criados à estrutura HTML
        figure.appendChild(figcaption);
        figcaption.appendChild(h3Figcaption);
        figcaption.appendChild(h4Figcaption);
        divParticipantes.appendChild(divColunm2);
        divColunm2.appendChild(divConteudoPontosTextoSubT);
        divColunm2.appendChild(divComissaoSection1ConteudoDireitaTit);
        divColunm2.appendChild(divComissaoSection1ConteudoEsquerda);
        ul.appendChild(li);
    });
}

dadoAsync();
