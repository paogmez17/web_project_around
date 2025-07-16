import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig } from "./utils.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

export const imgPopupElement = document.querySelector(".popup__img");
export const titlePopupElement = document.querySelector(".popup__img-title");
export const popupImage = document.querySelector("#popup-image");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const formCard = document.querySelector("#FormCard");
const nameInput = document.querySelector("#inputname");
const jobInput = document.querySelector("#inputprofesion");
const sectionElement = document.querySelector("#elements");

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

initialCards.forEach(({ name, link }) => {
  const card = new Card(name, link, "#card-template", openImagePopup);
  const cardElement = card.setDataTemplate();
  sectionElement.prepend(cardElement);
});

const formProfile = document.querySelector("#FormProfile");

//Instancias FormValidator

const profileFormValidator = new FormValidator(validationConfig, formProfile);

profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(validationConfig, formCard);

cardFormValidator.enableValidation();

// Instancias de Popup para cada popup del HTML

const popupEditProfile = new PopupWithForm(
  "#popup-profile",
  handleProfileFormSubmit
);
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm("#popup-place", handleSaveNewPlace);
popupAddCard.setEventListeners();

// Abrir popup editar perfil
profileEditButton.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  nameInput.value = currentUser.name;
  jobInput.value = currentUser.about;
  popupEditProfile.open();
});

// Abrir popup nuevo lugar
profileAddButton.addEventListener("click", () => {
  popupAddCard.open();
});

//Instancias PopupWithImage

const imagePopup = new PopupWithImage("#popup-image");
imagePopup.setEventListeners();

function openImagePopup(name, link) {
  imagePopup.open(name, link);
}

//

function handleProfileFormSubmit(formData) {
  userInfo.setUserInfo({
    name: formData.name,
    about: formData.about,
  });
  popupEditProfile.close();
}

function handleSaveNewPlace(formData) {
  const card = new Card(
    formData.title,
    formData.link,
    "#card-template",
    openImagePopup
  );
  const cardElement = card.setDataTemplate();
  sectionElement.prepend(cardElement);

  popupAddCard.close();
}

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-career",
});
