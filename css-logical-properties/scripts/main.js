import { ENGLISH, HEBREW, CHINESE } from './dictionary.js';

const cardsBlock = document.querySelector(".properties__cards");
const cards = document.querySelectorAll('.properties__card');

const englishButton = document.querySelector('#english');
const hebrewButton = document.querySelector('#hebrew');
const chineseButton = document.querySelector('#chinese');

function getDictionary(language) {
  if (language === 'english') return ENGLISH
  if (language === 'hebrew') return HEBREW
  if (language === 'chinese') return CHINESE
}

function applyDictionary(card, language) {
  const dictionary = getDictionary(language);

  const title = card.querySelector('.card__title');
  const description = card.querySelector('.card__description');
  const status = card.querySelector('.card__status');
  const date = card.querySelector('data');

  console.log()

  title.textContent = dictionary.title
  description.textContent = dictionary.description
  status.textContent = dictionary.status
  date.textContent = dictionary.date
}

function applyTextDirection(card, language) {
  card.classList.remove('english');
  card.classList.remove('hebrew');
  card.classList.remove('chinese');

  card.classList.add(language);
}

englishButton.addEventListener('click', () => {
  cards.forEach(card => {
    applyDictionary(card, 'english');
    applyTextDirection(card, 'english');
  })
})

hebrewButton.addEventListener('click', () => {
  cards.forEach(card => {
    applyDictionary(card, 'hebrew');
    applyTextDirection(card, 'hebrew');
  })
})

chineseButton.addEventListener('click', () => {
  cards.forEach(card => {
    applyDictionary(card, 'chinese');
    applyTextDirection(card, 'chinese');
  })
})