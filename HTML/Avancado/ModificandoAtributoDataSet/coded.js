/**
 * Estudando a modificação de atributos no html utilizando "dataset".
*/
let lista = document.getElementById("lista");
let number = parseInt(lista.getAttribute("data-number"));

let conteudo = "";

for (let i = 0; i < number; i++) {
    conteudo += "<ul>" + i + "</ul>";
}

lista.innerHTML = conteudo;