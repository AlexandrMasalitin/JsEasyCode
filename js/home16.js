// Task 0
// Реализуйте функцию которая будет превращать трехмерный массив в двухмерный
// а если массив двухмерный, тогда в трехмерный массив

function solution(arr) {
   var newArr = [];
  var arrAdd = [];
  if(arr.length % 2 !== 0) {
    for(var i = 0; i<arr.length; i++) {
      newArr = newArr.concat(arr[i]);
      newArr.sort();
    }
    for(var j = 0; j<newArr.length; j += 3) {
      arrAdd.push(newArr.slice(j, j+3))
    }
      
  } if (arr.length % 2 === 0) {
  	  for(var i = 0; i<arr.length; i++) {
      newArr = newArr.concat(arr[i]);
        newArr.sort();
    }
      for(var k = 0; k<newArr.length; k += 2) {
      arrAdd.push(newArr.slice(k, k+2))
    }
  
  } if(arr.length === 0) {
  	return newArr;
  }
  return arrAdd;
}

console.log(solution([ [1, 'a'],[2, 'b'],[3, 'c'] ]));
// => [[1, 2, 3],[a, b, c]]
console.log(solution([ [1, 3, 5],[2, 4, 6] ]));
// \=> [ [1, 2],[3, 4],[5, 6] ]
console.log(solution([[]]));
 // => []


/* Task 1
Визуализируйте массив, если в коллекции есть свойство children, тогда создайте вложенный лист
name - свойство h1
children ul->li
Используйте innerHTML
*/
const navigation = [{
	name: 'Главная'
}, {
	name: 'Каталог',
	children: [{
		name: 'Компьютеры',
		children: [{
			name: 'Ноутбуки'
		}, {
			name: 'Планшеты'
		}]
	}]
}, {
	name: 'Профиль'
}];



(function visualArray() {
	var empty = '<ul>';
	var empty2 = '<ul>';
	var empty3 = '<ul>';
	var allEmpty;

	for (var i = 0; i < navigation.length; i++) {
		empty += '<li>' + '<h1>' + navigation[i].name + '</h1>' + '</li>';
		var list2 = navigation[i].children;
		for (var key in list2) {

			var comp = list2[key].name;
			empty2 += '<li>' + '<h1>' + comp + '</h1>' + '</li>'
				// console.log(comp)
			var child2 = list2[key].children;
			for (var j = 0; j < child2.length; j++) {
				var childComp = child2[j];
				empty3 += '<li>' + '<h1>' + childComp.name + '</h1>' + '</li>';

			};
		};
	}

	allEmpty = empty + empty2 + empty3;
	document.body.innerHTML = allEmpty;
})();

// 1. Форкните репозиторий Саши.
// Добавьте скрипт который будет рисовать всю таблицу.