export class UserInfo {
  constructor({ nameSelector, aboutSelector, imageSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
    this._imageElement = document.querySelector(imageSelector);
  }

  // Devuelve un objeto con la info actual visible del usuario
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
  }

  // Actualiza la info visible en la página con un objeto nuevo
  setUserInfo({ name, about, image }) {
    if (name) this._nameElement.textContent = name;
    if (about) this._aboutElement.textContent = about;
    if (image) this._imageElement.src = image;
  }

  // Método para actualizar el avatar en el DOM
  setUserAvatar(avatarUrl) {
    this._imageElement.src = avatarUrl;
  }
}
