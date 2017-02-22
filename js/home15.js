// TASK 0
// Проверьте что строка содержит все символы от "a" до "z";



const solution = (str) => {
	if (/^[a-z]{11,20}/.test(str)) {
		return console.log('true');

	} else {
		return console.log('false');
	}

};


solution("wyyga") // false
solution("qwertyuioplkjhgfdsazxcvbnm") // true
solution("ejuxggfsts") // false
solution("qpwoeirutyalskdjfhgmznxbcv") // true
solution("0123456789abcdefghijklmnop") // false


// 2. Напишите функция которая преобразовывает открывает скобки всех 
// вложенных внутри массивов
// Необходимо реализовать рекурсивный фызов функции.
// Функция должна открывать любое количество внутренних массивов и объектов


function parse(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) {
			newArr.push(arr[i]);
		}
		if (Array.isArray(arr[i])) {
			newArr = newArr.concat(parse(arr[i]));
		}
	}
	return newArr
}
console.log(parse([25, 10, [10, [15]]]));
console.log(parse([
	[1, 2],
	[3, [4]], 5, 10
]));
console.log(parse([1, [2, [{
	a: "b"
}]]]));


// parse:
// [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
// [25,10,[10,[15]]] => [25,10,10,15]
// [1, [2, [{:a "b"}]]] => [1, 2, {:a "b"}]



/*
Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
Первый макет.
https://github.com/ilyaphilin/referenceBook/blob/dev/index.html
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html

*/