/* TASK 1
//Создать класс Human, у которого будут свойства обычного человека: имя, возраст, пол, рост, вес.
//Используя прототипное наследование создать дочерние классы Worker (дописать в них поля места работы, зарплатой, метод "работать")
//и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
//Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human*/

class Human {
  constructor(name, age, sex, height, weight) {
    this.name = name,
      this.age = age,
      this.sex = sex,
      this.height = height,
      this.weight = weight
  }
}

class Worker extends Human {
  constructor(name, age, sex, height, weight, placeOfWork, salary) {
    super(...arguments);
    this.placeOfWork = placeOfWork,
      this.salary = salary
  }
  work() {
    console.log('I\'m working');
  }
}

class Student extends Human {
  constructor(name, age, sex, height, weight, placeOfStudy, scholarship) {
    super(...arguments);
    this.placeOfStudy = placeOfStudy,
      this.scholarship = scholarship
  }
  watchSerials() {
    console.log('I\'m watching serials');
  }
}


let a = new Student('Vasya', 17, 'male', 1.80, 80, 'HGU', 1000);
a.watchSerials();
console.log(a);
let b = new Worker('Masha', 25, 'female', 1.6, 50, 'Google', 1000000);
console.log(b);
b.work();

/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */

let startTimer = () => {
  //debugger


  let timer = 10000;
  let serverResponse = (i) => {
    return setTimeout(function () {
      console.log(i);
    }, timer = timer / 2);
  };
  for (let i = 10; i >= 1; i--) {
    serverResponse(i);
    timer *= 2;

  }

}
startTimer();

// @ SUPER
/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query:Function() :string
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз), таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
  constructor() {
    let timerID;
    this.query = function () {
      if (timerID) {
        clearTimeout(timerID)
      }
      timerID = setTimeout(function () {
        console.log('The web server is down');
      }, 5000)
    }
  }
}
DataBase.prototype.query
const dataBase = new DataBase();
dataBase.query();