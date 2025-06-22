const popupProfile = document.querySelector("#popup-profile");
const popupPlace = document.querySelector("#popup-place");
const popupImage = document.querySelector("#popup-image");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const popupProfileCloseBtn = document.querySelector(
  "#popup-profile-close-button"
);
const popupPlaceCloseBtn = document.querySelector("#popup-place-close-button");
const formInput = document.querySelectorAll(".popup__input");
const profileAdd = document.querySelector(".popup__button");
const formElement = document.querySelector(".popup__form");
const formCard = document.querySelector("#FormCard");
const profileName = document.querySelector(".profile__info-name");
const profileJob = document.querySelector(".profile__info-career");
const saveButton = document.querySelector("#save");
const nameInput = document.querySelector("#inputname");
const jobInput = document.querySelector("#inputprofesion");
const titleInput = document.querySelector("#inputtitle");
const linkInput = document.querySelector("#inputlink");
const sectionElement = document.querySelector("#elements");
const createButton = document.querySelector("#create");
const templateCard = document.querySelector("#card-template");
const image = document.querySelector("#popImageImg");
const imgPopupElement = document.querySelector(".popup__img");
const titlePopupElement = document.querySelector(".popup__img-title");
const popupImageCloseBtn = document.querySelector("#popup-image-close-button");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
const popupValidationName = formElement.querySelector("#inputname-error");
const popupValidationProfession = formElement.querySelector(
  "#inputprofesion-error"
);
const inputErrorTitle = formElement.querySelector("#inputtittle-error");
const inputErrorUrl = document.querySelector("#inputlink-error");
const popups = document.querySelectorAll(".popup");

// Event Listener

editButton.addEventListener("click", handleOpenProfilePopup);
popupProfileCloseBtn.addEventListener("click", closePopupProfile);
popupPlaceCloseBtn.addEventListener("click", closePopup);
addButton.addEventListener("click", handleOpenPlaceForm);
profileAdd.addEventListener("click", handleProfileFormSubmit);
createButton.addEventListener("click", handleSaveNewPlace);
saveButton.addEventListener("click", closePopupProfile);
createButton.addEventListener("click", closePopupPlace);
popupImageCloseBtn.addEventListener("click", closePopup);

initialCards.forEach(function (item) {
  createCard(item.name, item.link);
});

function createCard(name, link) {
  const card = templateCard.content.querySelector(".card").cloneNode(true);

  const cardName = card.querySelector(".card__title");
  cardName.textContent = name;

  const cardImage = card.querySelector(".card__image");
  cardImage.src = link;
  cardImage.alt = `Imagen de ${name}`;
  cardImage.addEventListener("click", function () {
    openPopupImage(link, name);
  });

  const likeButton = card.querySelector(".card__like-button");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__like-button--active");
  });

  const deleteButton = card.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    card.remove();
  });

  sectionElement.prepend(card);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

function handleOpenProfilePopup() {
  popupProfile.classList.add("popup_opened");
}

function handleOpenPlaceForm() {
  popupPlace.classList.add("popup_opened");
}

function closePopup() {
  popupProfile.classList.remove("popup_opened");
  popupPlace.classList.remove("popup_opened");
  popupImage.classList.remove("popup_opened");
}

function closePopupProfile() {
  popupProfile.classList.remove("popup_opened");
}

function closePopupPlace() {
  popupPlace.classList.remove("popup_opened");
}

function handleSaveNewPlace(evt) {
  evt.preventDefault();
  const title = titleInput.value;
  const link = linkInput.value;
  createCard(title, link);
  titleInput.value = "";
  linkInput.value = "";
}

function openPopupImage(link, name) {
  popupImage.classList.add("popup_opened");
  imgPopupElement.src = link;
  titlePopupElement.textContent = name;
}

popups.forEach((popup) => {
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.classList.remove("popup_opened");
    }
  });
});

function closeAllPopups() {
  popups.forEach((popup) => {
    popup.classList.remove("popup_opened");
  });
}

function handleEscClose(e) {
  if (e.key === "Escape") {
    const isAnyPopupOpen = [...popups].some((popup) =>
      popup.classList.contains("popup_opened")
    );
    if (isAnyPopupOpen) {
      closeAllPopups();
    }
  }
}
document.addEventListener("keydown", handleEscClose);
