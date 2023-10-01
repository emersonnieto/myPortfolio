const text = "Como prefere entrar em contato?";
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

type();