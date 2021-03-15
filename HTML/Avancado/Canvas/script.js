let = document.getElementById("#tela");

//Pegando o contexto("o objeto desenhavel") da tela.
let context = tela.getContext("2d");

//movendo o ponteiro para o canto da tela.
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(550, 0);
context.strokeStyle = "#FF0022"
context.lineWidth = 5;
context.stroke();
