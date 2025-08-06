import { api } from "./api.js";
export class Card {
  constructor(
    name,
    link,
    templateSelector,
    handleCardClick,
    id,
    userId,
    likes,
    isLiked,
    confirmPopup
  ) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._id = id;
    this._userId = userId;
    this._likes = likes;
    this._isLiked = isLiked;
    this._confirmPopup = confirmPopup;
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
    this.deleteButton = this.element.querySelector(".card__delete-button");
    this.cardImage = this.element.querySelector(".card__image");

    // Marcar si ya tiene like
    if (this._isLiked) {
      this.likeButton.classList.add("card__like-button--active");
    }

    this.likeButton.addEventListener("click", () => {
      const isLiked = this.likeButton.classList.contains(
        "card__like-button--active"
      );

      const action = isLiked ? api.removeLike(this._id) : api.addLike(this._id);

      action
        .then(() => {
          this.likeButton.classList.toggle("card__like-button--active");
        })
        .catch((err) => {
          console.error("Error al alternar like:", err);
        });
    });

    this.deleteButton.addEventListener("click", () => {
      this._confirmPopup.setSubmitAction(() => {
        api
          .deleteCard(this._id)
          .then(() => {
            this.element.remove();
            this._confirmPopup.close();
          })
          .catch((err) => console.error("Error al eliminar:", err));
      });
      this._confirmPopup.open(); // Aquí usa this._confirmPopup
    });

    this.cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
