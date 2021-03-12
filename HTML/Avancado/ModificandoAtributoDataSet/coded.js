/**
 * Estudando a modificação de atributos no html utilizando "dataset".
*/
let lista = document.getElementById("lista");

//Atribuindo um valor ao atributo.
lista.dataset.number = "6";

let number = parseInt(lista.dataset.number);

let conteudo = "";

for (let i = 0; i < number; i++) {
    conteudo += "<ul>" + i + "</ul>";
}

lista.innerHTML = conteudo;