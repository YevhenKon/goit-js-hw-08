import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const makeGalleryItems = galleryItem => {
    const { original, preview, description } = galleryItem;
    
    return `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
   </a>
</li>`
}

const makeGalleryPictures = galleryItems.map(makeGalleryItems).join('')

const galleryElements = document.querySelector('.gallery')

galleryElements.insertAdjacentHTML('afterbegin', makeGalleryPictures)

galleryElements.addEventListener('click', (evt) => {
    evt.preventDefault()

    if (evt.target.tagName !== 'IMG') {
        return
    }
})

const lightbox = new SimpleLightbox('.gallery a',
        {
            captionsData: 'alt',
            captionDelay: 250
        });


