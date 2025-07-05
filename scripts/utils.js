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

// Habilitar o deshabilitar el botón

export function toggleButtonState(inputList, submitButtonSelector) {
  submitButtonSelector.disabled = hasInvalidInput(inputList);
}

// Verificar si hay inputs inválidos
function hasInvalidInput(inputList) {
  return inputList.some((inputSelector) => !inputSelector.validity.valid);
}

export function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formSelector) => {
    setEventListeners(formSelector);
  });
}
