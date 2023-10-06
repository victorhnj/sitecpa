document.addEventListener("DOMContentLoaded", () => {
  // URL da API para buscar a imagem do QRCode
  const apiUrl = "https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type%3D%3D++%22imag_Qrcode%22%5D%7B%0A++%22imagem%22%3A+qrcodeImage.asset-%3Eurl%0A%7D";

  // Realizando a requisição para a API usando Fetch
  fetch(apiUrl)
      .then(response => {
          // Verifica se a resposta está OK
          if (!response.ok) {
              throw new Error("Network response was not ok " + response.statusText);
          }
          return response.json();  // Retorna a resposta como JSON
      })
      .then(data => {
          // Utiliza os dados para inserir a imagem na div
          const imageUrl = data.result[0].imagem;
          const imageContainer = document.querySelector(".ItemImgCapaCPA");
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          imageElement.className = "ImgCapaCPA"; // Atribuir a classe conforme o HTML
          imageContainer.appendChild(imageElement);
      })
      .catch(error => {
          console.error("Fetch error: ", error);
      });
});