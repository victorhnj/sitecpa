async function dadoAsync(){
    var resposta = await fetch("https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type+%3D%3D+%22membrosDestaque%22%5D%7B%0A++%22foto%22%3Afoto.asset-%3Eurl%2C%0A++%22nome%22%3Anome%2C%0A++%22cargo%22%3Acargo%2C%0A++%22sobrenome%22%3Asobrenome%0A%7D",{
        method: "GET"
    });
    var response = await resposta.json();
    var imagem = document.querySelector('img.destaque');
    imagem.src = response.result[0].foto; 
    var h3 = document.querySelector("h3.h3destaque")
    h3.innerHTML=`${response.result[0].nome}<span> ${response.result[0].sobrenome}</span>`
    var h4 = document.querySelector("h4.h4destaque")
    h4.innerText = `${response.result[0].cargo}`
    var texto = document.createElement("p");
    texto.inner
}
dadoAsync();