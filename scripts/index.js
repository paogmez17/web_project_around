let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let exitButton = document.querySelector(".popup__exit");

function handleOpenPopup() {
  popup.classList.add("popup_opened");
  console.log("debe abrir el popup!");
}

function ClosePopup() {
  popup.classList.remove("popup_opened");
  console.log("debe cerrar el popup!");
}

editButton.addEventListener("click", handleOpenPopup);
exitButton.addEventListener("click", ClosePopup);

let formElement = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__info-name");
let profileJob = document.querySelector(".profile__info-career");
let nameInput = document.querySelector("#nombre");
let jobInput = document.querySelector("#profesion");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

formElement.addEventListener("submit", handleProfileFormSubmit);
