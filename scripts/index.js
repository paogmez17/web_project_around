let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let exitButton = document.querySelector(".popup__exit");
let formElement = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__info-name");
let profileJob = document.querySelector(".profile__info-career");
let nameInput = document.querySelector("#nombre");
let jobInput = document.querySelector("#profesion");
const templateCard = document.querySelector("#element-content");
const sectionElement = document.querySelector(".element");

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

editButton.addEventListener("click", handleOpenPopup);
exitButton.addEventListener("click", ClosePopup);

initialCards.forEach(function (item) {
  createCard(item.name, item.link);
});

console.log(initialCards[0].link, initialCards[0].name);

function createCard(name, link) {
  const card = templateCard.content
    .querySelector(".element__content")
    .cloneNode(true);
  const cardName = card.querySelector(".element__name");
  cardName.textContent = name;
  const cardImage = card.querySelector(".element__grid");
  cardImage.src = link;
  sectionElement.append(card);
  console.log(card);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

function handleOpenPopup() {
  popup.classList.add("popup_opened");
  console.log("debe abrir el popup!");
}

function ClosePopup() {
  popup.classList.remove("popup_opened");
  console.log("debe cerrar el popup!");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
