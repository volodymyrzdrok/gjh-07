import { galleryItems } from "./gallery-items.js";

const refGalleryContainer = document.querySelector(".gallery");

refGalleryContainer.addEventListener("click", getModalImage);

function createGalleryMarkup(arrData) {
  return arrData
    .map(
      ({ description, original, preview }) =>
        `    <li class="gallery__item">
      <a href='#' class="gallery_link">
        <img src=${preview} alt=${description}  data-source=${original} class="gallery__image" />
      </a>
    </li>`
    )
    .join("");
}

refGalleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);

function getModalImage(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
       <img src=${e.target.dataset.source} alt="${e.target.alt}" >
    `,
    {
      onClose: () => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();

  window.addEventListener("keydown", closeModal);

  function closeModal(e) {
    if (e.code === "Escape") {
      instance.close();
      // window.removeEventListener("keydown", closeModal);
    }

    console.log("слухач працює ! на клавіатурі! ", e.code);
  }
}
