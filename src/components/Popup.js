export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this); // asegurar el contexto
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose); // activar ESC
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose); // limpiar
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    // Cerrar al hacer clic en el botón de cerrar
    const closeButton = this._popup.querySelector(".popup__exit");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        this.close();
      });
    }

    // Cerrar al hacer clic fuera del contenido (overlay)
    this._popup.addEventListener("mousedown", (e) => {
      if (e.target === this._popup) {
        this.close();
      }
    });
  }
}
