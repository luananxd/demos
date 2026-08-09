const container = document.querySelector('.food__grid');

const products = [
  {
    title: 'Tomato',
    price: 10,
    src: './assets/tomato.png'
  },
  {
    title: 'Avocado',
    price: 39,
    src: './assets/avocado.png'
  },
  {
    title: 'Pepper',
    price: 15,
    src: './assets/pepper.png'
  },
  {
    title: 'Peach',
    price: 24,
    src: './assets/peach.png'
  },
  {
    title: 'Lemon',
    price: 20,
    src: './assets/lemon.png'
  },
  {
    title: 'Cherry',
    price: 20,
    src: './assets/cherry.png'
  },
];

function createCard(item) {
  const template = document.querySelector('#card');
  const clone = template.content.cloneNode(true);

  const icon = clone.querySelector('.card__icon');
  const title = clone.querySelector('.card__title');
  const price = clone.querySelector('.card__price output');

  icon.src = item.src;
  title.textContent = item.title;
  price.textContent = '$' + item.price;

  return clone;
}

products.forEach(product => {
  const card = createCard(product);
  container.appendChild(card);
})

const resizeObserver = new ResizeObserver(observe);
resizeObserver.observe(container)

function observe(entries) {
  entries.forEach(entry => {
    const container = entry.target;
    const width = entry.contentRect.width;

    if (width < 400) {
      container.style.height = 'auto'
      container.style.gridTemplateColumns = 'repeat(2, 1fr)'
      container.style.gridTemplateRows = '1fr'
    } else {
      container.style.height = ''
      container.style.gridTemplateColumns = ''
      container.style.gridTemplateRows = ''
    }
  })
}