//puxar os dados do JSON
const url = "http://www.professorburnes.com.br/api/";

//funcao para ler as tirinhas
ler = () => {

	fetch(url)
		.then(response => response.json())
		.then(data => {
			var tam = data.length;

			for (var i = 0; i < tam; i++) {
				document.getElementById('tirinhas').innerHTML += `<div class='tira'><h1>` + data[i].titulo + `</h1><img src='${data[i].tirinha}' alt='${data[i].titulo}'></div>`;
			}
		})
		.catch(erro => console.log(erro));
}

//para carregar a função das tirinhas
window.addEventListener('load', ler);