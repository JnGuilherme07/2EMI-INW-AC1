let estado = 0;
let intervalo = null;

// Pega os elementos
const vermelho = document.getElementById("vermelho");
const amarelo = document.querySelector("#amarelo");
const verde = document.getElementById("verde");
const botao = document.getElementById("botao");

// Função que apaga todas as luzes
function apagarLuzes() {
  vermelho.classList.remove("ligar");
  amarelo.classList.remove("ligar");
  verde.classList.remove("ligar");
}

// Função que acende a luz correspondente
function mudarCor() {
  apagarLuzes();

  if (estado === 0) {
    vermelho.classList.add("ligar");
  } else if (estado === 1) {
    amarelo.classList.add("ligar");
  } else if (estado === 2) {
    verde.classList.add("ligar");
  }

  // Próximo estado (ciclo 0 → 1 → 2 → 0)
  estado = (estado + 1) % 3;
}

// Botão manual
botao.onclick = function() {
  mudarCor();
};

// Ciclo automático (a cada 2 segundos)
function iniciarCiclo() {
  if (!intervalo) {
    intervalo = setInterval(mudarCor, 2000);
  }
}

// Inicia o ciclo automaticamente
iniciarCiclo();
