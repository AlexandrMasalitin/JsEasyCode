/*
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object<Object> {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * listen(PORT, host) - в консоле должна отобразится надпись "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */
let ctx1 = {
  req: {
    PORT: 123,
    url: 'bla-bla'
  },
  res: {
    status: 555,
    message: 'hello',
    header: {
      'content-type': 'application/json'
    }
  }
};

function myFunk(ctx, next) {
  let param1 = ctx;
  let param2 = next;
  return function () {
    param2();
    console.log(param1)
  }
}
function Http() {

};


Http.prototype.createServer = function (func) {
  if (!this.funс) { this.func = func; }
  return this
};

Http.prototype.listen = function (port, host) {
  console.log(`Server running on https://${host}:${port}`);
  this.func();
  return this
};


const server = new Http().createServer(myFunk(ctx1, function () { alert('hi') })).listen(3000, 'localhost');
console.log(server);


/* TASK 1
//Создать класс Human, у которого будут свойства обычного человека: имя, возраст, пол, рост, вес.
//Используя прототипное наследование создать дочерние классы Worker (дописать в них поля места работы, зарплатой, метод "работать")
//и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
//Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human*/


function Human(name, age, sex, height, weight) {
  this.name = name,
    this.age = age,
    this.sex = sex,
    this.height = height,
    this.weight = weight
}

function Worker(placeOfWork, salary, name, age, sex, height, weight) {
  Human.call(this, name, age, sex, height, weight);
  this.placeOfWork = placeOfWork,
    this.salary = salary
}
function Student(placeOfStudy, scholarship, name, age, sex, height, weight) {
  Human.call(this, name, age, sex, height, weight);
  this.placeOfStudy = placeOfStudy,
    this.scholarship = scholarship
}

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.work = function () {
  console.log('I\'m working');
}
Student.prototype = Object.create(Human.prototype);
Student.prototype.watchSerials = function () {
  console.log('I\'m watching serials');
}

let a = new Student('HGU', 1000, 'Vasya', 17, 'male', 1.80, 80);
a.watchSerials();
console.log(a);
let b = new Worker('Google', 1000000, 'Masha', 25, 'female', 1.6, 50);
console.log(b);
b.work();
// @SUPER

/*
* TASK 0
* Создайте функцию обертку над другой функцией
* Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
* которую мы обернули
*
* */


function wrapper(one, two) {
  let param1 = one,
    param2 = two;
  this.myFunction = function () {
    console.log('argument1: ' + param1 + ', argument2: ' + param2);
  }
}
wrapper(1, 2);
myFunction();