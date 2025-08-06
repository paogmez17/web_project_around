import { Card } from "../components/scripts/Card.js";
import { FormValidator } from "../components/scripts/FormValidator.js";
import { validationConfig } from "../components/scripts/utils.js";
import { PopupWithImage } from "../components/scripts/PopupWithImage.js";
import { PopupWithForm } from "../components/scripts/PopupWithForm.js";
import { PopupWithConfirmation } from "../components/scripts/PopupWithConfirmation.js";
import { UserInfo } from "../components/scripts/UserInfo.js";
import { Section } from "../components/scripts/Section.js";
import { api } from "../components/scripts/api.js";

// --- QUERY SELECTORS ---
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const formCard = document.querySelector("#FormCard");
const nameInput = document.querySelector("#inputname");
const aboutInput = document.querySelector("#inputprofesion");
const sectionElement = document.querySelector("#elements");
const formProfile = document.querySelector("#FormProfile");
const avatarElement = document.querySelector(".profile__picture");

// --- USER INFO ---
const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  aboutSelector: ".profile__info-career",
  imageSelector: ".profile__picture",
});

// --- INSTANCIAS DE POPUPS (deben ir antes de createCard) ---
const popupEditProfile = new PopupWithForm(
  "#popup-profile",
  handleProfileFormSubmit
);
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm("#popup-place", handleSaveNewPlace);
popupAddCard.setEventListeners();

const confirmPopup = new PopupWithConfirmation("#popup-confirm");
confirmPopup.setEventListeners();

const imagePopup = new PopupWithImage("#popup-image");
imagePopup.setEventListeners();

const avatarPopup = new PopupWithForm("#popup-avatar", (formData) => {
  avatarPopup.setLoading(true); // ←

  api
    .updateAvatar(formData.avatar)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      avatarPopup.close();
    })
    .catch((err) => console.error("Error al actualizar avatar:", err))
    .finally(() => {
      avatarPopup.setLoading(false); // ←
    });
});
avatarPopup.setEventListeners();

// --- FUNCIONES ---
function openImagePopup(name, link) {
  imagePopup.open(name, link);
}

function createCard(item) {
  const isLiked = Array.isArray(item.likes)
    ? item.likes.some((like) => like._id === item.owner._id)
    : false;

  const card = new Card(
    item.name,
    item.link,
    "#card-template",
    openImagePopup,
    item._id,
    item.owner._id,
    item.likes,
    isLiked,
    confirmPopup
  );

  return card.setDataTemplate();
}

// --- API REQUESTS ---
api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo({
      name: data.name,
      about: data.about,
      image: data.avatar,
    });
  })
  .catch((err) => console.log(err));

api
  .getInitialCards()
  .then((cards) => {
    const section = new Section(
      {
        items: cards,
        renderer: (item) => {
          const cardElement = createCard(item);
          section.addItem(cardElement);
        },
      },
      ".elements"
    );

    section.renderItems();
  })
  .catch((err) => console.log("Error al obtener tarjetas:", err));

// --- EVENT LISTENERS ---
profileEditButton.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  nameInput.value = currentUser.name;
  aboutInput.value = currentUser.about;
  popupEditProfile.open();
});

profileAddButton.addEventListener("click", () => {
  popupAddCard.open();
});

document
  .querySelector(".profile__avatar-edit-button")
  .addEventListener("click", () => {
    avatarPopup.open();
  });

// --- FORM SUBMIT HANDLERS ---
function handleProfileFormSubmit(formData) {
  popupEditProfile.setLoading(true); //  muestra "Guardando...

  api
    .editUserInfo(formData)
    .then((data) => {
      userInfo.setUserInfo({
        name: formData.name,
        about: formData.about,
      });
      popupEditProfile.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupEditProfile.setLoading(false); // restaura texto original
    });
}

function handleSaveNewPlace(formData) {
  popupAddCard.setLoading(true); // ←

  api
    .addNewCard({
      name: formData.inputname,
      link: formData.inputlink,
    })
    .then((data) => {
      const card = new Card(
        data.name,
        data.link,
        "#card-template",
        openImagePopup,
        data._id
      );
      const cardElement = card.setDataTemplate();
      sectionElement.prepend(cardElement);
      popupAddCard.close();
    })
    .catch((err) => {
      console.error("Error al agregar nueva tarjeta:", err);
    })
    .finally(() => {
      popupAddCard.setLoading(false); // ←
    });
}

// --- VALIDADORES ---
const profileFormValidator = new FormValidator(validationConfig, formProfile);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(validationConfig, formCard);
cardFormValidator.enableValidation();
