'use strict';
// импортирую галлерею
import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');
const modal = document.querySelector('.lightbox');
const modalImg = document.querySelector('.lightbox__image');
const closeBtnModal = document.querySelector('[data-action="close-lightbox"]');
const modalCloseOver = document.querySelector('.lightbox__content');

// добавляю изображение
const galleryItem = galleryItems.reduce((allItems, item) => {
	allItems += `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.origonal}"
      alt="${item.description}"
    />
  </a>
</li>`;
	return allItems;
}, '');
galleryList.insertAdjacentHTML('afterbegin', `${galleryItem}`);

// открытие модалки
galleryList.addEventListener('click', (e) => {
	event.preventDefault();
	if (e.target === e.currentTarget) return;
	const imgLink = e.target.getAttribute('data-source');
	const imgText = e.target.getAttribute('alt');
	modalImg.setAttribute('src', imgLink);
	modalImg.setAttribute('alt', imgText);
	modal.classList.add('is-open');
});

// закрытие модального окна
function closeMod() {
	modalImg.setAttribute('src', '');
	modalImg.setAttribute('alt', '');
	modal.classList.remove('is-open');
}

// закрытие по клику на кнопку button
closeBtnModal.addEventListener('click', () => {
	closeMod();
});

// закрытие по клику на div.lightbox__overlay
modalCloseOver.addEventListener('click', (e) => {
	if (e.target !== e.currentTarget) {
		return;
	}
	closeMod();
});
