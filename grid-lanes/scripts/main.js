
// Without Masonry: 4.22 Kb
// With Masonry: 4.22 + 16.4 Kb

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src;

    script.onload = resolve
    script.onerror = reject

    document.body.appendChild(script);
  })
}

if (!CSS.supports('display', 'grid-lanes')) {
  loadScript('https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js')
    .then(() => {
      const galleryGrid = document.querySelector('.gallery__grid');

      const masonry = new Masonry(galleryGrid, {
        itemSelector: '.gallery__image',
        gutter: 8,
      });
    })
}