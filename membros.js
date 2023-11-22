async function dadoAsync(){
    var resposta = await fetch("https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type+%3D%3D+%22membros%22%5D%7B%0A++%22imagem%22%3Aimagem.asset-%3Eurl%2C%0A++%22nome%22%3Anome%2C%0A++%22cargo%22%3Acargo%2C%0A++%22sobrenome%22%3Asobrenome%2C%0A++%22bio%22%3Abio%2C%0A++%22titulo%22%3A+titulo%2C%0A++%22subtitulo%22%3Asubtitulo%2C%0A%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    var ul = document.querySelector("ul.slider-container")
    minharesposta.result.sort((a,b)=>a.nome.localeCompare(b.nome))
    minharesposta.result.forEach((element, index) => {
        var li = document.createElement("li")
        var divparticipantes = document.createElement("div")
        divparticipantes.classList.add("participantes")
        var divcolunm1 = document.createElement("div");
        divcolunm1.classList.add("Colunm-1")
        var figure = document.createElement("figure");
        figure.classList.add("snip1113")
        if (index%2 ==0) {
            figure.classList.add("red")
        }
        else{
            figure.classList.add("yellow")
        }
        var imagem = document.createElement('img');
        imagem.src = minharesposta.result[index].imagem; 
        var figcaption = document.createElement('figcaption');
        var h3figcaption = document.createElement('h3')
        h3figcaption.innerHTML=`${minharesposta.result[index].nome}<span> ${minharesposta.result[index].sobrenome}</span>`
        var h4figcaption = document.createElement("h4")
        h4figcaption.innerText = `${minharesposta.result[index].cargo}`
        var divcolunm2 = document.createElement("div")
        divcolunm2.classList.add("Colunm-2")
        var divConteudoPontosTextoSubT = document.createElement("div")
        divConteudoPontosTextoSubT.classList.add("ConteudoPontosTextoSubT")
        divConteudoPontosTextoSubT.innerText=`${minharesposta.result[index].subtitulo}`
        var divComissaoSection1ConteudoDireitaTit = document.createElement("div")
        divComissaoSection1ConteudoDireitaTit.classList.add("ComissaoSection1ConteudoDireitaTit")
        divComissaoSection1ConteudoDireitaTit.classList.add("ComissaoSection1DiretorConteudoTit")
        divComissaoSection1ConteudoDireitaTit.innerText=`${minharesposta.result[index].titulo}`
        var divComissaoSection1ConteudoEsquerda  = document.createElement("div")
        divComissaoSection1ConteudoEsquerda.classList.add("ComissaoSection1ConteudoEsquerda")
        divComissaoSection1ConteudoEsquerda.classList.add("ComissaoSection1DiretorConteudoSub")
        divComissaoSection1ConteudoEsquerda.innerText=`${minharesposta.result[index].bio}`
        li.appendChild(divparticipantes)
        divparticipantes.appendChild(divcolunm1)
        divcolunm1.appendChild(figure)
        figure.appendChild(imagem)
        figure.appendChild(figcaption)
        figcaption.appendChild(h3figcaption)
        figcaption.appendChild(h4figcaption)
        divparticipantes.appendChild(divcolunm2)
        divcolunm2.appendChild(divConteudoPontosTextoSubT)
        divcolunm2.appendChild(divComissaoSection1ConteudoDireitaTit)
        divcolunm2.appendChild(divComissaoSection1ConteudoEsquerda)
        ul.appendChild(li)
    })
}
dadoAsync();