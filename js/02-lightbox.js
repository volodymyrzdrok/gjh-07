import { galleryItems } from "./gallery-items.js";

const refGalleryContainer = document.querySelector(".gallery");

function createGalleryMarkup(arrData) {
  return arrData
    .map(
      ({ description, original, preview }) =>
        `  
      <a href=${original} class="gallery_item">
        <img src=${preview} alt=${description}  data-source=${original} class="gallery__image" />
      </a>
    `
    )
    .join("");
}

refGalleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
