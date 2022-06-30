export const cardFinish = (acertos, nQuestoes) => {
  const card = `
  <div id="finish">
    <h1>Game Over</h1>
    <p>Você acertou ${acertos + 1} de ${nQuestoes}</p>

    <button type="button" id="restart">Recomeçar</button>
  </div>
`
  document.querySelector('#chosses').innerHTML = card



  window.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'restart':
        window.location.reload();
        break;
      default: return;
    }
  })
}

