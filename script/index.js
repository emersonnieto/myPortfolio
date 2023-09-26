const text = "Olá, me chamo Emerson Nieto Beni Estudante de Sistemas de informação. Gostaria de convidá-lo a conhecer mais sobre mim e meu trabalho!";
const textElement = document.getElementById("text");
const cursorElement = document.getElementById("cursor");

let index = 0;

function type() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50); // Ajuste o valor para controlar a velocidade de digitação
  }
}

type(); // Inicia o efeito de digitação

function showButton1() {
  const button = document.getElementById("btnProjetos");
  button.classList.remove("hidden");
}

setTimeout(showButton1, 7600);

function showButton2() {
  const button = document.getElementById("btnCurriculo");
  button.classList.remove("hidden");
}

setTimeout(showButton2, 7600);

function abrirNovaPagina() {

  var url = 'file/curriculo.pdf';

  // Abra uma nova janela ou guia com o URL especificado
  window.open(url, '_blank');
}
