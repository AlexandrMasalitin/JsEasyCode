// TASK 1
// Отобразите достаточно ли developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого разработчика метод goodDev
/*
 Количество требований к разработчику совпадает с его навыками.
 
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requires: ['Node.js', 'JavaScript', 'OOP'],
  goodDev
};

let developer2 = {
  experience: [{
    technology: 'java'
  }, {
    technology: 'c++'
  }, {
    technology: 'aws'
  }, {
    technology: 'docker'
  }],
  requires: ['java', 'json', 'c++', 'JavaScript'],
  goodDev
};

let developers = [developer1, developer2];

function goodDev(obj) {
  let tempObj = {};
  let required = this.requires;
  let skills;

  if (this.skills) {
    console.log('developer1');
    skills = this.skills;
    for (let i = 0; i < required.length; i++) {
      for (let j = 0; j < skills.length; j++) {
        if (required[i] === skills[j]) {
          tempObj[required[i]] = 'success';
          break
        } else {
          tempObj[required[i]] = 'fail';
          continue
        }
      }
    }
  }
  if (this.experience) {
    console.log('developer2');
    skills = this.experience;
    for (let i = 0; i < required.length; i++) {
      for (let j = 0; j < skills.length; j++) {
        if (required[i] === skills[j].technology) {
          tempObj[required[i]] = 'success';
          break
        } else {
          tempObj[required[i]] = 'fail';
          continue
        }
      }
    }
  }
  for (let key in tempObj) {
    console.log('required: ' + key + ' ... ' + tempObj[key]);
  }
}


developers.forEach(dev => dev.goodDev(developers));
// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---
// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success


/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми свойстами и разными значениями!
 * Создайте функция которая сортирует объект по заданному свойству
 * При вызове функции используйте this
 *
 *
 * */
let myObject = [{
  'age': 10,
  'name': 'Tolya'
}, {
  'age': 15,
  'name': 'Sergey'
}, {
  'age': 25,
  'name': 'Anton'
}, {
  'age': 40,
  'name': 'Kolya'
}];
//{age:10, name:'b'}, {age:15, name:'c'} {age:25, name:'A'}

function myFilter(property) {

};
myObject.myFilter('age');
myObject.myFilter('name');