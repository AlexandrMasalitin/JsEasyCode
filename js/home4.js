/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
*/


function numbersBetween(a, b) {
	let x = [];
	for (let u = a + 1; u < b; u++) {
		x.push(u);
	}
	return x;

};
console.log(numbersBetween(1, 5));
console.log(numbersBetween(3, 6));
console.log(numbersBetween(12, 15));

/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
     Расчет чисел должен идти до 100
*/
function fizzBuzz100(num) {
	let str = '';
	while (num <= 100) {
		if (num % 3 == 0) {
			str = str + 'Fizz';
		}
		if (num % 5 == 0) {
			str = str + 'Buzz';
		}
		if (!str.length) {
			return num;
		}
		return str;
	}
};
fizzBuzz100(1);



// цикл
// fizzBuzz(число)


/*
 3. Напишите функцию которая принимает 1 аргумент - массив 
   И возвращает новый массив содержащий типы значений переменных
*/

let dz = ['Alex', 23, {}];

function asd(argument) {
	dz[0];
	for (let i = 0; i < dz.length; i++) {

		let home = [];
		home.push(typeof dz[i]);


		console.log(home);
	};


};
asd();



// let array = Array.from({ length: 35 }).map((value, index) => index % 2 ? { age: index + 2 } : { age: NaN });
// console.log(array); //[ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
// console.log(array.length); // 35

/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты. 
 Напишите функцию которая внутри цикла проходится по каждому элементу массива 
    И проверяет какой тип данных содержит свойство age, если тип данных NaN, тогда добавляет данному объекту свойство unknownAge: true
    Далее создайте новый массив содержащий все объекты есть свойство unknownAge:true
*/