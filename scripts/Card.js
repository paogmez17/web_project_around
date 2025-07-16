export class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick; // función para abrir el popup
  }

  _cloneTemplate() {
    const template = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return template;
  }

  setDataTemplate() {
    this.element = this._cloneTemplate();
    this.element.querySelector(".card__image").src = this._link;
    this.element.querySelector(".card__image").alt = this._name;
    this.element.querySelector(".card__title").textContent = this._name;

    this._setEventListeners(); //  aquí agrupa todos los eventos

    return this.element;
  }

  _setEventListeners() {
    this.likeButton = this.element.querySelector(".card__like-button");
    this.likeButton.addEventListener("click", () => {
      this.likeButton.classList.toggle("card__like-button--active");
    });
    this.deleteButton = this.element.querySelector(".card__delete-button");
    this.deleteButton.addEventListener("click", () => {
      this.element.remove();
    });

    this.cardImage = this.element.querySelector(".card__image");
    this.cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
