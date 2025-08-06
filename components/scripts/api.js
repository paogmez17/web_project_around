class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //metodo generico

  makeRequest(endPoint, method, body = null) {
    return fetch(`${this._baseUrl}${endPoint}`, {
      method,
      headers: this._headers,
      body: body ? JSON.stringify(body) : undefined,
    }).then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  //Cargar la informacion del usuario

  getUserInfo() {
    return this.makeRequest("/users/me", "GET");
  }

  //Cargar las tarjetas

  getInitialCards() {
    return this.makeRequest("/cards", "GET");
  }

  //Editar perfil de usuario

  editUserInfo(data) {
    return this.makeRequest("/users/me", "PATCH", data);
  }

  // Agregar nueva tarjeta

  addNewCard(data) {
    return this.makeRequest("/cards", "POST", data);
  }

  //addLike
  addLike(cardId) {
    return this.makeRequest(`/cards/${cardId}/likes`, "PUT");
  }
  //removeLike

  removeLike(cardId) {
    return this.makeRequest(`/cards/${cardId}/likes`, "DELETE");
  }

  //eliminar card

  deleteCard(cardId) {
    return this.makeRequest(`/cards/${cardId}`, "DELETE");
  }

  //actualizar foto de perfil

  updateAvatar(avatarUrl) {
    return this.makeRequest("/users/me/avatar", "PATCH", {
      avatar: avatarUrl,
    });
  }
}

//instancia Api

export const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "3bdb4f5e-639b-4935-bfac-c5a2dcbc85bc",
    "Content-Type": "application/json",
  },
});
