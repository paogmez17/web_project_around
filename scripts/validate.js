/*

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
*/
