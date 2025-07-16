import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector); // llama al constructor de la clase padre
    this._image = this.popup.querySelector(".popup__img"); // el <img>
    this._caption = this.popup.querySelector(".popup__img-title"); // el texto
  }

  open(name, link) {
    this._image.src = link;
    this._image.alt = name;
    this._caption.textContent = name;
    super.open(); // llama al método open original del padre
  }
}
