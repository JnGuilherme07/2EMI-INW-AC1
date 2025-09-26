// Pegar elementos
const tela = document.getElementById("tela");
const Começou = document.getElementById("Começou");
const Aviso = document.getElementById("Aviso");
const Vez = document.getElementById("Vez");
const JogadorA = document.getElementById("JogadorA");
const JogadorB = document.getElementById("JogadorB");

// Variáveis do jogo
let PontosA = 0;
let PontosB = 0;
let esperandoVerde = false;
let rodadaAtiva = false;
let timeoutVerde = null;
let timeoutFimRodada = null;
let vezJogador = "A";

// Função para iniciar rodada
Começou.onclick = function() {
  clearTimeout(timeoutVerde);
  clearTimeout(timeoutFimRodada);
  tela.classList.remove("verde");
  Aviso.textContent = "Espere...";
  esperandoVerde = true;
  rodadaAtiva = true;
  Vez.textContent = "Vez do jogador " + vezJogador;

  // Tempo aleatório (1 a 3 segundos) para mudar para verde
  const delay = Math.random() * 2000 + 1000;

  timeoutVerde = setTimeout(function() {
    tela.classList.add("verde");
    Aviso.textContent = "VERDE! Clique!";
    esperandoVerde = false;

    // Tempo limite (2 segundos) para clicar
    timeoutFimRodada = setTimeout(() => {
      if (rodadaAtiva) {
        Aviso.textContent = "Tempo esgotado! Nenhum jogador clicou.";
        tela.classList.remove("verde");

        // Passa a vez
        vezJogador = vezJogador === "A" ? "B" : "A";
        Vez.textContent = "Vez do jogador " + vezJogador;
        rodadaAtiva = false;
      }
    }, 1000); // 2 segundos para reagir
  }, delay);
};

// Clique na tela
tela.onclick = function() {
  if (!rodadaAtiva) return;

  if (esperandoVerde) {
    clearTimeout(timeoutVerde);
    Aviso.textContent = "Clicou cedo! Tente de novo.";
    rodadaAtiva = false;
    esperandoVerde = false;
    tela.classList.remove("verde");
  } else {
    clearTimeout(timeoutFimRodada);

    // Jogador da vez vence
    if (vezJogador === "A") {
      PontosA++;
      JogadorA.textContent = PontosA;
    } else {
      PontosB++;
      JogadorB.textContent = PontosB;
    }

    Aviso.textContent = "Jogador " + vezJogador + " venceu!";
    tela.classList.remove("verde");

    // Troca a vez
    vezJogador = vezJogador === "A" ? "B" : "A";
    Vez.textContent = "Vez do jogador " + vezJogador;

    rodadaAtiva = false;
  }
};
