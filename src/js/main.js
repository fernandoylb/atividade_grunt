let contador = 0;

const botao = document.getElementById('btn');
const texto = document.getElementById('contador');

botao.addEventListener('click', function () {
  contador++;
  texto.textContent = contador;
});
