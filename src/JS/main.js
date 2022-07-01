import { Geography } from './Questions/Geography.js'
import { History } from './Questions/History.js'
import { Language } from './Questions/Language.js'
import { Music } from './Questions/Music.js'
import { Sports } from './Questions/Sports.js'
import { Television } from './Questions/Television.js'

import { cardsCreate, shuffleArray } from './Cards/cardsCreate.js'

export let Questions = []

const QuestionsOrganization = (QuestionChossed) => {


  Questions = shuffleArray(QuestionChossed)
  cardsCreate(Questions[0], 0, 0)
}

window.addEventListener('click', (e) => {
  let categoryChoosed

  switch (e.target.id) {
    case 'geography':
      categoryChoosed = Geography
      break;
    case 'history':
      categoryChoosed = History
      break;
    case 'music':
      categoryChoosed = Music
      break;
    case 'sports':
      categoryChoosed = Sports
      break;
    case 'television':
      categoryChoosed = Television
      break;
    case 'languages':
      categoryChoosed = Language
      break;
    case 'allChoses':
      categoryChoosed = [...Geography, ...Music, ...Sports, ...Television, ...History, ...Language]
      break;
    default: return
  }

  QuestionsOrganization(categoryChoosed)
})
