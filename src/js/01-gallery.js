import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const containerGallery = document.querySelector('.gallery');

function createGalleryMarkup(item) {
  return item
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
      <img loading="lazy" class="gallery__image" src="${preview}" 
      alt="${description}" width="350"
      height="240"" style="display: block"/>
    </a> 
    `
    )
    .join('');
}
containerGallery.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);
const modalLightbox = new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
  });