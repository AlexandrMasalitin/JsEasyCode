(function() {
  let dataBase = ['JS', 'MVC', 'React'];

  // dataBase = localStorage
  // new View -> получить данные из localStorage;

  let model = new Model(dataBase);
  let view = new View(dataBase);
  // dataBase -> первое отображение
  let controller = new Controller(model, view);
})();