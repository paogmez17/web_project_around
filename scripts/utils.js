import { popupImage, imgPopupElement, titlePopupElement } from "./index.js";

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export function openPopupImage(link, name) {
  popupImage.classList.add("popup_opened");
  imgPopupElement.src = link;
  titlePopupElement.textContent = name;
}
