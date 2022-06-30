
import { Questions } from '../main.js'

import { cardFinish } from '../Cards/cardFinish.js'
import { warning } from '../Cards/warning.js'

export const LisneterBtn = (correct, i, checkCorrect) => {
  const $option1 = document.querySelector('#option1')
  const $option2 = document.querySelector('#option2')
  const $option3 = document.querySelector('#option3')
  const $option4 = document.querySelector('#option4')

  let optionChosed


  $option1.addEventListener('click', () => {
    optionChosed = $option1.children[0].textContent


    $option1.classList.add('checked')
    $option2.classList.remove('checked')
    $option3.classList.remove('checked')
    $option4.classList.remove('checked')
  })

  $option2.addEventListener('click', () => {
    optionChosed = $option2.children[0].textContent


    $option2.classList.add('checked')
    $option1.classList.remove('checked')
    $option3.classList.remove('checked')
    $option4.classList.remove('checked')
  })

  $option3.addEventListener('click', () => {
    optionChosed = $option3.children[0].textContent


    $option3.classList.add('checked')
    $option2.classList.remove('checked')
    $option1.classList.remove('checked')
    $option4.classList.remove('checked')
  })

  $option4.addEventListener('click', () => {
    optionChosed = $option4.children[0].textContent


    $option4.classList.add('checked')
    $option2.classList.remove('checked')
    $option3.classList.remove('checked')
    $option1.classList.remove('checked')
  })


  const $btnSendQuestion = document.querySelector('#sendQuestion')
  $btnSendQuestion.addEventListener('click', () => {

    if (i + 1 === Questions.length) {
      cardFinish(checkCorrect, Questions.length)
      return
    }

    let situation = ''
    if (optionChosed === correct) {
      situation = 'Acertou'
      checkCorrect++
    } else if (optionChosed === undefined) {
      situation = 'Por gentileza escolha uma opção'


    } else {
      situation = 'Errou'
    }

    warning(situation, Questions, i, checkCorrect)


  })


}

