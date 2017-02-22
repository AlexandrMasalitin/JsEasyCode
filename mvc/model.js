function Model(data) {
  this.data = data;
}

// CRUD
// ------------
// CREATE
// READ
// UPDATE
// DELETE
Model.prototype.addItem = function(newItem) {
  if (!newItem.length) return;

  this.data.push(newItem);
}

// let dataBase = ['JS', 'MVC', 'React'];
// удалить по имени
// item - 'MVC'

Model.prototype.removeItem = function(item) {
  let index = this.data.indexOf(item);

  if (index === -1) return;

  this.data.splice(index, 1);
}
// let dataBase = ['JS', 'MVC', 'React'];
// 'JS' -> 'ES7'
Model.prototype.updateItem = function(oldName, newName) {
  let index = this.data.indexOf(oldName);
  if (!~index) return;

  this.data.splice(index, 1, newName);
}