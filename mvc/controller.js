function Controller(model, view) {
  this.model = model;
  this.view = view;
  this.init();
}

Controller.prototype.init = function() {
  let { add } = this.view.elements;
  add.addEventListener('click', this._addItem.bind(this));
};


Controller.prototype._addItem = function() {
  // input
  // add
  // list
  let { input } = this.view.elements;
  let value = input.value;
  this.model.addItem(value);
  this.view.render(this.model.data);
};
// Добавьте метод который будет получать данные из input