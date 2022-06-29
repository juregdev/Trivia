import { Geography } from './Questions/Geography.js'
import { History } from './Questions/History.js'
import { Language } from './Questions/Language.js'
import { Music } from './Questions/Music.js'
import { Sports } from './Questions/Sports.js'
import { Television } from './Questions/Television.js'

import { cardsCreate, shuffleArray } from './Cards/cardsCreate.js'

export let Questions = []
let i = 0

const QuestionsOrganization = (QuestionChossed) => {
  let questionOrder = []

  QuestionChossed.forEach((Question) => {
    questionOrder = [...questionOrder, [Question]]
  })
  Questions = shuffleArray(questionOrder)


  cardsCreate(Questions[0][0], 0)
}



window.addEventListener('click', (e) => {
  let categoryChosed

  switch (e.target.id) {
    case 'geography':
      categoryChosed = Geography
      break;
    case 'history':
      categoryChosed = History
      break;
    case 'music':
      categoryChosed = Music
      break;
    case 'sports':
      categoryChosed = Sports
      break;
    case 'television':
      categoryChosed = Television
      break;
    case 'languages':
      categoryChosed = Language
      break;
    case 'allChoses':
      categoryChosed = [...Geography, ...Music, ...Sports, ...Television, ...History, ...Language]
      QuestionsOrganization(allCategory)
      break;
    default: return

  }

  QuestionsOrganization(categoryChosed)
})
