// Mostrar mensaje de error

function showInputError(formElement, formInput, errorMessage) {
  const errorElement = formElement.querySelector(`#${formInput.id}-error`);
  formInput.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_visible");
}

// Ocultar mensaje de error

function hideInputError(formElement, formInput) {
  const errorElement = formElement.querySelector(`#${formInput.id}-error`);
  formInput.classList.remove("popup__input_type_error");
  errorElement.textContent = "";
  errorElement.classList.remove("popup__input-error_visible");
}

// Verificar si un input es válido
function checkInputValidity(formElement, formInput) {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    hideInputError(formElement, formInput);
  }
}

// Verificar si hay inputs inválidos
function hasInvalidInput(inputList) {
  return inputList.some((formInput) => !formInput.validity.valid);
}

// Habilitar o deshabilitar el botón
function toggleButtonState(inputList, buttonElement) {
  buttonElement.disabled = hasInvalidInput(inputList);
}

// Asignar listeners a los inputs de un formulario
function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");

  inputList.forEach((formInput) => {
    formInput.addEventListener("input", function () {
      checkInputValidity(formElement, formInput);
      toggleButtonState(inputList, buttonElement);
    });
  });

  toggleButtonState(inputList, buttonElement); // Estado inicial del botón
}

// Función principal que activa validación en todos los formularios
function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
}

// Llamamos la función para activar validación en todos los formularios
enableValidation();
