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

//Desenhando um retangulo preenchido.
context.fillStyle = "blue";
context.fillRect(10, 10, 100, 200);

//Desenhando um retangulo vasado.
context.lineWidth = 3;
context.strokeStyle = "gray";
context.strokeRect(20, 20, 100, 200);

//Criando um vazado dentro do retangulo.
context.clearRect(25, 25, 30, 30);

//Begim and Close path.
context.beginPath();

context.lineWidth = 4;
context.strokeStyle = "green";
context.moveTo(30, 30);
context.lineTo(400, 300);
context.stroke();

//Desenhando uma nova linha.
context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "yellow";
context.moveTo(50, 30);
context.lineTo(300, 300);
context.stroke();

//Fechando um desenho.
context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "black";
context.fillStyle = "gray";
context.moveTo(60, 80);
context.lineTo(300, 300);
context.lineTo(200, 300);
context.closePath();
context.stroke();
context.fill();//Preenche o triangulo.

//Desenhando circulos.
let x = 250;
let y = 375;
let raio = 100;
let inicio = 0;
let fim = 2 * Math.PI;

context.beginPath();
context.strokeStyle = "black";
context.fillStyle = "yellow";
context.arc(x, y, raio, inicio, fim);
context.stroke();
context.fill();

let circle = {
    x: 250,
    y: 255,
    raio: 100,
    inicio: 0,
    fim: 2 * Math.PI,
}

function drawCircle(circle) {

    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "yellow";
    context.arc(circle.x, circle.y, circle.raio, circle.inicio, circle.fim);
    context.stroke();
    context.fill();
}

setInterval(function () {
    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.3;
        circle.x += 5;
    }
    drawCircle(circle);

}, 400);