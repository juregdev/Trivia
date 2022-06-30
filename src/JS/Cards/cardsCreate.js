import { LisneterBtn } from '../Listeners/ListenerOptions.js'
const $chosses = document.querySelector('#chosses')


export const cardsCreate = (question, i, checkCorrect) => {
  const card = `<div id="modal">
  <h1 id="question">Pergunta ${i + 1}</h1>
  <p>${question.statement}</p>
  <div id="options">
 ${sortOptions(question.options)}
  </div>

  <button id="sendQuestion">Enviar Resposta</button>
</div>
`

  $chosses.innerHTML = card
  LisneterBtn(question.options.correct, i, checkCorrect)

  sortOptions(question.options)
}

export function shuffleArray(arr) {
  // Loop em todos os elementos
  for (let i = arr.length - 1; i > 0; i--) {
    // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Retornando array com aleatoriedade
  return arr;
}

const sortOptions = (options) => {
  const arr = shuffleArray(Object.values(options))

  let optionsReturn = ``
  let i = 1

  arr.forEach(option => {
    optionsReturn += `<div id="option${i}">
   <p>${option}</p>
   </div>`

    i++
  })

  return optionsReturn
}

