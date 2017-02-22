class View {
  constructor(data) {
    this.init();
    this.render(data);
  }

  init() {
    this.elements = {
      list: document.querySelector('.list-item'),
      add: document.querySelector('.btn'),
      input: document.querySelector('.input')
    }
  }

  render(data) {
    // let {list, input} = this.elements;
    this.elements.list.innerHTML = data.reduce((row, item) => {
      return row += `<li>${item}</li>`
    }, '')
    this.elements.input.value = '';
  }
}