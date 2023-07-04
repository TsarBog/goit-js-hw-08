// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const collection = document.querySelector('.gallery');
function createGalerryMarkup(arr){
    return arr.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
}
collection.insertAdjacentHTML('afterbegin', createGalerryMarkup(galleryItems));
collection.addEventListener('click', handlerImg) 

function handlerImg(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('gallery__item')) {
        return;
    } 
};

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  navText: ['<', '>'],
});


