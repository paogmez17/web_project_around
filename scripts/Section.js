class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // Método que recorre todos los items y los renderiza
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item); // llama a renderer pasando cada item
    });
  }

  // Método para agregar un solo elemento del DOM al contenedor
  addItem(element) {
    this._container.prepend(element);
  }
}
