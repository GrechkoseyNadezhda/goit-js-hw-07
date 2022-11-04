import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryCollection = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </div>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryCollection);

gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.tagName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source} width="800" height="600">`
  );

  instance.show();

  gallery.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
});
