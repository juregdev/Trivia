import { cardsCreate } from '../Cards/cardsCreate.js'
import { LisneterBtn } from '../Listeners/ListenerOptions.js'
export const warning = (textWarning, Questions, i, checkCorrect) => {
  const message = ` 
  <div id="warnings">
    <p style='color:${textWarning === 'Acertou' ? 'green' : 'red'}'>${textWarning}</p>
    ${correctConstations(textWarning, Questions[i][0].options.correct)}
  </div>`

  document.querySelector('#chosses').innerHTML += message

  if (textWarning === 'Por gentileza escolha uma opção') {
    setTimeout(() => {
      document.querySelector('#chosses').removeChild(document.querySelector('#warnings'))

      LisneterBtn(Questions[i][0].options.correct, i, checkCorrect)
    }, 2000)

  }
  else {
    setTimeout(() => {
      cardsCreate(Questions[i + 1][0], i + 1, checkCorrect)
    }, 2000)
  }
}

const correctConstations = (text, correct) => {
  if (text != 'Por gentileza escolha uma opção') {
    return `<p> Correta: ${correct}</p>`
  } else { return `` }

}