/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

/*let $ = function (str) {
  let tag = str;
  let newTag = `<${str}></${str}>`;
  return newTag
};
let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); //<body></body>
console.log(createDIV); //<div></div>
/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
 * *
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки*/

/*let ezjQuery = {
  newTag: '',
  add(str) {
    console.log(this.createTag(str));
    return this
  },
  createTag(str) {
    return this.newTag = this.newTag + `<${str}></${str}>`;
  }
}
let xxx = ezjQuery.add('body') // <body></body>  * в консоле
  .add('div') //<body></body><div></div>
  .add('hello') //<body></body><div></div><hello></hello>
  .add('li', 'dadada') //<body></body><div></div><li></li>
    //.render();*/

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри предыдущего !
 * И добавьте объекту ezjQuery метод render, который будет возвращать сгенерированную строку
 * Методу new, второй параметр, который будет размещать информацию внутри тэга
 *
 *
 example
 var helloList = ezjQuery.add('body') //<body></body>
 .add('div') //<body><div></div></body>
 .add('ul') //<body><div><ul></ul></div></body>
 .add('li', 'Hello'); //<body><div><ul><li>Hello</li></ul></div></body>
 .render()
 console.log(helloList) // <body><div><ul><li>Hello</li></ul></div></body>
 Обратите внимание, что после вызова render создание строки началось сначала
 
 var bodyDiv = ezjQuery.add('body') //<body></body>
 .add('div') //<body><div></div></body>
 .render()
 console.log(bodyDiv) //<body><div></div></body>
 
 */

let ezjQuery = {
	newTag: '',
	openTag: '',
	closeTag: '',
	add(str, value) {
		console.log(this.createTag(str, value));
		return this
	},
	createTag(str, value) {
		this.openTag = this.openTag + `<${str}>`;
		this.closeTag = `</${str}>` + this.closeTag;
		if (!value) {
			this.newTag = this.openTag + this.closeTag;
		} else {
			this.newTag = this.openTag + value + this.closeTag;
		}
		return this.newTag
	},
	render() {
		let newString = this.newTag;
		this.newTag = '';
		this.openTag = '';
		this.closeTag = '';
		return newString
	}
}
var helloList = ezjQuery.add('body').add('div').add('ul').add('li', 'Hello').render();
document.write(helloList)


// @SUPER
/*
 * Переименуйте объект ezjQuery в $. Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 *
 *
 * */
function $(str) {
	return {
		openTag: `<${str}>`,
		closeTag: `</${str}>`,
		add(str, value) {
			console.log(this.createTag(str, value));
			return this
		},
		createTag(str, value) {
			this.openTag = this.openTag + `<${str}>`;
			this.closeTag = `</${str}>` + this.closeTag;
			if (!value) {
				this.newTag = this.openTag + this.closeTag;
			} else {
				this.newTag = this.openTag + value + this.closeTag;
			}
			return this.newTag
		},
		render() {
			let newString = this.newTag;
			this.newTag = '';
			this.openTag = '';
			this.closeTag = '';
			return newString
		}
	}
}
$('body').add('li', 'hi').render()