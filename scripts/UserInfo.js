export class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  // Devuelve un objeto con la info actual visible del usuario
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._jobElement.textContent,
    };
  }

  // Actualiza la info visible en la página con un objeto nuevo
  setUserInfo({ name, about }) {
    if (name) this._nameElement.textContent = name;
    if (about) this._jobElement.textContent = about;
  }
}
