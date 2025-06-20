const settigns = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// Mostrar mensaje de error

function showInputError(formSelector, inputSelector, errorMessage) {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_visible");
}

// Ocultar mensaje de error

function hideInputError(formSelector, inputSelector) {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.remove("popup__input_type_error");
  errorElement.textContent = "";
  errorElement.classList.remove("popup__input-error_visible");
}

// Verificar si un input es válido
function checkInputValidity(formSelector, inputSelector) {
  if (!inputSelector.validity.valid) {
    showInputError(
      formSelector,
      inputSelector,
      inputSelector.validationMessage
    );
  } else {
    hideInputError(formSelector, inputSelector);
  }
}

// Verificar si hay inputs inválidos
function hasInvalidInput(inputList) {
  return inputList.some((inputSelector) => !inputSelector.validity.valid);
}

// Habilitar o deshabilitar el botón
function toggleButtonState(inputList, submitButtonSelector) {
  submitButtonSelector.disabled = hasInvalidInput(inputList);
}

// Asignar listeners a los inputs de un formulario
function setEventListeners(formSelector) {
  const inputList = Array.from(formSelector.querySelectorAll(".popup__input"));
  const submitButtonSelector = formSelector.querySelector(".popup__button");

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", function () {
      checkInputValidity(formSelector, inputSelector);
      toggleButtonState(inputList, submitButtonSelector);
    });
  });

  toggleButtonState(inputList, submitButtonSelector); // Estado inicial del botón
}

// Función principal que activa validación en todos los formularios
function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formSelector) => {
    setEventListeners(formSelector);
  });
}

// Llamamos la función para activar validación en todos los formularios
enableValidation();
