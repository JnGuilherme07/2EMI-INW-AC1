const corpo = document.body;
const btn1 = document.getElementById('jogador1');
const btn2 = document.getElementById('jogador2');
const mensagem = document.getElementById('mensagem');
const placar1 = document.getElementById('placar1');
const placar2 = document.getElementById('placar2');

let podeClicar = false;
let venceu = false;
let pontos1 = 0;
let pontos2 = 0;

function iniciarRodada() {
  corpo.style.backgroundColor = 'gray';
  mensagem.textContent = 'Prepare-se...';
  podeClicar = false;
  venceu = false;

  const tempo = Math.random() * 3000 + 2000;

  setTimeout(() => {
    corpo.style.backgroundColor = 'green';
    mensagem.textContent = 'Clique agora!';
    podeClicar = true;
  }, tempo);
}

function clicar(jogador) {
  if (!podeClicar || venceu) return;

  venceu = true;
  if (jogador === 1) {
    pontos1++;
    mensagem.textContent = 'Jogador 1 venceu!';
    placar1.textContent = pontos1;
  } else {
    pontos2++;
    mensagem.textContent = 'Jogador 2 venceu!';
    placar2.textContent = pontos2;
  }

  setTimeout(iniciarRodada, 2000);
}

btn1.onclick = () => clicar(1);
btn2.onclick = () => clicar(2);

iniciarRodada();
