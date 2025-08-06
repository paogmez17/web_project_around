export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(
      formElement.querySelectorAll(config.inputSelector)
    );
    this._buttonElement = formElement.querySelector(
      config.submitButtonSelector
    );

    this._setEventListeners();
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        this._formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(this._formElement, inputElement);
    }
  }

  // Mostrar mensaje de error

  _showInputError(formSelector, inputSelector, errorMessage) {
    const errorElement = formSelector.querySelector(
      `#${inputSelector.id}-error`
    );
    inputSelector.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error_visible");
  }

  // Ocultar mensaje de error

  _hideInputError(formSelector, inputSelector) {
    const errorElement = formSelector.querySelector(
      `#${inputSelector.id}-error`
    );
    inputSelector.classList.remove("popup__input_type_error");
    errorElement.textContent = "";
    errorElement.classList.remove("popup__input-error_visible");
  }

  _setEventListeners() {
    this._inputList.forEach((inputSelector) => {
      inputSelector.addEventListener("input", () => {
        this._checkInputValidity(inputSelector);
        this._toggleButtonState();
      });
    });

    this._toggleButtonState(); // Estado inicial del botón
  }

  _toggleButtonState() {
    this._buttonElement.disabled = this._hasInvalidInput(this._inputList);
  }

  // Verificar si hay inputs inválidos
  _hasInvalidInput() {
    return this._inputList.some(
      (inputSelector) => !inputSelector.validity.valid
    );
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
